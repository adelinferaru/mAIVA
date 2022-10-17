<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/spa-config', [\App\Http\Controllers\SpaController::class, 'getSpaConfig']);

Route::get('{any}', function () {
  return view('maiva');
})->where('any','.*');
