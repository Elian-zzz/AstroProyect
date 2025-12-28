import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    text: 'La carta natal me ayudó a entender mis patrones emocionales. Ahora puedo trabajar en mis relaciones de una manera más consciente.',
    name: 'María González',
  },
  {
    id: 2,
    text: 'El curso de Tarot superó mis expectativas. Vivi tiene una manera única de explicar y conectar con cada estudiante.',
    name: 'Laura Martínez',
  },
  {
    id: 3,
    text: 'Mi revolución solar con Vivi fue reveladora. Entendí mucho mejor hacia dónde dirigir mi energía este año.',
    name: 'Sofía Rodríguez',
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-[#F0DAD5]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl text-[#424658] mb-16 text-center">
          Testimonios
        </h2>

        <div className="bg-white rounded-3xl p-12 shadow-lg relative">
          <Quote className="w-16 h-16 text-[#DEA785] mb-6 opacity-50" />
          
          <div className="min-h-[200px] flex flex-col justify-center">
            <p className="text-2xl text-[#424658] italic mb-8 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>
            <p className="text-xl text-[#678973]">
              — {testimonials[currentIndex].name}
            </p>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-full bg-[#BABBB1] text-[#424658] hover:bg-[#678973] hover:text-white transition-colors"
              aria-label="Anterior testimonio"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={next}
              className="p-3 rounded-full bg-[#BABBB1] text-[#424658] hover:bg-[#678973] hover:text-white transition-colors"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#C56B62]' : 'bg-[#BABBB1]'
                }`}
                aria-label={`Ir al testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
