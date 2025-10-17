"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, ChevronDown } from "lucide-react";
import { useRadio } from "@/app/providers/RadioProvider";
import Image from "next/image";

interface RadioPlayerProps {
  stationName?: string;
  subtitle?: string;
  logoUrl?: string;
}

const RadioPlayer: React.FC<RadioPlayerProps> = ({
  stationName = "Ecuashyri 103.7 FM",
  subtitle = "Imagen y sonido tricolor",
  logoUrl = "/images/radio.png",
}) => {
  const { isPlaying, togglePlay } = useRadio();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* 🔹 Línea sutil superior solo cuando está cerrado */}
      {!isOpen && (
        <div className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-neutral-800/30 to-transparent pointer-events-none z-[68]" />
      )}

      {/* 🔹 Contenedor principal que se mueve como unidad */}
      <motion.div
        animate={{ 
          y: isOpen ? 0 : -80
        }}
        transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        className="fixed top-0 left-0 right-0 z-[70]"
      >
        {/* 🔹 Barra desplegable completa */}
        <div className="bg-neutral-900 border-b-4 border-neutral-950 shadow-2xl h-20">
          <div className="h-full flex items-center justify-between px-8">
            <div className="flex items-center gap-4">
              <div className="relative h-16">
                <Image
                  src={logoUrl}
                  alt="Radio Logo"
                  width={306}
                  height={101}
                  className="h-full w-auto object-contain rounded border border-neutral-700 shadow-lg"
                />
              </div>
              <div>
                <p className="text-white font-semibold text-base">{stationName}</p>
                <p className="text-white text-base">{subtitle}</p>

                <div className="flex items-center gap-2">
                  <motion.span
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.5, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                    className="text-green-400 text-sm"
                  >
                    ●
                  </motion.span>
                  <span className="text-gray-300 text-xs font-medium uppercase tracking-wider">
                    Transmisión en vivo
                  </span>
                </div>
              </div>
            </div>

            <motion.button
              onClick={togglePlay}
              className="text-white hover:text-gray-300 transition-all bg-neutral-800 p-3.5 rounded-full hover:bg-neutral-700 shadow-lg border border-neutral-700"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isPlaying ? "Pausar" : "Reproducir"}
            >
              {isPlaying ? <Pause size={26} /> : <Play size={26} className="ml-0.5" />}
            </motion.button>
          </div>
        </div>

        {/* 🔹 Pestaña tipo carpeta/organizador que se mueve con el panel */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          className={`absolute top-20 right-8 bg-neutral-900 text-white cursor-pointer px-6 py-1 text-xs font-semibold select-none shadow-xl hover:bg-neutral-800 transition-colors flex items-center gap-2 whitespace-nowrap ${
            isOpen ? 'border-l-2 border-r-2 border-b-2 border-neutral-950 rounded-b-lg' : 'border-2 border-neutral-950 rounded-b-lg'
          }`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="tracking-wide">Radio en vivo</span>
          <motion.span
            animate={{ 
              opacity: [1, 0.4, 1],
              scale: [1, 0.9, 1]
            }}
            transition={{ repeat: Infinity, duration: 1.8 }}
            className="w-2 h-2 bg-green-400 rounded-full shadow-lg shadow-green-500/50"
          />
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown size={14} />
          </motion.div>
        </motion.button>
      </motion.div>
    </>
  );
};

export default RadioPlayer;