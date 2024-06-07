<?php 
namespace App\Services;

use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\Payment;
use Illuminate\Http\Request;

class OrderService {
    public function getAllOrders() {
        $orders = Order::with(['orderDetails', 'payment', 'user'])->get();
        return $orders;
    }

    public function getOrderById($id) {
        $order = Order::with(['orderDetails', 'payment', 'user'])
            ->findOrFail($id);
        return $order;
    }

    public function createOrder($request) {
        $order_details = $request->input('order_details');
        $amount = $request->input('total_amount') + $request->input('shipping_money');

        $order = Order::create([
            'user_id' => $request->input('user_id'),
            'order_date' => NOW(),
            'total_amount' => $request->input('total_amount'),
            'shipping_address' => $request->input('shipping_address'),
            'shipping_money' => $request->input('shipping_money'),
            'number_phone' => $request->input('number_phone'),
            'order_note' => $request->input('order_note') ?? null,
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

        return Order::with(['orderDetails', 'payment', 'user'])->findOrFail($order->id);
    }

    public function updateStatus($data, $id) {
        $order = Order::findOrFail($id);
        $order->update($data);
    }
}
?>