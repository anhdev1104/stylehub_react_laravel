<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Product;
use App\Models\Category;
use App\Models\SubCategory;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $subcategories = SubCategory::all();

        foreach ($subcategories as $subcategory) {
            for ($i = 1; $i <= 8; $i++) {
                $productName = $subcategory->subcat_name . ' Product ' . $i;

                $initialPrice = mt_rand(100, 200); 
                $discount = mt_rand(0, 50); 
                $price = $initialPrice - ($initialPrice * $discount / 100); 

                $productData = [
                    'product_name' => $productName,
                    'product_image' => 'https://i.pinimg.com/564x/da/ba/46/daba46d032fc17ecd3e3a32e74676242.jpg',
                    'discount' => $discount,
                    'price' => $price, 
                    'initial_price' => $initialPrice,
                    'description' => 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse quasi magnam, enim similique accusantium itaque dolore nisi maxime nihil perspiciatis odio magni repellat officiis reprehenderit harum necessitatibus veniam animi corporis?', 
                    'is_active' => 'active', 
                    'category_id' => $subcategory->category_id, 
                    'subcat_id' => $subcategory->id 
                ];

                Product::create($productData);
            }
        }

    }
}
