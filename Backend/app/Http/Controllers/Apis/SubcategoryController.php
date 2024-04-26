<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SubCategory;

class SubcategoryController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/v1/subcategories",
     *     tags={"Subcategories"},
     *     summary="Get all subcategories",
     *     @OA\Response(
     *         response=200,
     *         description="List of subcategories",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="position", type="integer", example=1),
     *                 @OA\Property(property="subcat_name", type="string", example="Subcat name"),
     *                 @OA\Property(property="category_id", type="integer", example=1),
     *                 @OA\Property(property="categories", type="object",
     *                      @OA\Property(property="id", type="integer", example=1),
     *                      @OA\Property(property="position", type="integer", example=1),
     *                      @OA\Property(property="category_name", type="string", example="Category name"),
     *                  ),
     *             ),
     * 
     *         )
     *     ),
     * )
     */
    public function index() {
        $subcategories = Subcategory::with('categories')
                        ->get();
        return response()->json([
            'data' => $subcategories,
            'status' => 200
        ]);
    }
    /**
     * @OA\Get(
     *     path="/api/v1/categories/{categoryId}/subcategories",
     *     tags={"Subcategories"},
     *     summary="Get all subcategories by category",
     *     description="Returns a list of subcategories for a specific category",
     *     @OA\Parameter(
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
     *         response=200,
     *         description="List of subcategories",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="position", type="integer", example=1),
     *                 @OA\Property(property="subcat_name", type="string", example="Subcat name"),
     *                 @OA\Property(property="category_id", type="integer", example=1),
     *                 @OA\Property(property="categories", type="object",
     *                      @OA\Property(property="id", type="integer", example=1),
     *                      @OA\Property(property="position", type="integer", example=1),
     *                      @OA\Property(property="category_name", type="string", example="Category name"),
     *                  ),
     *             ),
     * 
     *         )
     *     ),
     * )
     */
    public function getSubcategoriesByCategory($categoryId) {
        $subcategories = Subcategory::with('categories')
                        ->where('category_id', $categoryId)
                        ->get();
        if ($subcategories->isEmpty()) {
            return response()->json([
                'message' => 'No subcategoris found for this category.',
                'status' => 404
            ], 404);
        }

        return response()->json([
            'data' => $subcategories,
            'status' => 200
        ]);
    }
}
