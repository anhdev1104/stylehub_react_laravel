<?php

namespace App\Http\Controllers\Apis;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Brand;
use App\Services\BrandService;

class BrandController extends Controller
{
    protected $brandService;
    public function __construct(BrandService $brandService) {
        $this->brandService = $brandService;
    }
    /**
     * @OA\Get(
     *     path="/api/v1/brands",
     *     operationId="getBrandsList",
     *     tags={"Brands"},
     *     summary="Get list of brands",
     *     description="Returns list of brands",
     *     @OA\Response(
     *         response=200,
     *         description="Successful operation",
     *         @OA\JsonContent(
     *             type="object",
     *             @OA\Property(
     *                 property="data",
     *                 type="array",
     *                 @OA\Items(
     *                     type="object",
     *                     @OA\Property(
     *                         property="id",
     *                         type="integer",
     *                         example=1
     *                     ),
     *                     @OA\Property(
     *                         property="brand_name",
     *                         type="string",
     *                         example="Prada Brand"
     *                     ),
     *                     @OA\Property(
     *                         property="brand_image",
     *                         type="string",
     *                         example="https://duong04.s3.ap-southeast-2.amazonaws.com/public/images/brand/brand1.png"
     *                     ),
     *                     @OA\Property(
     *                         property="created_at",
     *                         type="string",
     *                         format="date-time",
     *                         example="2024-05-24T16:48:39.000000Z"
     *                     ),
     *                     @OA\Property(
     *                         property="updated_at",
     *                         type="string",
     *                         format="date-time",
     *                         example="2024-05-24T16:48:39.000000Z"
     *                     )
     *                 )
     *             )
     *         )
     *     )
     * )
     */
    public function index() {
        $brands = $this->brandService->getAllBrands();

        return response()->json(['data'=>$brands], 200);
    }
}
