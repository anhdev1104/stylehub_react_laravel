<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Auth\EmailVerificationRequest;
use App\Models\User;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get('/email/verify/{token}', function ($token) {
    $user = User::where('token', $token)->first();
    
    if (!$user) {
        return response()->json(['message' => 'User not found'], 404);
    }

    $user->status = 'active';
    $user->token = null;
    $user->save();

    return redirect('https://anhdev.id.vn/login');
});