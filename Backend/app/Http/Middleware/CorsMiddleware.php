<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class CorsMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle($request, Closure $next)
    {
           return $next($request)
               ->header('Access-Control-Allow-Origin', '*')
               ->header('Access-Control-Allow-Methods', '*')
               ->header('Access-Control-Allow-Credentials', 'true')
               ->header('Access-Control-Allow-Headers', 'X-CSRF-Token');
    }
   
}
