<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
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
            'product_name' => 'required|unique:products,product_name',
            'initial_price' => 'required|numeric|min:0',
            'description' => 'required|string',
            'is_active' => 'required|in:active,inactive',
            'category_id' => 'required|exists:categories,id',
            'subcat_id' => 'required|exists:sub_categories,id',
            'discount' => 'nullable|integer|min:0|max:100',
        ];

        if ($id) {
            $rules['product_name'] .= ',' . $id;        
        }
        return $rules;
    }
}
