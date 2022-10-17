const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

/*mix.js('resources/js/app.js', 'public/js')
  .postCss('resources/css/app.css', 'public/css', [
    //
  ]);*/

mix
  .copy('public/dist/spa/index.html', 'resources/views/maiva.blade.php')
  .copy('public/dist/spa/mix-manifest.json', 'public/mix-manifest.json')
  .copyDirectory('public/dist/spa/js', 'public/js')
  .copyDirectory('public/dist/spa/css', 'public/css')
  .copyDirectory('public/dist/spa/fonts', 'public/fonts');
