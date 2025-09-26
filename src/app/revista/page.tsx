'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import HTMLFlipBook from 'react-pageflip';

const TOTAL_PAGINAS = 24;
const IMAGE_WIDTH = 500;
const IMAGE_HEIGHT = 700;

const RevistaPage: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 640);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const imagenes = Array.from({ length: TOTAL_PAGINAS }, (_, i) => `/images/revista/pagina-${i + 1}.webp`);

  return (
    <main className="min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center pt-8 font-heading text-mda-green">
        Revista Millón de Amigos
      </h1>
      <div className="mt-8 flex justify-center items-center px-4">
        <HTMLFlipBook
          width={isMobile ? 320 : IMAGE_WIDTH}
          height={isMobile ? 450 : IMAGE_HEIGHT}
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
                  width={isMobile ? 320 : IMAGE_WIDTH}
                  height={isMobile ? 450 : IMAGE_HEIGHT}
                  className="object-cover select-none shadow-lg"
                  draggable={false}
                  priority={false}
                />
              </div>
            );
          })}
        </HTMLFlipBook>
      </div>
    </main>
  );
};

export default RevistaPage;
