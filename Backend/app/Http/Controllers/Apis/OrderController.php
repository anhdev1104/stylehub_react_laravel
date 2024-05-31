<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\Payment;

class OrderController extends Controller
{
    /**
     * @OA\Get(
     *     path="/api/v1/orders",
     *     tags={"Orders"},
     *     summary="Get a list of orders",
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
            $orders = Order::with(['orderDetails', 'payment', 'user'])->get();

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
            $order = Order::with(['orderDetails', 'payment', 'user'])
            ->findOrFail($id);

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
    public function store(Request $request) {
        try {
            $request->validate([
                'user_id' => 'required|integer',
                'total_amount' => 'required|numeric',
                'shipping_money' => 'required|numeric',
                'shipping_address' => 'required|string',
                'payment_method' => 'required|string',
                'payment_date' => 'required|date',
                'payment_status' => 'required|string',
                'order_details' => 'required|array',
                'order_details.*.product_id' => 'required|integer',
                'order_details.*.quantity' => 'required|integer|min:1',
                'order_details.*.price' => 'required|numeric|min:0',
            ]);
    
            $order_details = $request->input('order_details');
            $amount = $request->input('total_amount') + $request->input('shipping_money');
    
            $order = Order::create([
                'user_id' => $request->input('user_id'),
                'order_date' => NOW(),
                'total_amount' => $request->input('total_amount'),
                'shipping_address' => $request->input('shipping_address'),
                'shipping_money' => $request->input('shipping_money'),
            ]);
    
            foreach ($order_details as $item) {
                OrderDetail::create([
                    'order_id' => $order->id,
                    'product_id' => $item['product_id'],
                    'quantity' => $item['quantity'],
                    'price' => $item['price'],
                ]);
            }
    
            Payment::create([
                'order_id' => $order->id,
                'payment_method' => $request->input('payment_method'),
                'payment_date' => NOW(),
                'amount' => $amount,
                'status' => $request->input('payment_status'),
            ]);

            return response()->json(['message' => 'Order created successfully'], 200);
        }catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 422);
        }

    }

    /**
     * @OA\Put(
     *     path="/api/v1/orders/{id}/status",
     *     tags={"Orders"},
     *     summary="Update order status",
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
    
            $order = Order::findOrFail($id);
            $order->update($validated);
    
            return response()->json(['message' => 'Order status updated successfully'], 200);
        } catch (\Throwable $e) {
            return response()->json(['arror' => $e->getMessage()], 422);
        }
    }
}
