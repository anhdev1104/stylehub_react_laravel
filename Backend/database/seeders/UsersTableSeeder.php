<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'user_name' => 'Admin',
            'email' => 'admin@gmail.com',
            'password' => bcrypt('admin12345'),
            'user_image' => 'https://i.pinimg.com/564x/57/48/3b/57483bac98fbd781662ad6515b35b2ea.jpg', 
            'role_id' => 1
        ]);
        
        User::create([
            'user_name' => 'Regular User',
            'email' => 'customer@gmail.com',
            'password' => bcrypt('customer12345'),
            'user_image' => 'https://i.pinimg.com/736x/44/cb/73/44cb739d6793292618753840307d96e7.jpg', 
            'role_id' => 2
        ]);
    }
}
