<?php

namespace App\Http\Controllers;

use App\Models\message;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class MessageController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $message = message::all(); 
        return Inertia::render('Dashboard', ['message' => $message]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('CreateMassage');

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $message = new message();
        $message -> name = $request->input('name');
        $message -> email =$request->input('email');
        $message -> message = $request->input('message');

        $message -> save();
        return redirect('/');

    }

    /**
     * Display the specified resource.
     */
    public function show(message $message)
    {
        $message = message::all();
        return Inertia::render('Dashboard',
        ['message'=>$message]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(message $message)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, message $message)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(message $message)
    {
        try {
            $message->delete();
            return redirect()->back()->with('success', 'Message deleted successfully.');
        } catch (\Exception $e) {
            return redirect()->back()->with('error', 'An error occurred while deleting the message.');
        }
    }
}
