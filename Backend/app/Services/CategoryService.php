<?php 
namespace App\Services;

use App\Models\Category;
use Illuminate\Http\Request;

class CategoryService {
    public function getAllCategories() {
        $categories = Category::all();

        return ['data' => $categories];
    }

    public function createCategory($data) {
        return Category::create($data);
    }

    public function getCategoryById($id) {
        return Category::findOrFail($id);
    }

    public function updateCategory($data, $id) {
        $category = Category::findOrFail($id);
        $category->update($data);
    }

    public function deleteCategory($id) {
        $category = Category::findOrFail($id);
        $category->delete();
    }
}
?>