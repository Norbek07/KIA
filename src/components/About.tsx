export default function About() {
  return (
    <section className="relative bg-neutral-950 py-20 px-4 sm:py-28">
      <div className="mx-auto max-w-3xl text-center">
        <span
          className="inline-block text-xs font-semibold uppercase tracking-[0.3em] text-red-600"
          style={{ animation: 'fadeIn 0.8s ease-out' }}
        >
          Brend haqida
        </span>
        <h2
          className="mt-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.15s both' }}
        >
          KIA haqida
        </h2>
        <div className="mx-auto mt-6 h-px w-20 bg-red-700" />
        <p
          className="mt-8 text-base leading-relaxed text-neutral-300 sm:text-lg md:text-xl"
          style={{ animation: 'fadeInUp 0.8s ease-out 0.3s both' }}
        >
          Kia — zamonaviy dizayn, ilg‘or texnologiyalar, qulaylik va innovatsion
          elektr avtomobillari bilan tanilgan xalqaro avtomobil brendi.
        </p>
      </div>
    </section>
  );
}
