<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Controllers\FasiltasController;
use App\Models\Fasiltas;
use App\Models\message;

use App\Http\Controllers\MessageController;
use Inertia\Inertia;


class DashboardController extends Controller
{
    public function show(Fasiltas $fasiltas)
    {
        $fasiltasData = Fasiltas::all();
        $messageData = message::all();
        
        return Inertia::render('Dashboard', [
            'fasiltas' => $fasiltasData,
            'message' => $messageData,
        ]);
    }

    
}

