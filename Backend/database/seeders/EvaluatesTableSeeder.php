<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Evaluate;
use App\Models\User;
use App\Models\Product;

class EvaluatesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $users = User::all();

        foreach ($users as $user) {
            $products = Product::all();

            foreach ($products as $product) {
                $rating = rand(1, 5);

                Evaluate::create([
                    'rating' => $rating,
                    'user_id' => $user->id,
                    'product_id' => $product->id,
                ]);
            }
        }
    }
}
