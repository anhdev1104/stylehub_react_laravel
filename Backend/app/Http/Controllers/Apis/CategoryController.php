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
            'status' => 200
        ]);
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

    
}
