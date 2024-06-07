<?php 
namespace App\Services;

use App\Models\Product;
use App\Models\Image;
use App\Models\Size;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class ProductServices
{
    public function getAllProducts($request)
    {
        $query = Product::with(['category', 'subcategory', 'evaluates', 'images', 'sizes']);
        $limit = $request->query('limit');

        if ($request->has('page')) {
            $products = $query->paginate($limit);

            return [
                'data' => $products->items(),
                'prev_page_url' => $products->previousPageUrl(),
                'next_page_url' => $products->nextPageUrl(),
            ];
        }

        if ($request->has('search')) {
            $searchTerm = $request->query('search');
            $query->where(function($q) use ($searchTerm) {
                $q->where('product_name', 'like', "%$searchTerm%")
                    ->orWhere('description', 'like', "%$searchTerm%")
                    ->orWhereHas('category', function($cq) use ($searchTerm) {
                        $cq->where('category_name', 'like', "%$searchTerm%");
                    })
                    ->orWhereHas('subcategory', function($sq) use ($searchTerm) {
                        $sq->where('subcat_name', 'like', "%$searchTerm%");
                    });
            });

            $products = $query->limit($limit)->get();

            return ['data' => $products];
        }

        $products = $query->get();

        return ['data' => $products];
    }

    public function getNewProducts()
    {
        return Product::with(['category', 'subcategory', 'evaluates', 'images', 'sizes'])
            ->orderBy('created_at', 'desc')
            ->where('is_active', 'active')
            ->limit(10)
            ->get();
    }

    public function getRandomProducts($request)
    {
        $limit = $request->query('limit', 10);
        return Product::with(['category', 'subcategory', 'evaluates', 'images', 'sizes'])
            ->where('is_active', 'active')
            ->inRandomOrder()
            ->limit($limit)
            ->get();
    }

    public function getPopularProducts()
    {
        return Product::with(['category', 'subcategory', 'evaluates', 'images', 'sizes'])
            ->where('is_active', 'active')
            ->orderBy('created_at', 'asc')
            ->limit(10)
            ->get();
    }

    public function getSellerProducts()
    {
        return Product::with(['category', 'subcategory', 'evaluates', 'images', 'sizes'])
            ->where('discount', '>', 0)
            ->where('is_active', 'active')
            ->orderBy('discount', 'desc')
            ->limit(10)
            ->get();
    }

    public function getProductsByCategory($request, $categoryId)
    {
        $limit = $request->query('limit');
        $filter = $request->query('filter');
        $query = Product::with(['category', 'subcategory', 'evaluates', 'images', 'sizes'])
            ->where(['category_id' => $categoryId, 'is_active' => 'active']);

        $this->applyFilter($query, $filter);

        if ($request->has('page')) {
            $products = $query->paginate($limit);
        } else {
            $products = $query->get();
        }

        if ($products->isEmpty()) {
            return ['message' => 'No products found for this category.'];
        }

        return [
            'data' => $request->has('page') ? $products->items() : $products,
            'prev_page_url' => $request->has('page') ? $products->previousPageUrl() : null,
            'next_page_url' => $request->has('page') ? $products->nextPageUrl() : null
        ];
    }

    public function getProductsBySubcategory($request, $subcatId)
    {
        $limit = $request->query('limit');
        $filter = $request->query('filter');

        $query = Product::with(['category', 'subcategory', 'evaluates', 'images', 'sizes'])
            ->where('subcat_id', $subcatId);

        $this->applyFilter($query, $filter);

        if ($request->has('page')) {
            $products = $query->paginate($limit);
        } else {
            $products = $query->get();
        }

        if ($products->isEmpty()) {
            return ['message' => 'No products found for this subcategory.'];
        }

        return [
            'data' => $request->has('page') ? $products->items() : $products,
            'prev_page_url' => $request->has('page') ? $products->previousPageUrl() : null,
            'next_page_url' => $request->has('page') ? $products->nextPageUrl() : null
        ];
    }

    public function createProduct($data, $request)
    {
        $discount = $data['discount'] ?? 0;
        $data['price'] = $data['initial_price'] * (1 - ($discount / 100));

        $product = Product::create($data);

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $image) {
                $path = $image->store('public/images');
                $baseUrl = env('AWS_S3_BASE_URL');
                $fullPath = $baseUrl . $path;

                Storage::disk('s3')->setVisibility($path, 'public');
                Image::create([
                    'image' => $fullPath,
                    'product_id' => $product->id
                ]);
            }
        } else {
            throw new \Exception('No file image');
        }

        $sizes = $request->input('sizes');
        foreach ($sizes as $size) {
            Size::create([
                'label' => $size['label'],
                'quantity' => $size['quantity'] ?? 0,
                'product_id' => $product->id
            ]);
        }

        return Product::with(['category', 'subcategory', 'evaluates', 'images', 'sizes'])
            ->where('id', $product->id)
            ->first();
    }

    public function getProductById($id)
    {
        return Product::with(['images', 'sizes'])->findOrFail($id);
    }

    public function updateProduct($data, $request, $id)
    {
        $discount = $data['discount'] ?? 0;
        $data['price'] = $data['initial_price'];

        if ($discount !== null && $discount !== 0) {
            $data['price'] = $data['initial_price'] - ($data['initial_price'] * $discount / 100);
        }

        $product = Product::findOrFail($id);

        $product->update($data);

        if ($request->hasFile('images')) {
            Image::where('product_id', $id)->delete();
            foreach ($request->file('images') as $image) {
                $path = $image->store('public/images');
                $baseUrl = env('AWS_S3_BASE_URL');
                $fullPath = $baseUrl . $path;
                Storage::disk('s3')->setVisibility($path, 'public');
                Image::create([
                    'image' => $fullPath,
                    'product_id' => $id
                ]);
            }
        }

        $sizes = $request->input('sizes');
        foreach ($sizes as $size) {
            Size::updateOrCreate(
                ['product_id' => $id, 'label' => $size['label']],
                ['quantity' => $size['quantity'] ?? 0]
            );
        }
    }

    public function deleteProduct($id)
    {
        $product = Product::findOrFail($id);
        $product->delete();
    }

    private function applyFilter($query, $filter)
    {
        switch ($filter) {
            case 'desc':
                $query->orderBy('created_at', 'desc');
                break;
            case 'asc':
                $query->orderBy('created_at', 'asc');
                break;
            case 'price-desc':
                $query->orderBy('price', 'desc');
                break;
            case 'price-asc':
                $query->orderBy('price', 'asc');
                break;
            case 'sale-desc':
                $query->orderBy('discount', 'desc');
                break;
            case 'sale-asc':
                $query->orderBy('discount', 'asc');
                break;
        }
    }
}