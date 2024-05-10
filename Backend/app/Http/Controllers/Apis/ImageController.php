<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Image;

class ImageController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/v1/images",
     *     tags={"Images"},
     *     summary="Get all images",
     *     description="Returns a list of all images.",
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="product_id", type="integer", example=1),
     *                 @OA\Property(property="image", type="string", example="https://image.png"),
     *             ),
     *         ),
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
            $images = Image::all();

            return response()->json(['data' => $images], 200);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 500);            
        }
    }

    /**
     * @OA\Get(
     *     path="/api/v1/products/{productId}/images",
     *     tags={"Images"},
     *     summary="Get images by product ID",
     *     description="Returns a list of images for a specific product ID.",
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
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="product_id", type="integer", example=1),
     *                 @OA\Property(property="image", type="string", example="https://image.png"),
     *             ),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=204,
     *         description="No images found for this product",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="message", type="string", example="Image is empty"),
     *         ),
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
    public function getByProductId($productId) {
        try {
            $images = Image::where('product_id', $productId)->get();
    
            if ($images->isEmpty()) {
                return response()->json(['message' => 'Image is empty'], 204);
            }
    
            return response()->json(['data' => $images], 200);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }

    /**
     * @OA\Post(
     *     path="/api/v1/images",
     *     tags={"Images"},
     *     summary="Upload an image",
     *     description="Uploads an image to AWS S3 and saves its URL in the database.",
     *     @OA\RequestBody(
     *         required=true,
     *         description="Image data",
     *         @OA\MediaType(
     *             mediaType="multipart/form-data",
     *             @OA\Schema(
     *                 type="object",
     *                 required={"image", "product_id"},
     *                 @OA\Property(
     *                     property="image",
     *                     description="Image file",
     *                     type="string",
     *                     format="binary"
     *                 ),
     *                 @OA\Property(
     *                     property="product_id",
     *                     description="ID of the product associated with the image",
     *                     type="integer",
     *                     example=1
     *                 ),
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=201,
     *         description="Image uploaded successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Image created successfully")
     *         )
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validation error or upload failed",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Validation error or upload failed")
     *         )
     *     ),
     *     security={}
     * )
     */
    public function store(Request $request) {
        try {
            $data = $request->validate([
                'image' => 'required|image',
                'product_id' => 'required|exists:products,id'
            ]);

            $path = $data['image']->storePublicly('public/images');
            $baseUrl = env('AWS_S3_BASE_URL');
            $fullPath = $baseUrl . $path;
        
            Image::create([
                'image' => $fullPath,
                'product_id' => $data['product_id']
            ]);

            return response()->json(['message' => 'Image created successfully'], 201);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }
        
    }

    /**
     * @OA\Get(
     *     path="/api/v1/images/{id}",
     *     tags={"Images"},
     *     summary="Get image by ID",
     *     description="Retrieve information about a specific image by its ID.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="ID of the image",
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
     *             type="object",
     *             @OA\Property(property="id", type="integer", example=1),
     *             @OA\Property(property="product_id", type="integer", example=1),
     *             @OA\Property(property="image", type="string", example="https://image.png"),
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Image not found",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(
     *                 property="message",
     *                 type="string",
     *                 example="Image not found"
     *             )
     *         )
     *     )
     * )
     */
    public function getById($id) {
        try {
            $image = Image::findOrFail($id);

            return response()->json(['data' => $image], 200);
        }catch (\Throwable $e) {
            return response()->json(['message' => 'Image not found'], 404);
        }
    }
    
    /**
     * @OA\Put(
     *     path="/api/v1/images/{id}",
     *     tags={"Images"},
     *     summary="Update an image",
     *     description="Update an existing image with the provided ID. If a new image file is provided, it will be uploaded to AWS S3 and the image URL will be updated in the database.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="The ID of the image to update",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *         )
     *     ),
     *     @OA\RequestBody(
     *         description="Image data",
     *         @OA\MediaType(
     *             mediaType="multipart/form-data",
     *             @OA\Schema(
     *                 type="object",
     *                 @OA\Property(
     *                     property="image",
     *                     description="Image file",
     *                     type="string",
     *                     format="binary",
     *                 ),
     *             ),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Image updated successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Image updated successfully"),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=400,
     *         description="Error updating image",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Error updating image"),
     *         ),
     *     ),
     * )
     */
    public function update(Request $request, $id) {
        try {
            $data = $request->validate([
                'image' => 'image',
            ]);

            $image = Image::findOrFail($id);
            if ($request->hasFile('image')) {
                $path = $request->file('image')->storePublicly('public/images');
                $baseUrl = env('AWS_S3_BASE_URL');
                $fullPath = $baseUrl . $path;
    
                $image->update([
                    'image' => $fullPath,
                ]);
                return response()->json(['message' => $data], 200);
            }
            
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 400);
        }
    }

    /**
     * @OA\Delete(
     *     path="/api/v1/images/{id}",
     *     tags={"Images"},
     *     summary="Delete an image",
     *     description="Delete an existing image with the provided ID.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="The ID of the image to delete",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Image deleted successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Image deleted successfully"),
     *         ),
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Image not found",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Image not found"),
     *         ),
     *     ),
     *     security={}
     * )
     */
    public function delete($id) {
        try {
            $image = Image::findOrFail($id);

            $image->delete();
            return response()->json(['message' => 'Image deleted successfully'], 200);
        } catch (\Throwable $e) {
            return response()->json(['message' => 'Image mot found'], 404);
        }
    }
}
