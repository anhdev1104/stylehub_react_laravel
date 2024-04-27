<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;

class CategoryController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/v1/categories",
     *     tags={"Categories"},
     *     summary="Get all categories",
     *     @OA\Response(
     *         response=200,
     *         description="List of categories",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="position", type="integer", example=1),
     *                 @OA\Property(property="category_name", type="string", example="Category name"),
     *             ),
     * 
     *         )
     *     ),
     * )
     */
    public function index() {
        $category = Category::all();

        return response()->json([
            'data' => $category,
        ], 200);
    }

    /**
     * @OA\Post(
     *     path="/api/v1/categories",
     *     tags={"Categories"},
     *     summary="Create a new category",
     *     @OA\RequestBody(
     *         required=true,
     *         description="Category data",
     *         @OA\JsonContent(
     *             required={"category_name", "position"},
     *             @OA\Property(property="category_name", type="string", example="New Category"),
     *             @OA\Property(property="position", type="integer", example=1),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Category created successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Category created successfully"),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Unprocessable Entity",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Validation error message"),
     *         ),
     *     ),
     * )
     */
    public function store(Request $request) {
        try {
            $data = $request->validate([
                'category_name' => 'required|string|unique:categories,category_name',
                'position' => 'required|integer|unique:categories,position',
            ]);

            $response = Category::create($data);
    
            return response()->json(['message' => 'Category created successfully'], 201);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }

    /**
     * @OA\Get(
     *     path="/api/v1/categories/{id}",
     *     tags={"Categories"},
     *     summary="Get category by ID",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the category",
     *         required=true,
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Category found",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="id", type="integer", example=1),
     *             @OA\Property(property="position", type="integer", example=1),
     *             @OA\Property(property="category_name", type="string", example="Category name"),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Category not found",
     *     ),
     * )
     */
    public function getById($id) {
        try {
            $response = Category::findOrFail($id);

            return response()->json(['data' => $response], 200);
        }catch (\Throwable $e) {
            return response()->json(['data' => 'Category not found'], 404);
        }
    }

    /**
     * @OA\Put(
     *     path="/api/v1/categories/{id}",
     *     summary="Update a category",
     *     tags={"Categories"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the category to update",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(property="category_name", type="string", example="New Category Name"),
     *             @OA\Property(property="position", type="integer", example=1)
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Category updated successfully")
     *         )
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Invalid data provided",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Error message describing the issue")
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Category not found",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Category not found")
     *         )
     *     )
     * )
     */
    public function update(Request $request, $id ) {
        try {
            $data = $request->validate([
                'category_name' => 'required|string|unique:categories,category_name,'.$id,
                'position' => 'required|integer|unique:categories,position,'.$id,
            ]);

            $category = Category::findOrFail($id);
            $category->update($data);

            return response()->json(['message' => 'Category updated successfully'], 200);
        }catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }

    /**
     * @OA\Delete(
     *     path="/api/v1/categories/{id}",
     *     summary="Delete a category",
     *     tags={"Categories"},
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the category to delete",
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
     *             @OA\Property(property="message", type="string", example="Category deleted successfully")
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Category not found",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Category not found")
     *         )
     *     )
     * )
     */
    public function delete($id) {
        try {
            $category = Category::findOrFail($id);
            $category->delete();

            return response()->json(['Message' => 'Category deleted successfully'], 200);
        }catch (\Throwable $e) {
            return response()->json(['message' => 'Category not found'], 404);
        }
    }
     
}
