<?php 
namespace App\Services;

use App\Models\OrderDetail;
use Illuminate\Http\Request;

class OrderDetailService {
    public function getAllOrderDetails() {
        return OrderDetail::with('product')->get();
    }

    public function getOrderDetailsByOrderId($orderId) {
        $orderDetails = OrderDetail::with('product')->where('order_id', $orderId)->get();
        if ($orderDetails->isEmpty()) {
            return ['message' => 'Order detail not found'];
        }

        return ['data' => $orderDetails];
    }
}
?>