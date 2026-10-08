import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const heroImages = [
  'https://images.pexels.com/photos/31477088/pexels-photo-31477088.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/16673550/pexels-photo-16673550.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/27286179/pexels-photo-27286179.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/13331881/pexels-photo-13331881.jpeg?auto=compress&cs=tinysrgb&w=1920',
  'https://images.pexels.com/photos/9714429/pexels-photo-9714429.jpeg?auto=compress&cs=tinysrgb&w=1920',
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const scrollToModels = () => {
    document.getElementById('models')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {heroImages.map((img, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1500ms] ease-in-out"
          style={{
            opacity: i === current ? 1 : 0,
            transform: i === current ? 'scale(1.05)' : 'scale(1)',
          }}
        >
          <img
            src={img}
            alt="KIA avtomobil"
            className="h-full w-full object-cover"
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />
        </div>
      ))}

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1
          className="text-6xl font-extrabold tracking-[0.3em] text-white sm:text-7xl md:text-8xl lg:text-9xl"
          style={{
            animation: 'fadeInDown 1s ease-out',
          }}
        >
          KIA
        </h1>
        <p
          className="mt-4 text-lg font-light tracking-widest text-white/90 sm:text-xl md:text-2xl"
          style={{
            animation: 'fadeInUp 1s ease-out 0.3s both',
          }}
        >
          Harakat ilhomlantiradi
        </p>
        <button
          onClick={scrollToModels}
          className="group mt-10 overflow-hidden rounded-full border border-white/30 bg-white/10 px-8 py-3.5 text-sm font-medium tracking-wider text-white backdrop-blur-md transition-all duration-300 hover:border-red-700 hover:bg-red-800/80 sm:mt-12 sm:px-10 sm:py-4 sm:text-base"
          style={{
            animation: 'fadeInUp 1s ease-out 0.6s both',
          }}
        >
          Avtomobillarni ko‘rish
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
        <button
          onClick={scrollToModels}
          className="flex flex-col items-center gap-2 text-white/60 transition-colors hover:text-white"
          aria-label="Pastga o‘tish"
        >
          <span className="text-[10px] uppercase tracking-widest">Pastga</span>
          <ChevronDown className="h-5 w-5 animate-bounce" />
        </button>
      </div>

      <div className="absolute bottom-8 right-6 z-10 hidden gap-2 sm:flex">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === current ? 'w-10 bg-red-600' : 'w-4 bg-white/40'
            }`}
            aria-label={`Rasm ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
