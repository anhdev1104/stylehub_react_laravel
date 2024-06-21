<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use App\Http\Requests\ProfileRequest;
use App\Services\UserService;

class UserController extends Controller
{
    protected $userService;

    public function __construct(UserService $userService) {
        $this->userService = $userService;
    }
     /**
     * @OA\Get(
     *     path="/api/v1/users",
     *     tags={"Users"},
     *     summary="Get all users with their roles",
     *     description="Returns a list of all users along with their roles",
     *     @OA\Response(
     *         response=200,
     *         description="Successful response",
     *         @OA\JsonContent(
     *             type="array",
     *             @OA\Items(
     *                 @OA\Property(property="id", type="integer", example=1),
     *                 @OA\Property(property="name", type="string", example="John Doe"),
     *                 @OA\Property(property="email", type="string", example="john.doe@example.com"),
     *                 @OA\Property(property="created_at", type="string", format="date-time", example="2023-01-01T00:00:00.000000Z"),
     *                 @OA\Property(property="updated_at", type="string", format="date-time", example="2023-01-01T00:00:00.000000Z"),
     *                 @OA\Property(
     *                     property="role",
     *                     type="object",
     *                     @OA\Property(property="id", type="integer", example=1),
     *                     @OA\Property(property="name", type="string", example="Admin")
     *                 )
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal Server Error",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Internal Server Error")
     *         )
     *     )
     * )
    */
    public function index() {
        try {
            $user = $this->userService->getAllUsers();

            return response()->json(['data' => $user], 200);
        }catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 500);  
        }
    }

    /**
     * @OA\Put(
     *     path="/api/v1/profile/{id}",
     *     tags={"Authentication"},
     *     security={{"bearerAuth": {}}},
     *     summary="Update user profile",
     *     description="Update user profile data including avatar image.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         required=true,
     *         description="ID of the user whose profile is being updated",
     *         @OA\Schema(
     *             type="integer"
     *         )
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         description="Profile data including optional avatar image",
     *         @OA\JsonContent(
     *             required={"user_name", "email"}, 
     *             @OA\Property(
     *                 property="user_name",
     *                 type="string",
     *                 example="John Doe"
     *             ),
     *             @OA\Property(
     *                 property="email",
     *                 type="string",
     *                 example="john.doe@example.com"
     *             ),
     *             @OA\Property(
     *                 property="avatar",
     *                 description="Base64 encoded avatar image (optional)",
     *                 type="string",
     *             ),
     *             @OA\Property(
     *                 property="phone",
     *                 type="string",
     *             ),
     *             @OA\Property(
     *                 property="address",
     *                 type="string",
     *             ),
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Profile updated successfully",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Profile updated successfully.")
     *         )
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validation error or other server error",
     *         @OA\JsonContent(
     *             @OA\Property(property="message", type="string", example="Error message")
     *         )
     *     )
     * )
     */
    public function updateProfile(ProfileRequest $request, $id) {
        try {
            $userData = $request->validated();
    
            $user = $this->userService->updateUser($request, $userData);
    
            return response()->json(['message' => 'Profile updated successfully.', 'data' => $user], 200);
        } catch (\Throwable $e) {
            return response()->json(['message' => $e->getMessage()], 422);
        }
    }
}
