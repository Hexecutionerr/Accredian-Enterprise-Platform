export default function Logos() {
  const brands = ["Reliance", "HCL", "IBM", "CRIF", "ADP", "BAYER"];

  return (
    <section className="py-12 bg-white border-y border-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-10">
          Trusted by the world's most innovative companies
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
          {brands.map((brand) => (
            <div key={brand} className="text-2xl md:text-3xl font-bold text-slate-400 hover:text-slate-900 transition-colors cursor-default">
              {brand}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
