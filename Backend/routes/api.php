<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Apis\CategoryController;
use App\Http\Controllers\Apis\ProductController;
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


Route::get('/v1/categories', [CategoryController::class, 'index']);
Route::get('/v1/products', [ProductController::class, 'index']);
Route::get('/v1/new-products', [ProductController::class, 'newProducts']);
Route::get('/v1/popular-products', [ProductController::class, 'popularProducts']);
Route::get('/v1/seller-products', [ProductController::class, 'sellerProducts']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});