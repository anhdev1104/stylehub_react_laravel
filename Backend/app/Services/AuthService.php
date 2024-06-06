<?php

namespace App\Services;

use App\Models\User;
use Illuminate\Auth\Events\PasswordReset;
use Illuminate\Support\Facades\Hash;
use App\Mail\EmailVerification;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Mail;

class AuthService {
    public function respondWithToken($token)
    {
        $data = [
            'access_token' => $token,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ];

        return ['data' => $data];
    }

    public function registerUser($data)
    {
        $user = User::create([
            'user_name' => $data['user_name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password']),
            'status' => 'inactive',
            'role_id' => 2,
            'avatar' => 'https://duong04.s3.ap-southeast-2.amazonaws.com/public/images/avatar/default-image.png',
            'token' => Str::random(40),
        ]);

        Mail::to($user->email)->send(new EmailVerification($user->token));

        return ['message' => 'User registered successfully.'];
    }

    public function loginUser($credentials)
    {
        if (!$token = auth()->attempt($credentials)) {
            return ['error' => 'Unauthorized', 'status' => 401];
        }

        $user = auth()->user();
        if ($user->status == 'inactive' || $user->status == 'disabled') {
            return ['error' => 'Your account is ' . $user->status, 'status' => 403];
        }

        return $this->respondWithToken($token);
    }

    public function getProfile()
    {
        return auth()->user()->load('role');
    }

    public function logoutUser()
    {
        auth()->logout();
        return ['message' => 'Successfully logged out'];
    }

    public function sendResetLink($email)
    {
        $status = Password::sendResetLink(['email' => $email]);

        return $status === Password::RESET_LINK_SENT
            ? ['message' => __($status)]
            : ['message' => __($status)];
    }

    public function resetPassword($data)
    {
        $status = Password::reset(
            $data,
            function (User $user, string $password) {
                $user->forceFill([
                    'password' => Hash::make($password)
                ])->setRememberToken(Str::random(60));

                $user->save();

                event(new PasswordReset($user));
            }
        );

        return $status === Password::PASSWORD_RESET
            ? ['message' => __($status)]
            : ['message' => __($status)];
    }
}