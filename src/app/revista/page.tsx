'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import HTMLFlipBook from 'react-pageflip';
import { FaHandPointer } from 'react-icons/fa'; // Ícono de mano// Importamos el ícono de flecha
import Link from 'next/link';

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

  const bookWidth = isMobile ? 320 : IMAGE_WIDTH;
  const bookHeight = isMobile ? 450 : IMAGE_HEIGHT;

  return (
    <main className="min-h-screen bg-gray-100 overflow-x-hidden">
      <h1 className="text-3xl font-bold text-center pt-8 font-heading text-mda-green">
        Revista Millón de Amigos
      </h1>
      <Link href="/" className='font-glowen' >Volver al inicio</Link>
      <div className="mt-8 flex justify-center items-center px-4">
        <HTMLFlipBook
          width={bookWidth}
          height={bookHeight}
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
          usePortrait={isMobile} // ✅ una página en móviles
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
                  width={bookWidth}
                  height={bookHeight}
                  className="object-cover select-none shadow-lg"
                  draggable={false}
                  priority={false}
                />
              </div>
            );
          })}
        </HTMLFlipBook>
      </div>

      {/* Contenedor de texto y ícono */}
 <div className="text-center mt-6 flex justify-center gap-2 items-center">
  <p className="text-md text-gray-600">Pasa la página</p>
  <FaHandPointer className="text-3xl text-mda-green mt-2 animate-bounce-tap" />
</div>
    </main>
  );
};

export default RevistaPage;
