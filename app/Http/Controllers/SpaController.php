<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SpaController extends Controller
{
    public function getSpaConfig(): \Illuminate\Http\JsonResponse
    {
      return response()->json(config('spa'), 200);
    }
}
