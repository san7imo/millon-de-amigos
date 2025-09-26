'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import HTMLFlipBook from 'react-pageflip';

const TOTAL_PAGINAS = 24;
const IMAGE_WIDTH = 500;
const IMAGE_HEIGHT = 700;

const RevistaPage: React.FC = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const maxWidth = IMAGE_WIDTH * 2; // dos páginas
      const padding = 32; // margen horizontal
      const availableWidth = window.innerWidth - padding;
      const newScale = availableWidth < maxWidth ? availableWidth / maxWidth : 1;
      setScale(newScale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const imagenes = Array.from({ length: TOTAL_PAGINAS }, (_, i) => `/images/revista/pagina-${i + 1}.webp`);

  return (
    <main className="min-h-screen bg-gray-100 overflow-x-hidden">
      <h1 className="text-3xl font-bold text-center pt-8 font-heading text-mda-green">
        Revista Millón de Amigos
      </h1>
      <div className="mt-8 flex justify-center items-center px-4">
        <div style={{ transform: `scale(${scale})`, transformOrigin: 'top center' }}>
          <HTMLFlipBook
            width={IMAGE_WIDTH}
            height={IMAGE_HEIGHT}
            minWidth={315}
            maxWidth={1000}
            minHeight={400}
            maxHeight={1350}
            size="fixed"
            showCover={true}
            mobileScrollSupport={true}
            drawShadow={true}
            flippingTime={500}
            startPage={0}
            maxShadowOpacity={0.5}
            usePortrait={false}
            startZIndex={0}
            autoSize={false}
            clickEventForward={true}
            useMouseEvents={true}
            swipeDistance={30}
            showPageCorners={true}
            disableFlipByClick={false}
            className="shadow-2xl"
            style={{ touchAction: 'pan-y' }}
          >
            {imagenes.map((imgSrc, index) => {
              const isCover = index === 0;
              return (
                <div
                  key={`pagina-${index}`}
                  className={`page-flip ${isCover ? 'hard' : ''} bg-mda-accent border border-mda-olive/10`}
                >
                  <Image
                    src={imgSrc}
                    alt={`Página ${index + 1}`}
                    width={IMAGE_WIDTH}
                    height={IMAGE_HEIGHT}
                    className="object-cover select-none shadow-lg"
                    draggable={false}
                    priority={false}
                  />
                </div>
              );
            })}
          </HTMLFlipBook>
        </div>
      </div>
    </main>
  );
};

export default RevistaPage;
