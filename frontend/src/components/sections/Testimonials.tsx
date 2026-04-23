"use client";

import { useState, useEffect } from "react";
import TestimonialCard from "../ui/TestimonialCard";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/api/testimonials");
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Failed to fetch testimonials:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-blue-600 font-bold tracking-wide uppercase text-xs sm:text-sm mb-3">
            Testimonials
          </h2>
          <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 px-2">
            Trusted by leaders across the globe
          </p>
          <p className="text-base sm:text-lg text-slate-600 px-4">
            Hear from the enterprise teams that have transformed their operations with Accredian.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item) => (
              <TestimonialCard
                key={item.id}
                name={item.name}
                role={item.role}
                content={item.content}
                avatar={item.avatar}
              />
            ))}
          </div>
        )}
        
      </div>
    </section>
  );
}
