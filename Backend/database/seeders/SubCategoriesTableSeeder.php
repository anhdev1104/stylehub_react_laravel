<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Category;
use App\Models\SubCategory;


class SubCategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $parentCategories = Category::all();

        foreach ($parentCategories as $parentCategory) {
            $subCategories = [
                $parentCategory->category_name . '-Cloths',
                $parentCategory->category_name . '-Shoes',
                $parentCategory->category_name . '-Accessories',
                $parentCategory->category_name . '-Bags',
                $parentCategory->category_name . '-Hats',
            ];

            foreach ($subCategories as $index => $subCategoryName) {
                $subCategoryData = [
                    'subcat_name' => $subCategoryName,
                    'position' => $index + 1,
                    'category_id' => $parentCategory->id
                ];

                Subcategory::create($subCategoryData);
            }
        }
    }
}
