<?php 
namespace App\Services;

use App\Models\SubCategory;
use Illuminate\Http\Request;

class SubcategoryService {
    public function getAllSubcategories() {
        $subcategories = Subcategory::with('categories')
        ->get();
        return ['data' => $subcategories];
    }

    public function getSubcategoriesByCategory($categoryId) {
        $subcategories = Subcategory::with('categories')
                        ->where('category_id', $categoryId)
                        ->get();
        if ($subcategories->isEmpty()) {
            return ['message' => 'No subcategoris found for this category.'];
        }

        return ['data' => $subcategories];
    }

    public function getSubcategoryId($id) {
        return SubCategory::findOrFail($id);
    }

    public function createSubcategory($data) {
        return SubCategory::create($data);
    }

    public function updateSubcategory($data, $id) {
        $subcategory = SubCategory::findOrFail($id);
        $subcategory->update($data);
    }

    public function deleteSubcategory($id) {
        $subcategory = SubCategory::findOrFail($id);

        $subcategory->delete();
    }
}

?>