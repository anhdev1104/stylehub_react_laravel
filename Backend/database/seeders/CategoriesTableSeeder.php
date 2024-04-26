<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Category::create([
            'category_name' => 'Men Fashion',
            'position' => 1
        ]);
        Category::create([
            'category_name' => 'Women Fashion',
            'position' => 2
        ]);
        Category::create([
            'category_name' => 'Kids Fashion',
            'position' => 3
        ]);
        Category::create([
            'category_name' => 'Baby Fashion',
            'position' => 4
        ]);
    }
}
