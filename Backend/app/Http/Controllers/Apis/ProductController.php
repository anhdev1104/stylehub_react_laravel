<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index() {
        $product = Product::join('categories as C','C.id','=','products.category_id')
                            ->join('sub_categories as S','S.id','=','products.subcat_id')
                            ->select(
                                'products.*', 
                                'S.id as subcat_id',
                                'S.subcat_name as subcat_name',
                                'C.id as category_id',
                                'C.category_name as category_name',
                            )
                            ->get();

        return response()->json([
            'data' => $product,
            'status' => 200
        ]);
    }

    public function newProducts() {
        $products = Product::with(['category', 'subcategory', 'evaluates', 'images', 'sizes'])
                ->orderBy('created_at', 'desc')
                ->limit(10)
                ->get();
        return response()->json([
            'data' => $products,
            'status' => 200
        ]);
    }
    public function popularProducts() {
        $products = Product::with(['category', 'subcategory', 'evaluates', 'images', 'sizes'])
                ->orderBy('created_at', 'asc')
                ->limit(10)
                ->get();
        return response()->json([
            'data' => $products,
            'status' => 200
        ]);
    }

    public function sellerProducts() {
        $products = Product::with(['category', 'subcategory', 'evaluates', 'images', 'sizes'])
                ->where('discount', '>', 0) 
                ->orderBy('discount', 'desc')
                ->limit(10)
                ->get();
        return response()->json([
            'data' => $products,
            'status' => 200
        ]);
    }

}
