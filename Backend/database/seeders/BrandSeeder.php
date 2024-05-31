<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Brand;

class BrandSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Brand::create([
            'brand_name' => 'Prada Brand',
            'brand_image' => 'https://duong04.s3.ap-southeast-2.amazonaws.com/public/images/brand/brand1.png'
        ]);
        Brand::create([
            'brand_name' => 'Tommy Brand',
            'brand_image' => 'https://duong04.s3.ap-southeast-2.amazonaws.com/public/images/brand/brand2.png'
        ]);
        Brand::create([
            'brand_name' => 'Nike Brand',
            'brand_image' => 'https://duong04.s3.ap-southeast-2.amazonaws.com/public/images/brand/brand3.png'
        ]);
        Brand::create([
            'brand_name' => 'Louis Vuitton',
            'brand_image' => 'https://duong04.s3.ap-southeast-2.amazonaws.com/public/images/brand/brand4.png'
        ]);
        Brand::create([
            'brand_name' => 'Dior',
            'brand_image' => 'https://duong04.s3.ap-southeast-2.amazonaws.com/public/images/brand/brand-5.webp'
        ]);
        Brand::create([
            'brand_name' => 'Under Armour',
            'brand_image' => 'https://duong04.s3.ap-southeast-2.amazonaws.com/public/images/brand/brand-7.png'
        ]);
        Brand::create([
            'brand_name' => 'Adidas',
            'brand_image' => 'https://duong04.s3.ap-southeast-2.amazonaws.com/public/images/brand/brand-6.svg'
        ]);
        Brand::create([
            'brand_name' => 'Reebok',
            'brand_image' => 'https://duong04.s3.ap-southeast-2.amazonaws.com/public/images/brand/brand-8.png'
        ]);
    }
}
