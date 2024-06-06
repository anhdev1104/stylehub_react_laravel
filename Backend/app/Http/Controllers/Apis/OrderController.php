<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\Payment;
use App\Http\Requests\OrderRequest;
use App\Services\OrderService;

class OrderController extends Controller
{
    protected $orderService;

    public function __construct(OrderService $orderService) {
        $this->orderService = $orderService;
    }
    /**
     * @OA\Get(
     *     path="/api/v1/orders",
     *     tags={"Orders"},
     *     summary="Get a list of orders",
     *     security={{"bearerAuth": {}}},
     *     description="Returns a list of orders with their details, payment information, and associated user.",
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             type="array",
     *              @OA\Items(
     *                  @OA\Property(property="id", type="integer", example=1),
     *                  @OA\Property(property="user_id", type="integer", example=1),
     *                  @OA\Property(property="order_date", type="string", format="date-time", example="2024-05-25T13:45:00Z"),
     *                  @OA\Property(property="total_amount", type="number", format="float", example=100.50),
     *                  @OA\Property(property="status", type="string", example="completed"),
     *                  @OA\Property(property="shipping_address", type="string", example="123 Main St, City, Country"),
     *                  @OA\Property(property="shipping_money", type="number", format="float", example=10.00),
     *                  @OA\Property(
     *                      property="order_details",
     *                      type="array",
     *                      @OA\Items(
     *                          @OA\Property(property="product_id", type="integer", example=1),
     *                          @OA\Property(property="quantity", type="integer", example=2),
     *                          @OA\Property(property="price", type="number", format="float", example=50.00),
     *                      )
     *                  ),
     *                  @OA\Property(
     *                      property="payment",
     *                      type="object",
     *                      @OA\Property(property="payment_method", type="string", example="credit_card"),
     *                      @OA\Property(property="payment_date", type="string", format="date-time", example="2024-05-26T14:30:00Z"),
     *                      @OA\Property(property="amount", type="number", format="float", example=100.50),
     *                      @OA\Property(property="status", type="string", example="paid"),
     *                  ),
     *                  @OA\Property(
     *                      property="user",
     *                      type="object",
     *                      @OA\Property(property="name", type="string", example="John Doe"),
     *                      @OA\Property(property="email", type="string", format="email", example="john@example.com"),
     *                  )
     *              )
     *         )
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Internal server error",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="error", type="string", example="Internal server error message")
     *         )
     *     )
     * )
     */
    public function index() {
        try {
            $orders = $this->orderService->getAllOrders();

            return response()->json(['data' => $orders], 200);
        }catch (\Throwable $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    /**
     * @OA\Get(
     *     path="/api/v1/orders/{id}",
     *     tags={"Orders"},
     *     summary="Get order by ID",
     *     security={{"bearerAuth": {}}},
     *     description="Returns the order details for a specific order ID.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="Order ID",
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
     *             @OA\Property(
     *                 property="data",
     *                 @OA\Property(property="id", type="integer", example=1),
     *                  @OA\Property(property="user_id", type="integer", example=1),
     *                  @OA\Property(property="order_date", type="string", format="date-time", example="2024-05-25T13:45:00Z"),
     *                  @OA\Property(property="total_amount", type="number", format="float", example=100.50),
     *                  @OA\Property(property="status", type="string", example="completed"),
     *                  @OA\Property(property="shipping_address", type="string", example="123 Main St, City, Country"),
     *                  @OA\Property(property="shipping_money", type="number", format="float", example=10.00),
     *                  @OA\Property(
     *                      property="order_details",
     *                      type="array",
     *                      @OA\Items(
     *                          @OA\Property(property="product_id", type="integer", example=1),
     *                          @OA\Property(property="quantity", type="integer", example=2),
     *                          @OA\Property(property="price", type="number", format="float", example=50.00),
     *                      )
     *                  ),
     *                  @OA\Property(
     *                      property="payment",
     *                      type="object",
     *                      @OA\Property(property="payment_method", type="string", example="credit_card"),
     *                      @OA\Property(property="payment_date", type="string", format="date-time", example="2024-05-26T14:30:00Z"),
     *                      @OA\Property(property="amount", type="number", format="float", example=100.50),
     *                      @OA\Property(property="status", type="string", example="paid"),
     *                  ),
     *                  @OA\Property(
     *                      property="user",
     *                      type="object",
     *                      @OA\Property(property="name", type="string", example="John Doe"),
     *                      @OA\Property(property="email", type="string", format="email", example="john@example.com"),
     *                  )
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Order not found",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="message", type="string", example="Order not found")
     *         )
     *     )
     * )
     */
    public function orderById($id) {
        try {
            $order = $this->orderService->getOrderById($id);

            return response()->json(['data' => $order], 200);
        }catch (\Throwable $e) {
            return response()->json(['message' => 'Order not found'], 404);
        }
    }
    /**
     * @OA\Post(
     *     path="/api/v1/orders",
     *     summary="Checkout an order",
     *     description="Create a new order along with its details and payment information.",
     *     tags={"Orders"},
     *     security={{"bearerAuth": {}}},
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="user_id", type="integer", example=1, description="ID of the user placing the order"),
     *             @OA\Property(property="total_amount", type="number", format="float", example=100.50, description="Total amount of the order"),
     *             @OA\Property(property="shipping_money", type="number", format="float", example=10.00, description="Shipping cost"),
     *             @OA\Property(property="shipping_address", type="string", example="123 Main St, Springfield, IL", description="Shipping address"),
     *             @OA\Property(property="payment_method", type="string", example="credit_card", description="Method of payment"),
     *             @OA\Property(property="payment_date", type="string", format="date-time", example="2024-05-28T14:00:00Z", description="Date and time of payment"),
     *             @OA\Property(property="payment_status", type="string", example="completed", description="Status of the payment"),
     *             @OA\Property(property="order_note", type="string", example="Order note", description="Order note"),
     *             @OA\Property(property="number_phone", type="string", example="0123456789", description="Number phone"),
     *             @OA\Property(
     *                 property="order_details",
     *                 type="array",
     *                 description="Array of order details",
     *                 @OA\Items(
     *                     type="object",
     *                     @OA\Property(property="product_id", type="integer", example=1, description="ID of the product"),
     *                     @OA\Property(property="quantity", type="integer", example=2, description="Quantity of the product"),
     *                     @OA\Property(property="price", type="number", format="float", example=50.00, description="Price of the product")
     *                 )
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Order created successfully",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="message", type="string", example="Order created successfully")
     *         )
     *     ),
     *     @OA\Response(
     *         response=422,
     *         description="Validation error",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="error", type="string", example="The given data was invalid.")
     *         )
     *     )
     * )
     */
    public function store(OrderRequest $request) {
        try {
            $request->validated();
            $order = $this->orderService->createOrder($request);

            return response()->json(['message' => 'Order created successfully', 'data' => $order], 200);
        }catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 422);
        }

    }

