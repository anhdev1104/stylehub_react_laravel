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
            'data' => $product,
            'status' => 200
        ]);
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
            'data' => $products,
            'status' => 200
        ]);
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
            'data' => $products,
            'status' => 200
        ]);
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
            'data' => $products,
            'status' => 200
        ]);
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
                'message' => 'No products found for this category.',
                'status' => 404
            ], 404);
        }
    
        return response()->json([
            'products' => $products,
            'status' => 200
        ]);
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
                'message' => 'No products found for this subcategory.',
                'status' => 404
            ], 404);
        }
    
        return response()->json([
            'products' => $products,
            'status' => 200
        ]);
    }

}
