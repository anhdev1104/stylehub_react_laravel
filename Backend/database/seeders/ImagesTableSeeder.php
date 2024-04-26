<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Image;

class ImagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $products = Product::all();

        // Mảng các URL hình ảnh cố định cho mỗi sản phẩm
        $productImageUrls = [
            'https://i.pinimg.com/564x/30/fc/89/30fc8958d62a9e224f6e5c99e84584d0.jpg',
            'https://i.pinimg.com/564x/e6/36/63/e63663b37fce801c3887cbc356013de7.jpg',
            'https://i.pinimg.com/564x/72/8d/e4/728de47c48bea14f876c38889633dd45.jpg',
            'https://i.pinimg.com/736x/ec/2d/21/ec2d21ad8ffb7b76fa4711909cd1fe8d.jpg',
            'https://i.pinimg.com/564x/c1/ef/96/c1ef96375e6739ef5d19e1e053d47232.jpg',
        ];

        foreach ($products as $product) {
            // Duyệt qua mỗi URL hình ảnh trong mảng cố định
            foreach ($productImageUrls as $imageUrl) {
                // Tạo dữ liệu cho một ảnh
                $imageData = [
                    'product_id' => $product->id,
                    'image' => $imageUrl
                ];

                // Tạo ảnh trong cơ sở dữ liệu
                Image::create($imageData);
            }
        }
    }
}
