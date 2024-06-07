<?php 
namespace App\Services;

use App\Models\Brand;

class BrandService {
    public function getAllBrands() {
        return Brand::all();
    }
}
?>