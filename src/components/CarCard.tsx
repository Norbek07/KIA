import { Car } from '@/data/cars';
import { ArrowUpRight } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onClick: () => void;
  index: number;
}

export default function CarCard({ car, onClick, index }: CarCardProps) {
  return (
    <div
      className="group relative cursor-pointer overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-900 transition-all duration-500 hover:border-neutral-700 hover:shadow-2xl hover:shadow-red-950/30"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.08}s both`,
      }}
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={car.image}
          alt={car.name}
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
        <div className="absolute top-4 left-4 flex gap-2">
          {car.category.map((cat) => (
            <span
              key={cat}
              className="rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm"
            >
              {cat}
            </span>
          ))}
        </div>
      </div>

      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-bold text-white sm:text-2xl">{car.name}</h3>
            <p className="mt-1 text-sm text-neutral-400">{car.type}</p>
          </div>
          <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 text-neutral-400 transition-all duration-300 group-hover:border-red-700 group-hover:bg-red-800/40 group-hover:text-white">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-neutral-400 line-clamp-2">
          {car.description}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-neutral-800 pt-4">
          <div>
            <p className="text-[10px] uppercase tracking-wider text-neutral-500">
              {car.priceOnRequest ? 'Narxi' : 'Boshlang‘ich narxi'}
            </p>
            <p className={`mt-0.5 text-sm font-semibold ${car.priceOnRequest ? 'text-neutral-300' : 'text-white'}`}>
              {car.price}
            </p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onClick();
            }}
            className="text-xs font-medium uppercase tracking-wider text-red-500 transition-colors hover:text-red-400"
          >
            Model haqida
          </button>
        </div>
      </div>
    </div>
  );
}
