<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class OrderRequest extends FormRequest
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
        $rules = [
            'user_id' => 'required|integer',
            'total_amount' => 'required|numeric',
            'shipping_money' => 'required|numeric',
            'shipping_address' => 'required|string',
            'payment_method' => 'required|string',
            'payment_date' => 'required|date',
            'payment_status' => 'required|string',
            'order_details' => 'required|array',
            'order_note' => 'string',
            'number_phone' => 'required|string',
            'order_details.*.product_id' => 'required|integer',
            'order_details.*.quantity' => 'required|integer|min:1',
            'order_details.*.price' => 'required|numeric|min:0',
        ];

        return $rules;
    }
}
