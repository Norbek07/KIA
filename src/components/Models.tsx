import { useState, useMemo } from 'react';
import { cars, Car, CarCategory } from '@/data/cars';
import CarCard from './CarCard';
import CarModal from './CarModal';

type FilterKey = 'all' | CarCategory;

const filters: { key: FilterKey; label: string }[] = [
  { key: 'all', label: 'Barchasi' },
  { key: 'SUV', label: 'Yo‘ltanlamas' },
  { key: 'Sedan', label: 'Sedan' },
  { key: 'Elektr', label: 'Elektr' },
  { key: 'Oilaviy', label: 'Oilaviy' },
];

export default function Models() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);

  const filteredCars = useMemo(() => {
    if (activeFilter === 'all') return cars;
    return cars.filter((car) => car.category.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="models" className="bg-neutral-950 py-20 px-4 sm:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <span
            className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-red-600"
            style={{ animation: 'fadeIn 0.8s ease-out' }}
          >
            Katalog
          </span>
          <h2
            className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
            style={{ animation: 'fadeInUp 0.8s ease-out 0.15s both' }}
          >
            KIA avtomobillari
          </h2>
          <div className="mx-auto mt-6 h-px w-20 bg-red-700" />
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter.key}
              onClick={() => setActiveFilter(filter.key)}
              className={`rounded-full px-6 py-2.5 text-sm font-medium tracking-wide transition-all duration-300 ${
                activeFilter === filter.key
                  ? 'bg-red-800 text-white shadow-lg shadow-red-950/40'
                  : 'border border-neutral-800 bg-neutral-900 text-neutral-400 hover:border-neutral-700 hover:text-white'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        <div
          key={activeFilter}
          className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
        >
          {filteredCars.map((car, i) => (
            <CarCard
              key={car.id}
              car={car}
              index={i}
              onClick={() => setSelectedCar(car)}
            />
          ))}
        </div>
      </div>

      <CarModal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </section>
  );
}
