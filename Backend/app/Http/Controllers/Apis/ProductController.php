<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Image;
use App\Models\Size;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

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
     *     @OA\Response(
     *         response=500,
     *         description="Internal Server Error",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="message", type="string", example="Internal Server Error"),
     *         ),
     *     ),
     * )
     */
    public function index() {
        try {
            $product = Product::with(['categories', 'subcategories', 'evaluates', 'images', 'sizes'])
                            ->get();

            return response()->json([
                'data' => $product
            ], 200);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 500);            
        }
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
                ->where('is_active', 'active')
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
                ->where('is_active', 'active')
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
                ->where('is_active', 'active')
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
                ->where(['category_id' => $categoryId, 'is_active' => 'active']) 
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
     *         description="Product data",
     *         @OA\MediaType(
     *             mediaType="multipart/form-data",
     *             @OA\Schema(
     *                 @OA\Property(property="product_name", type="string", example="Example Product"),
     *                 @OA\Property(property="initial_price", type="number", format="float", example=10.5),
     *                 @OA\Property(property="discount", type="number", format="integer", example=20),
     *                 @OA\Property(property="description", type="string", example="Description of the product"),
     *                 @OA\Property(property="is_active", type="string", enum={"active", "inactive"}, example="active"),
     *                 @OA\Property(property="category_id", type="integer", format="int64", example=1),
     *                 @OA\Property(property="subcat_id", type="integer", format="int64", example=1),
     *                 @OA\Property(
     *                     property="sizes",
     *                     type="array",
     *                     @OA\Items(
     *                         type="object",
     *                         @OA\Property(property="label", type="string", example="S"),
     *                         @OA\Property(property="quantity", type="integer", format="int64", example=10)
     *                     )
     *                 ),
     *                 @OA\Property(
     *                     property="images[]",
     *                     type="array",
     *                     @OA\Items(
     *                     type="string",
     *                     format="binary",
     *                     description="The image file of the product",
     *                     
     *                     )
     *                 )
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Product created successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Product created successfully"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validation error",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="The given data was invalid."),
     *         )
     *     )
     * )
     */
    public function store(Request $request) {
        try {
            $data = $request->validate([
                'product_name' => 'required|unique:products,product_name',
                'initial_price' => 'required|numeric|min:0',
                'description' => 'required|string',
                'is_active' => 'required|in:active,inactive',
                'category_id' => 'required|exists:categories,id',
                'subcat_id' => 'required|exists:sub_categories,id',
                'discount' => 'nullable|integer|min:0|max:100',
            ]);
    
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
            }else{
                return response()->json(['message' => 'No file image'], 422);
            }
    
            $sizes = $request->input('sizes');
            foreach ($sizes as $size) {
                Size::create([
                    'label' => $size['label'],
                    'quantity' => $size['quantity'] ?? 0,
                    'product_id' => $product->id
                ]);
            }
    
            return response()->json(['message' => 'Product created successfully'], 201);
        } catch (\Throwable $e) {
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
     *             @OA\Property(property="subcat_id", type="integer", example=1),
     *             @OA\Property(property="images", type="array",
     *                @OA\Items(
     *                     @OA\Property(property="id", type="integer", example=1),
     *                     @OA\Property(property="image", type="string", example="https://image.png"),
     *                     @OA\Property(property="product_id", type="integer", example=1),
     *                ),
     *             ),
     *             @OA\Property(property="sizes", type="array",
     *                 @OA\Items(
     *                     @OA\Property(property="id", type="integer", example=1),
     *                     @OA\Property(property="label", type="string", example="S"),
     *                     @OA\Property(property="quantity", type="integer", example=50),
     *                     @OA\Property(property="product_id", type="integer", example=1),
     *                 ),
     *             ),
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
            $product = Product::with(['images', 'sizes'])
                ->where('id', $id) 
                ->get();

            return response()->json(['data' => $product], 200);
        } catch (\Throwable $e) {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }

    /**
     * @OA\PUT(
     *     path="/api/v1/products/{id}",
     *     summary="Update a product",
     *     tags={"Products"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="ID of the product to update",
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         description="Product data",
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 required={"_method", "product_name","initial_price","description","is_active","category_id","subcat_id","sizes"},
     *                 @OA\Property(property="_method", type="string", example="PUT"),
     *                 @OA\Property(property="product_name", type="string", example="Example Product"),
     *                 @OA\Property(property="initial_price", type="number", format="float", example=10.5),
     *                 @OA\Property(property="discount", type="number", format="integer", example=20),
     *                 @OA\Property(property="description", type="string", example="Description of the product"),
     *                 @OA\Property(property="is_active", type="string", enum={"active", "inactive"}, example="active"),
     *                 @OA\Property(property="category_id", type="integer", example=1),
     *                 @OA\Property(property="subcat_id", type="integer", example=1),
     *                 @OA\Property(
     *                     property="images",
     *                     type="array",
     *                     @OA\Items(type="string")
     *                 ),
     *                 @OA\Property(
     *                     property="sizes",
     *                     type="array",
     *                     @OA\Items(
     *                         @OA\Property(property="label", type="string", example="S"),
     *                         @OA\Property(property="quantity", type="integer", example=10)
     *                     )
     *                 )
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Product updated successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Product updated successfully"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Validation error or other error",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Error message"),
     *         )
     *     )
     * )
     */
    public function update(Request $request, $id) {
        try {
            $data = $request->validate([
                'product_name' => 'required|unique:products,product_name,'.$id,
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

            $product = Product::findOrFail($id);

            $product->update($data);

            if ($request->hasFile('images')) {
                Image::where('product_id', $id)->delete();
                foreach ($request->file('images') as $image) {
                    $path = $image->store('public/images');
                    $baseUrl = env('AWS_S3_BASE_URL');
                    $fullPath = $baseUrl . $path;
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

            return response()->json(['message' => 'Product updated successfully'], 200);
        }catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }

    /**
     * @OA\Delete(
     *     path="/api/v1/products/{id}",
     *     tags={"Products"},
     *     summary="Delete product by ID",
     *     description="Delete a specific product by its ID.",
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
     *             @OA\Property(property="message", type="string", example="Product deleted successfully"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Product not found",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Product not found"),
     *             @OA\Property(property="status", type="integer", example=404)
     *         )
     *     )
     * )
     */
    public function delete($id) {
        try {
            $product = Product::findOrFail($id);

            $product->delete();

            return response()->json(['message' => 'Product deleted successfully'], 200);
        } catch (\Throwable $e) {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }
}
