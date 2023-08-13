<?php

namespace App\Http\Controllers;

use App\Models\Fasiltas;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Storage;

class FasiltasController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $fasiltas= Fasiltas::all();
        return Inertia::render('Home', [
            'fasiltas' => $fasiltas,
        ]); 
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('CreateFasiltas');
    }
    

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $fasiltas = new Fasiltas();
        $fasiltas->title = $request->input('title');
        $fasiltas->image = $request->file('image')->store('images');
        $fasiltas->description = $request->input('description');
    
        $fasiltas->save();
    
        return redirect()->route('dashboard');
    }

    /**
     * Display the specified resource.
     */
    public function show(Fasiltas $fasiltas)
    {
        $fasiltas = Fasiltas::all();
        return Inertia::render('Dashboard', [
        'fasiltas' => $fasiltas,
    ]);
        
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Fasiltas $fasiltas)
    {
       
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Fasiltas $fasiltas)
    {
        $this->validate($request, [
            'title' => 'required',
            // lainnya
        ]);
    
        $fasiltas->title = $request->input('title');
        $fasiltas->description = $request->input('description');
        
        
        if ($request->hasFile('image')) {
            Storage::delete($fasiltas->image);
            $fasiltas->image = $request->file('image')->store('images');
        }
        
        try {
            $fasiltas->save();
            // lainnya
        } catch (\Exception $e) {
            dd($e->getMessage());
        }
    
        return redirect()->route('dashboard');
      
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Fasiltas $fasiltas)
    {
       
    Storage::delete($fasiltas->image);
    $fasiltas->delete();
    return redirect()->route('dashboard');
    }
}
