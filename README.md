## Usage

1. Fresh install Laravel >= 7.0 and `cd` to your app.
2. Install this preset via `composer require cnzaicom/tailwindcss --dev`. Laravel will automatically discover this package. No need to register the service provider.
3. Edit tailwindcss.config.js to add   `plugins: [
   require('@tailwindcss/forms'),
   require('@tailwindcss/typography'),
   require('tailwindcss-children'),
   ]`
4. Edit tailwind.config.js like this
```
mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        require('tailwindcss'),
        require('postcss-import'),
    ]);
```
### a. For Presets without Authentication

1. Use `php artisan ui tailwindcss` for the basic Tailwind CSS preset
2. `npm install && npm run dev`
3. `php artisan serve` (or equivalent) to run server and test preset.

### b. For Presets with Authentication

1. Use `php artisan ui tailwindcss --auth` for the basic preset, auth route entry, and Tailwind CSS auth views in one go. (NOTE: If you run this command several times, be sure to clean up the duplicate Auth entries in `routes/web.php`)
4. `npm install && npm run dev`
5. Configure your favorite database (mysql, sqlite etc.)
6. `php artisan migrate` to create basic user tables.
7. `php artisan serve` (or equivalent) to run server and test preset.

### Screenshots

![Welcome](/screenshots/welcome.png)

![Register](/screenshots/register.png)

![Login](/screenshots/login.png)

![Reset Password](/screenshots/reset-password.png)

![Dashboard](/screenshots/dashboard.png)

![Verify](/screenshots/verify.png)
