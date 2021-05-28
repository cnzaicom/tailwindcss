const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        require('tailwindcss'),
        /*自动增加 CSS 前缀词*/
        require("autoprefixer"),
        /*在 CSS 用嵌套的写法*/
        require('postcss-nested'),
        /*在 CSS 里可以 import 其他 CSS*/
        require('postcss-import'),
    ]);
if (mix.inProduction()) {
    mix.version();
}