    /**
     * @OA\Put(
     *     path="/api/v1/orders/{id}/status",
     *     tags={"Orders"},
     *     summary="Update order status",
     *     security={{"bearerAuth": {}}},
     *     description="Updates the status of a specific order by its ID. The status can be one of the following: pending, processing, shipped, cancelled, delivered.",
     *     @OA\Parameter(
     *         name="id",
     *         in="path",
     *         description="Order ID",
     *         required=true,
     *         @OA\Schema(
     *             type="integer",
     *             format="int64"
     *         )
     *     ),
     *     @OA\RequestBody(
     *         required=true,
     *         @OA\JsonContent(
     *             @OA\Property(
     *                 property="status",
     *                 type="string",
     *                 enum={"pending", "processing", "shipped", "cancelled", "delivered"},
     *                 example="processing"
     *             )
     *         )
     *     ),
     *     @OA\Response(
     *         response=200,
     *         description="Order status updated successfully",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="message", type="string", example="Order status updated successfully")
     *         )
     *     ),
     *     @OA\Response(
     *         response=404,
     *         description="Order not found",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="message", type="string", example="Order not found")
     *         )
     *     ),
     *     @OA\Response(
     *         response=500,
     *         description="Failed to update order status",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(property="message", type="string", example="Failed to update order status")
     *         )
     *     )
     * )
     */
    public function updateStatus(Request $request, $id) {
        try {
            $validated = $request->validate([
                'status' => 'required|string|in:pending,processing,shipped,cancelled,delivered'
            ]);
    
            $this->orderService->updateStatus($validated, $id);
    
            return response()->json(['message' => 'Order status updated successfully'], 200);
        } catch (\Throwable $e) {
            return response()->json(['arror' => $e->getMessage()], 422);
        }
    }
}
