import Image from "next/image";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export default function TestimonialCard({ name, role, content, avatar }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300">
      <div className="flex gap-1 mb-4">
        {[1, 2, 3, 4, 5].map((i) => (
          <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      <p className="text-slate-600 italic mb-8 leading-relaxed">
        "{content}"
      </p>
      
      <div className="flex items-center gap-4">
        <div className="relative w-12 h-12 rounded-full overflow-hidden bg-slate-100">
          <Image src={avatar} alt={name} fill sizes="48px" unoptimized className="object-cover" />
        </div>
        <div>
          <h4 className="font-bold text-slate-900 leading-none mb-1">{name}</h4>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>
    </div>
  );
}
