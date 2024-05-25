<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        $id = $this->route('id');

        $rules = [
            'email' => 'required|unique:users,email,'.$id,
            'user_name' => 'required|max:255',
            'avatar' => 'nullable|image',
            'phone' => 'nullable|string',
            'address' => 'nullable|string'
        ];

        return $rules;
    }
}
