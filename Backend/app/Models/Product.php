<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Category;
use App\Models\SubCategory;
use App\Models\Evaluate;
use App\Models\Image;
use App\Models\Size;

class Product extends Model
{
    use HasFactory;
    protected $table = 'products';
    protected $fillable = [
        'id',
        'product_name',
        'product_image',
        'discount',
        'price',
        'initial_price',
        'description',
        'is_active',
        'category_id',
        'subcat_id'
    ];

    public function category()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }

    public function subcategory()
    {
        return $this->belongsTo(SubCategory::class, 'subcat_id');
    }

    public function evaluates()
    {
        return $this->hasMany(Evaluate::class, 'product_id');
    }

    public function images()
    {
        return $this->hasMany(Image::class, 'product_id');
    }

    public function sizes()
    {
        return $this->hasMany(Size::class, 'product_id');
    }
}
