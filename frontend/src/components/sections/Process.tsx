const steps = [
  {
    number: "01",
    title: "Skill Gap Analysis",
    description: "We assess your team's current capabilities to identify critical areas for improvement."
  },
  {
    number: "02",
    title: "Customized Training Plan",
    description: "Our experts design a curriculum that perfectly aligns with your specific corporate goals."
  },
  {
    number: "03",
    title: "Flexible Program Delivery",
    description: "We deliver the training through interactive, hybrid models that suit your schedule."
  }
];

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-blue-600 font-bold tracking-wide uppercase text-xs sm:text-sm mb-3">
            How It Works
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 px-2">
            Three simple steps to transform your team
          </p>
          <p className="text-base sm:text-lg text-slate-600 px-4">
            From assessment to execution, we make the journey seamless and efficient.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                {/* Number Circle */}
                <div className="w-16 h-16 rounded-full bg-white border-2 border-slate-100 flex items-center justify-center text-2xl font-black text-slate-300 mb-6 group-hover:border-blue-600 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300 shadow-sm">
                  {step.number}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {step.title}
                </h3>
                
                <p className="text-slate-600 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA for Process */}
        <div className="mt-20 flex justify-center">
          <button className="px-8 py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all shadow-lg transform hover:-translate-y-1">
            Ready to get started?
          </button>
        </div>
        
      </div>
    </section>
  );
}
