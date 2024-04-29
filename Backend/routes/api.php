<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Apis\CategoryController;
use App\Http\Controllers\Apis\ProductController;
use App\Http\Controllers\Apis\SubcategoryController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('v1')->group(function () {
    Route::get('/categories', [CategoryController::class, 'index']);
    Route::post('/categories', [CategoryController::class, 'store']);
    Route::get('/categories/{id}', [CategoryController::class, 'getById']) ;
    Route::put('/categories/{id}', [CategoryController::class, 'update']);
    Route::delete('/categories/{id}', [CategoryController::class, 'delete']);

    Route::get('/subcategories', [SubcategoryController::class, 'index']);
    Route::get('/categories/{categoryId}/subcategories', [SubcategoryController::class, 'getSubcategoriesByCategory']);
    Route::post('/subcategories', [SubcategoryController::class, 'store']);
    Route::put('/subcategories/{id}', [SubcategoryController::class, 'update']);
    Route::delete('/subcategories/{id}', [SubcategoryController::class, 'delete']);
    Route::get('/subcategories/{id}', [SubcategoryController::class, 'getById']);

    Route::get('/products', [ProductController::class, 'index']);
    Route::post('/products', [ProductController::class, 'store']);
    Route::get('/products/{id}', [ProductController::class, 'getById']);
    Route::get('/new-products', [ProductController::class, 'newProducts']);
    Route::get('/popular-products', [ProductController::class, 'popularProducts']);
    Route::get('/seller-products', [ProductController::class, 'sellerProducts']);
    Route::get('/categories/{categoryId}/products', [ProductController::class, 'getProductsByCategory']);
    Route::get('/subcategories/{subcatId}/products', [ProductController::class, 'getProductsBySubcategory']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});