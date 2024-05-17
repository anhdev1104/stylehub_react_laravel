<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class CategoryRequest extends FormRequest
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
            'category_name' => 'required|string|unique:categories,category_name',
            'position' => 'required|integer|unique:categories,position',
        ];

        if ($id) {
            $rules['category_name'] .= ',' . $id;
            $rules['position'] .= ',' . $id;
        }

        return $rules;
    }
}
