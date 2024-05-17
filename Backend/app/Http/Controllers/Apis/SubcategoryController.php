<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use App\Models\SubCategory;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Http\Requests\SubcategoryRequest;

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
            $subcategories = Subcategory::with('categories')
                        ->get();
            return response()->json([
                'data' => $subcategories
            ], 200);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 500);            
        }
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

    /**
     * @OA\Get(
     *     path="/api/v1/subcategories/{id}",
     *     summary="Get a subcategory by ID",
     *     tags={"Subcategories"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the subcategory to retrieve",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             @OA\Property(property="id", type="integer", example=1),
     *             @OA\Property(property="position", type="integer", example=1),
     *             @OA\Property(property="subcat_name", type="string", example="Subcat name"),
     *             @OA\Property(property="category_id", type="integer", example=1),
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Subcategory not found",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Subcategory not found")
     *         )
     *     )
     * )
     */
    public function getById($id) {
        try {
            $category = SubCategory::findOrFail($id);

            return response()->json(['data' => $category], 200);
        }catch (\Throwable $e) {
            return response()->json(['message' => 'Subcategory not found'], 404);
        }
    }

    /**
     * @OA\Post(
     *     path="/api/v1/subcategories",
     *     summary="Create a new subcategory",
     *     tags={"Subcategories"},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"subcat_name", "position", "category_id"},
     *             @OA\Property(property="subcat_name", type="string", example="New Subcategory"),
     *             @OA\Property(property="position", type="integer", example=1),
     *             @OA\Property(property="category_id", type="integer", example=1)
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Subcategory created successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Subcategory created successfully")
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
    public function store(SubcategoryRequest $request) {
        try {
            $data = $request->validated();

            $response = SubCategory::create($data);

            return response()->json(['message' => 'Subcategory created successfully', 'data' => $response], 201);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }

    /**
     * @OA\Put(
     *     path="/api/v1/subcategories/{id}",
     *     summary="Update a subcategory",
     *     tags={"Subcategories"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the subcategory to update",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             required={"subcat_name", "position", "category_id"},
     *             @OA\Property(property="subcat_name", type="string", example="Updated Subcategory"),
     *             @OA\Property(property="position", type="integer", example=1),
     *             @OA\Property(property="category_id", type="integer", example=1)
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Subcategory updated successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Subcategory updated successfully")
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
    public function update(SubcategoryRequest $request, $id) {
        try {
            $data = $request->validated();

            $subcategory = SubCategory::findOrFail($id);

            $subcategory->update($data);

            return response()->json(['message' => 'Subcategory updated successfully'], 200);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }

    /**
     * @OA\Delete(
     *     path="/api/v1/subcategories/{id}",
     *     summary="Delete a subcategory",
     *     tags={"Subcategories"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the subcategory to delete",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Subcategory deleted successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Subcategory deleted successfully")
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Subcategory not found",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Subcategory not found")
     *         )
     *     )
     * )
     */
    public function delete($id) {
        try {
            $subcategory = SubCategory::findOrFail($id);

            $subcategory->delete();

            return response()->json(['message' => 'Subcategory deleted successfully'], 200);
        } catch (\Throwable $e) {
            return response()->json(['message' => 'Subcategory not found'], 404);
        }
    }
}
