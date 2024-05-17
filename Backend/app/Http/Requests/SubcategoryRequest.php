<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class SubcategoryRequest extends FormRequest
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
            'subcat_name' => 'required|string|unique:sub_categories,subcat_name',
            'position' => [
                'required',
                'integer',
            ],
            'category_id' => 'required|exists:categories,id'
        ];

        if ($id) {
            $rules['subcat_name'] .= ',' . $id;
        }

        return $rules;
    }
}
