<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Size;

class SizeController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/v1/products/{productId}/sizes",
     *     tags={"Sizes"},
     *     summary="Get all sizes",
     *     description="Retrieve all sizes.",
     *     @OA\Parameter(
     *         name="productId",
     *         in="path",
     *         description="ID of the product",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="List of sizes retrieved successfully",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="product_id", type="integer", example=1),
     *                 @OA\Property(property="quantity", type="integer", example=10),
     *                 @OA\Property(property="label", type="string", example="L"),
     *             ),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal Server Error",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Internal Server Error"),
     *         ),
     *     ),
     *     security={}
     * )
     */
    public function index($productId) {
        try {
            $sizes = Size::where('product_id', $productId)->get();

            return response()->json(['data' => $sizes], 200);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 500);            
        }
    }

    /**
     * @OA\Post(
     *     path="/api/v1/sizes",
     *     tags={"Sizes"},
     *     summary="Create a size",
     *     description="Create a new size.",
     *     @OA\RequestBody(
     *         required=true,
     *         description="Size data",
     *         @OA\MediaType(
     *             mediaType="application/json",
     *             @OA\Schema(
     *                 type="object",
     *                 required={"label", "product_id"},
     *                 @OA\Property(
     *                     property="label",
     *                     description="Size label",
     *                     type="string"
     *                 ),
     *                 @OA\Property(
     *                     property="quantity",
     *                     description="Size quantity",
     *                     type="integer",
     *                     nullable=true
     *                 ),
     *                 @OA\Property(
     *                     property="product_id",
     *                     description="ID of the associated product",
     *                     type="integer"
     *                 ),
     *             ),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Size created successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Size created successfully"),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validation error or size creation failed",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Validation error or size creation failed"),
     *         ),
     *     ),
     *     security={}
     * )
     */
    public function store(Request $request) {
        try {
            $data = $request->validate([
                'label' => 'required',
                'quantity' => 'nullable|int',
                'product_id' => 'required|exists:products,id'
            ]);

            Size::create($data);

            return response()->json(['message' => 'Size created successfully'], 201);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }
}
