<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evaluate extends Model
{
    use HasFactory;
    protected $table = 'evaluates';
    protected $fillable = [
        'id',
        'rating',
        'user_id',
        'product_id',
    ];
}
