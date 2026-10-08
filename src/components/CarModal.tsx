import { useEffect } from 'react';
import { Car } from '@/data/cars';
import { X, Gauge, Zap, Battery, Activity } from 'lucide-react';

interface CarModalProps {
  car: Car | null;
  onClose: () => void;
}

export default function CarModal({ car, onClose }: CarModalProps) {
  useEffect(() => {
    if (car) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [car]);

  if (!car) return null;

  const specs = [
    { icon: Gauge, label: 'Dvigatel / tizim', value: car.engine },
    { icon: Activity, label: 'Ot kuchi', value: car.horsepower },
    { icon: Battery, label: 'Yurish masofasi', value: car.range },
    { icon: Zap, label: 'Avtomobil turi', value: car.type },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm"
      style={{ animation: 'fadeIn 0.3s ease-out' }}
      onClick={onClose}
    >
      <div
        className="relative my-auto w-full max-w-4xl overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl"
        style={{ animation: 'modalIn 0.4s ease-out' }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all duration-300 hover:bg-red-800"
          aria-label="Yopish"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative aspect-[16/10] w-full overflow-hidden sm:aspect-[16/9]">
          <img
            src={car.image}
            alt={car.name}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/20 to-transparent" />
          <div className="absolute bottom-0 left-0 p-6 sm:p-8">
            <div className="flex gap-2 mb-3">
              {car.category.map((cat) => (
                <span
                  key={cat}
                  className="rounded-full bg-red-800/80 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white backdrop-blur-sm"
                >
                  {cat}
                </span>
              ))}
            </div>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">{car.name}</h2>
          </div>
        </div>

        <div className="p-6 sm:p-8">
          <div className="mb-6 flex items-center justify-between border-b border-neutral-800 pb-6">
            <div>
              <p className="text-[10px] uppercase tracking-wider text-neutral-500">
                {car.priceOnRequest ? 'Narxi' : 'Boshlang‘ich narxi'}
              </p>
              <p className={`mt-1 text-lg font-semibold ${car.priceOnRequest ? 'text-neutral-300' : 'text-white'}`}>
                {car.price}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {specs.map((spec) => {
              const Icon = spec.icon;
              return (
                <div
                  key={spec.label}
                  className="flex items-start gap-3 rounded-xl border border-neutral-800 bg-neutral-950/50 p-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-900/30 text-red-500">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-neutral-500">
                      {spec.label}
                    </p>
                    <p className="mt-0.5 text-sm font-medium text-white">{spec.value}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 rounded-xl border border-neutral-800 bg-neutral-950/50 p-5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-red-500">Qisqa tavsif</h4>
            <p className="mt-2 text-sm leading-relaxed text-neutral-300">{car.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
