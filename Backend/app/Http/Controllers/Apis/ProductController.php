<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\Image;
use App\Models\Size;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\ProductRequest;
use App\Services\ProductServices;

class ProductController extends Controller
{
    protected $productService;
    public function __construct(ProductServices $productService)
    {
        $this->productService = $productService;
    }
    /**
     * @OA\Get(
     *     path="/api/v1/products",
     *     tags={"Products"},
     *     summary="Get all products with optional pagination",
     *     description="Returns all products or paginated products based on pagination parameters",
     *     @OA\Parameter(
     *         name="page",
     *         in="query",
     *         description="Page number for pagination",
     *         required=false,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Parameter(
     *         name="limit",
     *         in="query",
     *         description="Number of products per page for pagination",
     *         required=false,
     *         @OA\Schema(type="integer")
     *     ),
     *     @OA\Parameter(
     *         name="search",
     *         in="query",
     *         description="Search term to filter products by name, description, category name, or subcategory name",
     *         required=false,
     *         @OA\Schema(type="string")
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="data", type="array",
     *                 @OA\Items(
     *                     type="object",
     *                     @OA\Property(property="id", type="integer", example=1),
     *                     @OA\Property(property="product_name", type="string", example="Product name 1"),
     *                     @OA\Property(property="discount", type="integer", example=50),
     *                     @OA\Property(property="price", type="integer", example=100),
     *                     @OA\Property(property="initial_price", type="integer", example=50),
     *                     @OA\Property(property="description", type="string", example="Description 1"),
     *                     @OA\Property(property="is_active", type="string", example="Active"),
     *                     @OA\Property(property="category_id", type="integer", example=1),
     *                     @OA\Property(property="subcat_id", type="integer", example=1),
     *                     @OA\Property(property="categories", type="object",
     *                         @OA\Property(property="id", type="integer", example=1),
     *                         @OA\Property(property="position", type="integer", example=1),
     *                         @OA\Property(property="category_name", type="string", example="Category name"),
     *                     ),
     *                     @OA\Property(property="subcategories", type="object",
     *                         @OA\Property(property="id", type="integer", example=1),
     *                         @OA\Property(property="subcat_name", type="string", example="Subcat name 1"),
     *                         @OA\Property(property="position", type="integer", example=1),
     *                         @OA\Property(property="category_id", type="integer", example=1),
     *                     ),
     *                     @OA\Property(property="evaluates", type="array",
     *                         @OA\Items(
     *                             @OA\Property(property="id", type="integer", example=1),
     *                             @OA\Property(property="rating", type="integer", example=1),
     *                             @OA\Property(property="user_id", type="integer", example=1),
     *                             @OA\Property(property="product_id", type="integer", example=1),
     *                        ),
     *                     ),
     *                     @OA\Property(property="images", type="array",
     *                         @OA\Items(
     *                             @OA\Property(property="id", type="integer", example=1),
     *                             @OA\Property(property="image", type="string", example="https://image.png"),
     *                             @OA\Property(property="product_id", type="integer", example=1),
     *                        ),
     *                     ),
     *                     @OA\Property(property="sizes", type="array",
     *                         @OA\Items(
     *                             @OA\Property(property="id", type="integer", example=1),
     *                             @OA\Property(property="label", type="string", example="S"),
     *                             @OA\Property(property="quantity", type="integer", example=50),
     *                             @OA\Property(property="product_id", type="integer", example=1),
     *                         ),
     *                     ),
     *                 ),
     *             ),
     *             @OA\Property(property="prev_page_url", type="string"),
     *             @OA\Property(property="next_page_url", type="string"),
     *         )
     *     ),
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
    public function index(Request $request)
    {
        try {
            $result = $this->productService->getAllProducts($request);
            return response()->json($result, 200);
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
    public function newProducts()
    {
        try {
            $products = $this->productService->getNewProducts();
            return response()->json(['data' => $products], 200);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    /**
     * @OA\Get(
     *     path="/api/v1/random-products",
     *     tags={"Products"},
     *     summary="Get the random products",
     *     description="Returns a list of the 10 random products",
     *     @OA\Parameter(
     *         name="limit",
     *         in="query",
     *         description="Number of products to retrieve",
     *         required=false,
     *         @OA\Schema(
     *             type="integer",
     *             default=10
     *         )
     *     ),
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
     *                      ),
     *                  ),
     *                  @OA\Property(property="images", type="array",
     *                      @OA\Items(
     *                          @OA\Property(property="id", type="integer", example=1),
     *                          @OA\Property(property="image", type="string", example="https://image.png"),
     *                          @OA\Property(property="product_id", type="integer", example=1),
     *                      ),
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
    public function randomProducts(Request $request)
    {
        try {
            $products = $this->productService->getRandomProducts($request);
            return response()->json(['data' => $products], 200);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
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
    public function popularProducts()
    {
        try {
            $products = $this->productService->getPopularProducts();
            return response()->json(['data' => $products], 200);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
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
    public function sellerProducts()
    {
        try {
            $products = $this->productService->getSellerProducts();
            return response()->json(['data' => $products], 200);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    /**
     * @OA\Get(
     *     path="/api/v1/categories/{categoryId}/products",
     *     tags={"Products"},
     *     summary="Get products by category ID",
     *     description="Returns a list of products for a specific category.",
     *     @OA\Parameter(
     *         name="categoryId",
     *         in="path",
     *         description="Category ID",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="page",
     *         in="query",
     *         description="Page number for pagination",
     *         required=false,
     *         @OA\Schema(
     *             type="integer",
     *             default=1
     *         )
     *     ),
     *      @OA\Parameter(
     *         name="filter",
     *         in="query",
     *         description="Page number for pagination",
     *         required=false,
     *         @OA\Schema(
     *             type="string",
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="limit",
     *         in="query",
     *         description="Number of items per page",
     *         required=false,
     *         @OA\Schema(
     *             type="integer",
     *             default=10
     *         )
     *     ),
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
    public function getProductsByCategory(Request $request, $categoryId)
    {
        try {
            $result = $this->productService->getProductsByCategory($request, $categoryId);
            return response()->json($result, isset($result['message']) ? 404 : 200);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    /**
     * @OA\Get(
     *     path="/api/v1/subcategories/{subcatId}/products",
     *     tags={"Products"},
     *     summary="Get products by subcategory ID",
     *     description="Returns a list of products for a specific subcategory.",
     *     @OA\Parameter(
     *         name="subcatId",
     *         in="path",
     *         description="Subcategory ID",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="page",
     *         in="query",
     *         description="Page number for pagination",
     *         required=false,
     *         @OA\Schema(
     *             type="integer",
     *             default=1
     *         )
     *     ),
     *    @OA\Parameter(
     *         name="filter",
     *         in="query",
     *         description="Page number for pagination",
     *         required=false,
     *         @OA\Schema(
     *             type="string",
     *         )
     *     ),
     *     @OA\Parameter(
     *         name="limit",
     *         in="query",
     *         description="Number of items per page",
     *         required=false,
     *         @OA\Schema(
     *             type="integer",
     *             default=10
     *         )
     *     ),
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
    public function getProductsBySubcategory(Request $request, $subcatId)
    {
        try {
            $result = $this->productService->getProductsBySubcategory($request, $subcatId);
            return response()->json($result, isset($result['message']) ? 404 : 200);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
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
    public function store(ProductRequest $request)
    {
        try {
            $data = $request->validated();
            $product = $this->productService->createProduct($data, $request);
            return response()->json(['message' => 'Product created successfully', 'data' => $product], 201);
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
    public function getById($id)
    {
        try {
            $product = $this->productService->getProductById($id);
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
     *             mediaType="multipart/form-data",
     *             @OA\Schema(
     *                 required={"product_name","initial_price","description","is_active","category_id","subcat_id","sizes"},
     *                 @OA\Property(property="product_name", type="string", example="Example Product"),
     *                 @OA\Property(property="initial_price", type="number", format="float", example=10.5),
     *                 @OA\Property(property="discount", type="number", format="integer", example=20),
     *                 @OA\Property(property="description", type="string", example="Description of the product"),
     *                 @OA\Property(property="is_active", type="string", enum={"active", "inactive"}, example="active"),
     *                 @OA\Property(property="category_id", type="integer", example=1),
     *                 @OA\Property(property="subcat_id", type="integer", example=1),
     *                 @OA\Property(
     *                     property="images[]",
     *                     type="array",
     *                     @OA\Items(type="string", format="binary")
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
    public function update(ProductRequest $request, $id)
    {
        try {
            $data = $request->validated();
            $this->productService->updateProduct($data, $request, $id);
            return response()->json(['message' => 'Product updated successfully'], 200);
        } catch (\Throwable $e) {
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
    public function delete($id)
    {
        try {
            $this->productService->deleteProduct($id);
            return response()->json(['message' => 'Product deleted successfully'], 200);
        } catch (\Throwable $e) {
            return response()->json(['message' => 'Product not found'], 404);
        }
    }
}
