import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-10 pb-20 lg:pt-24 lg:pb-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
          
          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left space-y-6 md:space-y-8 max-w-2xl mx-auto lg:mx-0">
            <div className="inline-flex items-center rounded-full px-3 py-1 text-xs sm:text-sm font-medium leading-5 text-blue-600 bg-blue-50 border border-blue-100">
              Corporate Training & Development
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.1] md:leading-[1.1]">
              Next-Gen <span className="text-blue-600">Expertise</span> For Your <span className="text-blue-600">Enterprise</span>
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed">
              Empower your workforce with cutting-edge skills in Data Science, AI, and Product Management. Cultivate a high-performance team with Accredian.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link 
                href="#contact" 
                className="w-full sm:w-auto px-10 py-4 bg-blue-600 text-white rounded-xl font-bold text-base sm:text-lg hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 transform hover:-translate-y-1 text-center"
              >
                Enquire Now
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-500 font-medium">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="h-8 w-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
                     <span className="text-[10px]">U{i}</span>
                  </div>
                ))}
              </div>
              <span>Trusted by leading enterprises globally</span>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex-1 relative w-full max-w-xl lg:max-w-none">
            <div className="absolute -inset-4 bg-blue-100/50 rounded-3xl blur-3xl -z-10 animate-pulse"></div>
            <div className="relative rounded-2xl border border-slate-200 bg-white shadow-2xl overflow-hidden transform hover:scale-[1.02] transition-transform duration-500">
               <Image 
                src="/hero-illustration.png" 
                alt="Accredian Dashboard Illustration" 
                width={800} 
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
