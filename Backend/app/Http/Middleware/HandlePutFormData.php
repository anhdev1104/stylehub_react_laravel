<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class HandlePutFormData
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, \Closure $next)
    {
        if ($request->isMethod('PUT') && $request->getContentType() === 'multipart/form-data') {
            $data = $this->parseMultipartFormData($request);
            $request->setJson($data);
        }

        return $next($request);
    }

    private function parseMultipartFormData(Request $request)
    {
        $data = [];

        foreach ($request->toArray() as $key => $value) {
            if (is_array($value)) {
                $data[$key] = $this->parseMultipartFormDataArray($value);
            } else {
                $data[$key] = $value;
            }
        }

        return $data;
    }

    private function parseMultipartFormDataArray($array)
    {
        $data = [];

        foreach ($array as $key => $value) {
            if (is_array($value)) {
                $data[$key] = $this->parseMultipartFormDataArray($value);
            } else {
                $data[$key] = $value;
            }
        }

        return $data;
    }

}
