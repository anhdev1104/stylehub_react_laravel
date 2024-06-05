<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Auth;

class CheckRole
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::check()) {
            if (Auth::user()->role['role_name'] == 'admin' || Auth::user()->role['role_name'] == 'moderator') {
                return $next($request);
            }

            return response()->json(['error' => 'Unauthorized access'], 401);
        }

        return response()->json(['error' => 'User not authenticated'], 403);
    }
}
