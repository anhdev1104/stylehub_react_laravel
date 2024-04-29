<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/v1/products",
     *     tags={"Products"},
     *     summary="Get all products details",
     *     description="Returns all products of the site",
     *     @OA\Response(
     *          response="200", 
     *          description="Success",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(
     *                  @OA\Property(property="id", type="integer", example=1),
     *                  @OA\Property(property="product_name", type="string", example="Product name 1"),
     *                  @OA\Property(property="discount", type="integer", example=50),
     *                  @OA\Property(property="price", type="integer", example=100),
     *                  @OA\Property(property="initial_price", type="integer", example=50),
     *                  @OA\Property(property="description", type="string", example="Description 1"),
     *                  @OA\Property(property="is_active", type="string", example="Active"),
     *                  @OA\Property(property="category_id", type="integer", example=1),
     *                  @OA\Property(property="subcat_id", type="integer", example=1),
     *                  @OA\Property(property="categories", type="object",
     *                      @OA\Property(property="id", type="integer", example=1),
     *                      @OA\Property(property="position", type="integer", example=1),
     *                      @OA\Property(property="category_name", type="string", example="Category name"),
     *                  ),
     *                  @OA\Property(property="subcategories", type="object",
     *                      @OA\Property(property="id", type="integer", example=1),
     *                      @OA\Property(property="subcat_name", type="string", example="Subcat name 1"),
     *                      @OA\Property(property="position", type="integer", example=1),
     *                      @OA\Property(property="category_id", type="integer", example=1),
     *                  ),
     *                  @OA\Property(property="evaluates", type="array",
     *                      @OA\Items(
     *                          @OA\Property(property="id", type="integer", example=1),
     *                          @OA\Property(property="rating", type="integer", example=1),
     *                          @OA\Property(property="user_id", type="integer", example=1),
     *                          @OA\Property(property="product_id", type="integer", example=1),
     *                    ),
     *                  ),
     *                  @OA\Property(property="images", type="array",
     *                      @OA\Items(
     *                          @OA\Property(property="id", type="integer", example=1),
     *                          @OA\Property(property="image", type="string", example="https://image.png"),
     *                          @OA\Property(property="product_id", type="integer", example=1),
     *                     ),
     *                  ),
     *                  @OA\Property(property="sizes", type="array",
     *                      @OA\Items(
     *                          @OA\Property(property="id", type="integer", example=1),
     *                          @OA\Property(property="label", type="string", example="S"),
     *                          @OA\Property(property="quantity", type="integer", example=50),
     *                          @OA\Property(property="product_id", type="integer", example=1),
     *                      ),
     *                  ),
     *              ),
     *          ),
     *      ),
     * )
     */
    public function index() {
        $product = Product::with(['categories', 'subcategories', 'evaluates', 'images', 'sizes'])
                            ->get();

        return response()->json([
            'data' => $product
        ], 200);
    }

    /**
     * @OA\Get(
     *     path="/api/v1/new-products",
     *     tags={"Products"},
     *     summary="Get the latest products",
     *     description="Returns a list of the 10 newest products",
     *     @OA\Response(
     *          response="200", 
     *          description="Success",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(
     *                  @OA\Property(property="id", type="integer", example=1),
     *                  @OA\Property(property="product_name", type="string", example="Product name 1"),
     *                  @OA\Property(property="discount", type="integer", example=50),
     *                  @OA\Property(property="price", type="integer", example=100),
     *                  @OA\Property(property="initial_price", type="integer", example=50),
     *                  @OA\Property(property="description", type="string", example="Description 1"),
     *                  @OA\Property(property="is_active", type="string", example="Active"),
     *                  @OA\Property(property="category_id", type="integer", example=1),
     *                  @OA\Property(property="subcat_id", type="integer", example=1),
     *                  @OA\Property(property="categories", type="object",
     *                      @OA\Property(property="id", type="integer", example=1),
     *                      @OA\Property(property="position", type="integer", example=1),
     *                      @OA\Property(property="category_name", type="string", example="Category name"),
     *                  ),
     *                  @OA\Property(property="subcategories", type="object",
     *                      @OA\Property(property="id", type="integer", example=1),
     *                      @OA\Property(property="subcat_name", type="string", example="Subcat name 1"),
     *                      @OA\Property(property="position", type="integer", example=1),
     *                      @OA\Property(property="category_id", type="integer", example=1),
     *                  ),
     *                  @OA\Property(property="evaluates", type="array",
     *                      @OA\Items(
     *                          @OA\Property(property="id", type="integer", example=1),
     *                          @OA\Property(property="rating", type="integer", example=1),
     *                          @OA\Property(property="user_id", type="integer", example=1),
     *                          @OA\Property(property="product_id", type="integer", example=1),
     *                    ),
     *                  ),
     *                  @OA\Property(property="images", type="array",
     *                      @OA\Items(
     *                          @OA\Property(property="id", type="integer", example=1),
     *                          @OA\Property(property="image", type="string", example="https://image.png"),
     *                          @OA\Property(property="product_id", type="integer", example=1),
     *                     ),
     *                  ),
     *                  @OA\Property(property="sizes", type="array",
     *                      @OA\Items(
     *                          @OA\Property(property="id", type="integer", example=1),
     *                          @OA\Property(property="label", type="string", example="S"),
     *                          @OA\Property(property="quantity", type="integer", example=50),
     *                          @OA\Property(property="product_id", type="integer", example=1),
     *                      ),
     *                  ),
     *              ),
     *          ),
     *      ),
     * )
     */
    public function newProducts() {
        $products = Product::with(['categories', 'subcategories', 'evaluates', 'images', 'sizes'])
                ->orderBy('created_at', 'desc')
                ->limit(10)
                ->get();
        return response()->json([
            'data' => $products
        ], 200);
    }

    /**
     * @OA\Get(
     *     path="/api/v1/popular-products",
     *     tags={"Products"},
     *     summary="Get the most popular products",
     *     description="Returns a list of the 10 most popular products.",
     *     @OA\Response(
     *          response="200", 
     *          description="Success",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(
     *                  @OA\Property(property="id", type="integer", example=1),
     *                  @OA\Property(property="product_name", type="string", example="Product name 1"),
     *                  @OA\Property(property="discount", type="integer", example=50),
     *                  @OA\Property(property="price", type="integer", example=100),
     *                  @OA\Property(property="initial_price", type="integer", example=50),
     *                  @OA\Property(property="description", type="string", example="Description 1"),
     *                  @OA\Property(property="is_active", type="string", example="Active"),
     *                  @OA\Property(property="category_id", type="integer", example=1),
     *                  @OA\Property(property="subcat_id", type="integer", example=1),
     *                  @OA\Property(property="categories", type="object",
     *                      @OA\Property(property="id", type="integer", example=1),
     *                      @OA\Property(property="position", type="integer", example=1),
     *                      @OA\Property(property="category_name", type="string", example="Category name"),
     *                  ),
     *                  @OA\Property(property="subcategories", type="object",
     *                      @OA\Property(property="id", type="integer", example=1),
     *                      @OA\Property(property="subcat_name", type="string", example="Subcat name 1"),
     *                      @OA\Property(property="position", type="integer", example=1),
     *                      @OA\Property(property="category_id", type="integer", example=1),
     *                  ),
     *                  @OA\Property(property="evaluates", type="array",
     *                      @OA\Items(
     *                          @OA\Property(property="id", type="integer", example=1),
     *                          @OA\Property(property="rating", type="integer", example=1),
     *                          @OA\Property(property="user_id", type="integer", example=1),
     *                          @OA\Property(property="product_id", type="integer", example=1),
     *                    ),
     *                  ),
     *                  @OA\Property(property="images", type="array",
     *                      @OA\Items(
     *                          @OA\Property(property="id", type="integer", example=1),
     *                          @OA\Property(property="image", type="string", example="https://image.png"),
     *                          @OA\Property(property="product_id", type="integer", example=1),
     *                     ),
     *                  ),
     *                  @OA\Property(property="sizes", type="array",
     *                      @OA\Items(
     *                          @OA\Property(property="id", type="integer", example=1),
     *                          @OA\Property(property="label", type="string", example="S"),
     *                          @OA\Property(property="quantity", type="integer", example=50),
     *                          @OA\Property(property="product_id", type="integer", example=1),
     *                      ),
     *                  ),
     *              ),
     *          ),
     *      ),
     * )
     */
    public function popularProducts() {
        $products = Product::with(['categories', 'subcategories', 'evaluates', 'images', 'sizes'])
                ->orderBy('created_at', 'asc')
                ->limit(10)
                ->get();
        return response()->json([
            'data' => $products
        ], 200);
    }

    /**
     * @OA\Get(
     *     path="/api/v1/seller-products",
     *     tags={"Products"},
     *     summary="Get the most discounted products",
     *     description="Returns a list of the 10 specific products with the highest discount.",
     *     @OA\Response(
     *          response="200", 
     *          description="Success",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(
     *                  @OA\Property(property="id", type="integer", example=1),
     *                  @OA\Property(property="product_name", type="string", example="Product name 1"),
     *                  @OA\Property(property="discount", type="integer", example=50),
     *                  @OA\Property(property="price", type="integer", example=100),
     *                  @OA\Property(property="initial_price", type="integer", example=50),
     *                  @OA\Property(property="description", type="string", example="Description 1"),
     *                  @OA\Property(property="is_active", type="string", example="Active"),
     *                  @OA\Property(property="category_id", type="integer", example=1),
     *                  @OA\Property(property="subcat_id", type="integer", example=1),
     *                  @OA\Property(property="categories", type="object",
     *                      @OA\Property(property="id", type="integer", example=1),
     *                      @OA\Property(property="position", type="integer", example=1),
     *                      @OA\Property(property="category_name", type="string", example="Category name"),
     *                  ),
     *                  @OA\Property(property="subcategories", type="object",
     *                      @OA\Property(property="id", type="integer", example=1),
     *                      @OA\Property(property="subcat_name", type="string", example="Subcat name 1"),
     *                      @OA\Property(property="position", type="integer", example=1),
     *                      @OA\Property(property="category_id", type="integer", example=1),
     *                  ),
     *                   @OA\Property(property="evaluates", type="array",
     *                      @OA\Items(
     *                          @OA\Property(property="id", type="integer", example=1),
     *                          @OA\Property(property="rating", type="integer", example=1),
     *                          @OA\Property(property="user_id", type="integer", example=1),
     *                          @OA\Property(property="product_id", type="integer", example=1),
     *                    ),
     *                  ),
     *                  @OA\Property(property="images", type="array",
     *                      @OA\Items(
     *                          @OA\Property(property="id", type="integer", example=1),
     *                          @OA\Property(property="image", type="string", example="https://image.png"),
     *                          @OA\Property(property="product_id", type="integer", example=1),
     *                     ),
     *                  ),
     *                  @OA\Property(property="sizes", type="array",
     *                      @OA\Items(
     *                          @OA\Property(property="id", type="integer", example=1),
     *                          @OA\Property(property="label", type="string", example="S"),
     *                          @OA\Property(property="quantity", type="integer", example=50),
     *                          @OA\Property(property="product_id", type="integer", example=1),
     *                      ),
     *                  ),
     *              ),
     *          ),
     *      ),
     * )
     */
    public function sellerProducts() {
        $products = Product::with(['categories', 'subcategories', 'evaluates', 'images', 'sizes'])
                ->where('discount', '>', 0) 
                ->orderBy('discount', 'desc')
                ->limit(10)
                ->get();
        return response()->json([
            'data' => $products
        ], 200);
    }

    /**
     * @OA\Get(
     *     path="/api/v1/categories/{categoryId}/products",
     *     tags={"Products"},
     *     summary="Get the most discounted products",
     *     description="Returns a list of products for a specific category.",
     *       @OA\Parameter(
     *          name="categoryId",
     *          in="path",
     *          description="Category ID",
     *          required=true,
     *          @OA\Schema(
     *              type="integer",
     *              format="int64"
     *          )
     *      ),
     *     @OA\Response(
     *          response="200", 
     *          description="Success",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(
     *                  @OA\Property(property="id", type="integer", example=1),
     *                  @OA\Property(property="product_name", type="string", example="Product name 1"),
     *                  @OA\Property(property="discount", type="integer", example=50),
     *                  @OA\Property(property="price", type="integer", example=100),
     *                  @OA\Property(property="initial_price", type="integer", example=50),
     *                  @OA\Property(property="description", type="string", example="Description 1"),
     *                  @OA\Property(property="is_active", type="string", example="Active"),
     *                  @OA\Property(property="category_id", type="integer", example=1),
     *                  @OA\Property(property="subcat_id", type="integer", example=1),
     *                  @OA\Property(property="categories", type="object",
     *                      @OA\Property(property="id", type="integer", example=1),
     *                      @OA\Property(property="position", type="integer", example=1),
     *                      @OA\Property(property="category_name", type="string", example="Category name"),
     *                  ),
     *                  @OA\Property(property="subcategories", type="object",
     *                      @OA\Property(property="id", type="integer", example=1),
     *                      @OA\Property(property="subcat_name", type="string", example="Subcat name 1"),
     *                      @OA\Property(property="position", type="integer", example=1),
     *                      @OA\Property(property="category_id", type="integer", example=1),
     *                  ),
     *                   @OA\Property(property="evaluates", type="array",
     *                      @OA\Items(
     *                          @OA\Property(property="id", type="integer", example=1),
     *                          @OA\Property(property="rating", type="integer", example=1),
     *                          @OA\Property(property="user_id", type="integer", example=1),
     *                          @OA\Property(property="product_id", type="integer", example=1),
     *                    ),
     *                  ),
     *                  @OA\Property(property="images", type="array",
     *                      @OA\Items(
     *                          @OA\Property(property="id", type="integer", example=1),
     *                          @OA\Property(property="image", type="string", example="https://image.png"),
     *                          @OA\Property(property="product_id", type="integer", example=1),
     *                     ),
     *                  ),
     *                  @OA\Property(property="sizes", type="array",
     *                      @OA\Items(
     *                          @OA\Property(property="id", type="integer", example=1),
     *                          @OA\Property(property="label", type="string", example="S"),
     *                          @OA\Property(property="quantity", type="integer", example=50),
     *                          @OA\Property(property="product_id", type="integer", example=1),
     *                      ),
     *                  ),
     *              ),
     *          ),
     *      ),
     *      @OA\Response(
     *               response=404,
     *               description="No products found for this category",
     *               @OA\JsonContent(
     *                   type="object",
     *                   @OA\Property(
     *                       property="message",
     *                       type="string",
     *                       example="No products found for this category."
     *                   ),
     *                   @OA\Property(
     *                       property="status",
     *                       type="integer",
     *                       example=404
     *                   )
     *               )
     *           )
     *      )
     */
    public function getProductsByCategory($categoryId) {
        $products = Product::with(['categories', 'subcategories', 'evaluates', 'images', 'sizes'])
                ->where('category_id', $categoryId) 
                ->limit(10)
                ->get();
        if ($products->isEmpty()) {
            return response()->json([
                'message' => 'No products found for this category.'
            ], 404);
        }
    
        return response()->json([
            'products' => $products
        ], 200);
    }

    /**
     * @OA\Get(
     *     path="/api/v1/subcategories/{subcatId}/products",
     *     tags={"Products"},
     *     summary="Get the most discounted products",
     *     description="Returns a list of products for a specific subcategory.",
     *       @OA\Parameter(
     *          name="subcatId",
     *          in="path",
     *          description="Subcategory ID",
     *          required=true,
     *          @OA\Schema(
     *              type="integer",
     *              format="int64"
     *          )
     *      ),
     *     @OA\Response(
     *          response="200", 
     *          description="Success",
     *          @OA\JsonContent(
     *              type="array",
     *              @OA\Items(
     *                  @OA\Property(property="id", type="integer", example=1),
     *                  @OA\Property(property="product_name", type="string", example="Product name 1"),
     *                  @OA\Property(property="discount", type="integer", example=50),
     *                  @OA\Property(property="price", type="integer", example=100),
     *                  @OA\Property(property="initial_price", type="integer", example=50),
     *                  @OA\Property(property="description", type="string", example="Description 1"),
     *                  @OA\Property(property="is_active", type="string", example="Active"),
     *                  @OA\Property(property="category_id", type="integer", example=1),
     *                  @OA\Property(property="subcat_id", type="integer", example=1),
     *                  @OA\Property(property="categories", type="object",
     *                      @OA\Property(property="id", type="integer", example=1),
     *                      @OA\Property(property="position", type="integer", example=1),
     *                      @OA\Property(property="category_name", type="string", example="Category name"),
     *                  ),
     *                  @OA\Property(property="subcategories", type="object",
     *                      @OA\Property(property="id", type="integer", example=1),
     *                      @OA\Property(property="subcat_name", type="string", example="Subcat name 1"),
     *                      @OA\Property(property="position", type="integer", example=1),
     *                      @OA\Property(property="category_id", type="integer", example=1),
     *                  ),
     *                   @OA\Property(property="evaluates", type="array",
     *                      @OA\Items(
     *                          @OA\Property(property="id", type="integer", example=1),
     *                          @OA\Property(property="rating", type="integer", example=1),
     *                          @OA\Property(property="user_id", type="integer", example=1),
     *                          @OA\Property(property="product_id", type="integer", example=1),
     *                    ),
     *                  ),
     *                  @OA\Property(property="images", type="array",
     *                      @OA\Items(
     *                          @OA\Property(property="id", type="integer", example=1),
     *                          @OA\Property(property="image", type="string", example="https://image.png"),
     *                          @OA\Property(property="product_id", type="integer", example=1),
     *                     ),
     *                  ),
     *                  @OA\Property(property="sizes", type="array",
     *                      @OA\Items(
     *                          @OA\Property(property="id", type="integer", example=1),
     *                          @OA\Property(property="label", type="string", example="S"),
     *                          @OA\Property(property="quantity", type="integer", example=50),
     *                          @OA\Property(property="product_id", type="integer", example=1),
     *                      ),
     *                  ),
     *              ),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=404,
     *          description="No products found for this subcategory",
     *          @OA\JsonContent(
     *              type="object",
     *              @OA\Property(
     *                  property="message",
     *                  type="string",
     *                  example="No products found for this subcategory."
     *              ),
     *              @OA\Property(
     *                  property="status",
     *                  type="integer",
     *                  example=404
     *              )
     *          )
     *      )
     * )
     */
    public function getProductsBySubcategory($subcatId) {
        $products = Product::with(['categories', 'subcategories', 'evaluates', 'images', 'sizes'])
                ->where('subcat_id', $subcatId) 
                ->limit(10)
                ->get();
        if ($products->isEmpty()) {
            return response()->json([
                'message' => 'No products found for this subcategory.'
            ], 404);
        }
    
        return response()->json([
            'products' => $products
        ], 200);
    }

    /**
     * @OA\Post(
     *     path="/api/v1/products",
     *     summary="Create a new product",
     *     tags={"Products"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="product_name", type="string", example="Product name"),
     *             @OA\Property(property="initial_price", type="float", example="100"),
     *             @OA\Property(property="description", type="string", example="Description"),
     *             @OA\Property(property="is_active", type="string", example="active"),
     *             @OA\Property(property="category_id", type="integer", example="1"),
     *             @OA\Property(property="subcat_id", type="integer", example="1"),
     *             @OA\Property(property="discount", type="integer", format="int32", nullable=true, example="0"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Product created successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Product created successfully"),
     *             @OA\Property(property="id", type="integer", example="123"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Unprocessable Entity",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Validation error")
     *         )
     *     )
     * )
     */
    public function store(Request $request) {
        try {
            $data = $request->validate([
                'product_name' => 'required|unique:products,product_name',
                'initial_price' => 'required',
                'description' => 'required',
                'is_active' => 'required',
                'category_id' => 'required|exists:categories,id',
                'subcat_id' => 'required|exists:sub_categories,id',
                'discount' => 'nullable|integer',
            ]);
    
            $discount = $data['discount'] ?? 0;
            $data['price'] = $data['initial_price'];

            if ($discount !== null && $discount !== 0) {
                $data['price'] = $data['initial_price'] - ($data['initial_price'] * $discount / 100);
            }

            $product = Product::create($data);

            return response()->json(['message' => 'Product created successfully', 'id' => $product->id], 201);
        }catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }

    }

   /**
     * @OA\Get(
     *     path="/api/v1/products/{id}",
     *     tags={"Products"},
     *     summary="Get product by ID",
     *     description="Returns information about a specific product by its ID.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="Product ID",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Success",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="id", type="integer", example=1),
     *             @OA\Property(property="product_name", type="string", example="Product name 1"),
     *             @OA\Property(property="discount", type="number", format="float", example=50),
     *             @OA\Property(property="price", type="number", format="float", example=100),
     *             @OA\Property(property="initial_price", type="number", format="float", example=50),
     *             @OA\Property(property="description", type="string", example="Description 1"),
     *             @OA\Property(property="is_active", type="string", example="active"),
     *             @OA\Property(property="category_id", type="integer", example=1),
     *             @OA\Property(property="subcat_id", type="integer", example=1)
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Product not found",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="message", type="string", example="Product not found"),
     *             @OA\Property(property="status", type="integer", example=404)
     *         )
     *     )
     * )
     */
    public function getById($id) {
        try {
            $product =  Product::findOrFail($id);

            return response()->json(['data' => $product], 200);
        } catch (\Throwable $e) {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }

}
