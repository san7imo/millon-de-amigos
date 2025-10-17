"use client";

import React from "react";

export default function SarahPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-rose-200 to-red-300 text-center p-6">
      <div className="max-w-2xl bg-white/70 backdrop-blur-md rounded-2xl shadow-lg p-10">
        <h1 className="text-4xl md:text-5xl font-bold text-rose-700 mb-4">
          Sarah López
        </h1>
        <h2 className="text-2xl text-gray-700 font-medium mb-6">
          Me encantas 
        </h2>
        <p className="text-gray-600 text-lg leading-relaxed">
          Estoy loco por verte y comerte a besitos.
          Hacer de tu cuerpo un lienzo dónde el pincel de mis besos dibuje
          cada rincón de tu piel. 
        </p>
        <p className="text-gray-600 text-lg mt-4 leading-relaxed">
          me puse romantico, lo sé. Pero es que me encantas.
        </p>
      </div>
    </main>
  );
}
