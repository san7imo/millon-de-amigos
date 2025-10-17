"use client";

import React, { createContext, useContext, useRef, useState, useEffect } from "react";

interface RadioContextType {
  isPlaying: boolean;
  togglePlay: () => void;
}

const RadioContext = createContext<RadioContextType | undefined>(undefined);

export const RadioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Crear el elemento de audio una sola vez
    if (typeof window !== "undefined" && !audioRef.current) {
      // URL completa del stream Shoutcast2
      audioRef.current = new Audio("https://securestream.radioshd.info:7018/stream");
      audioRef.current.preload = "none";
      audioRef.current.crossOrigin = "anonymous"; // Para evitar problemas de CORS
      
      // Eventos para debugging
      audioRef.current.addEventListener('error', () => {
        const error = audioRef.current?.error;
        console.error('Error de audio:', {
          code: error?.code,
          message: error?.message,
          networkState: audioRef.current?.networkState
        });
      });
      
      audioRef.current.addEventListener('loadeddata', () => {
        console.log('✅ Stream cargado correctamente');
      });

      audioRef.current.addEventListener('canplay', () => {
        console.log('✅ Stream listo para reproducir');
      });
    }

    // Cleanup al desmontar
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.src = "";
      }
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch((error) => {
        console.error("Error al reproducir:", error);
      });
      setIsPlaying(true);
    }
  };

  return (
    <RadioContext.Provider value={{ isPlaying, togglePlay }}>
      {children}
    </RadioContext.Provider>
  );
};

export const useRadio = (): RadioContextType => {
  const context = useContext(RadioContext);
  if (!context) {
    throw new Error("useRadio debe usarse dentro de RadioProvider");
  }
  return context;
};