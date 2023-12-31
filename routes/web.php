<?php
use App\Http\Controllers\FasiltasController;
use App\Http\Controllers\MessageController;
use App\Http\Controllers\DashboardController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


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
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/', [FasiltasController::class, 'index']); 
    Route::get('/message/create', [MessageController::class, 'create'])->name('message.create');
    Route::post('/message', [MessageController::class, 'store'])->name('message.store');
    
    // ... Rute-rute lain yang memerlukan autentikasi dan verifikasi
});
// Route::get('/', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

// Route::get('/dashboard', function () {
//     return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'show'])->name('dashboard');
    Route::get('/dashboard/message', [MessageController::class, 'index'])->name('dashboard.message');
    Route::get('/fasiltas/create', [FasiltasController::class, 'create'])->name('fasiltas.create');
    Route::post('/fasiltas', [FasiltasController::class, 'store'])->name('fasiltas.store');
    Route::delete('/fasiltas/{fasiltas}', [FasiltasController::class, 'destroy'])->name('fasiltas.destroy');
    Route::patch('/fasiltas/{fasiltas}', [FasiltasController::class, 'update'])->name('fasiltas.update');
    Route::delete('/message/{message}', [MessageController::class, 'destroy'])->name('message.destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/storage/{path}', function ($path) {
    return response()->file(storage_path("app/$path"));
})->where('path', '.*');

require __DIR__.'/auth.php';
