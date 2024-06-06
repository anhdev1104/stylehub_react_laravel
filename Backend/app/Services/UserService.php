<?php 
namespace App\Services;

use App\Models\User;
use Illuminate\Support\Facades\Storage;

class UserService {
    public function getAllUsers() {
        return User::with('role')->get();
    }

    public function updateUser($request, $data) {
        $user = auth()->user();
    
        // Xử lý tải tệp tin nếu có
        if ($request->hasFile('avatar')) {
            $file = $request->file('avatar');
            $path = $file->store('public/images/avatar');
            
            Storage::disk('s3')->setVisibility($path, 'public');

            $baseUrl = env('AWS_S3_BASE_URL');
            $fullPath = $baseUrl . $path;

            $data['avatar'] = $fullPath;
        }

        // Cập nhật hồ sơ của người dùng
        $user->update($data);

        return $user;
    }
}
?>