<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Size;
use App\Models\Product;

class SizesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = Product::all();

        foreach ($products as $product) {
            // Tạo dữ liệu cho size S
            $sizeS = [
                'label' => 'S',
                'quantity' => 50, 
                'product_id' => $product->id
            ];

            // Tạo dữ liệu cho size M
            $sizeM = [
                'label' => 'M',
                'quantity' => 50, 
                'product_id' => $product->id
            ];

            // Tạo dữ liệu cho size L
            $sizeL = [
                'label' => 'L',
                'quantity' => 50, 
                'product_id' => $product->id
            ];

            // Tạo các size trong cơ sở dữ liệu
            Size::create($sizeS);
            Size::create($sizeM);
            Size::create($sizeL);
        }
    }
}
