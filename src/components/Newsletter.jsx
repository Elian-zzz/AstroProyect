import { Mail } from 'lucide-react';
import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email suscrito:', email);
    setEmail('');
  };

  return (
    <section className="py-24 bg-[#678973]">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center space-y-8">
          <div className="inline-block p-4 bg-white rounded-full mb-4">
            <Mail className="w-12 h-12 text-[#678973]" />
          </div>
          
          <h2 className="text-4xl text-white">
            Recibí recursos y descuentos en cursos
          </h2>
          
          <p className="text-xl text-[#F0DAD5]">
            Suscribite al newsletter y mantenete al día con contenido exclusivo
          </p>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                required
                className="flex-1 px-6 py-4 rounded-full text-[#424658] placeholder:text-[#BABBB1] focus:outline-none focus:ring-2 focus:ring-[#DEA785]"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-[#C56B62] text-white rounded-full hover:bg-[#D9A69F] transition-colors whitespace-nowrap"
              >
                Suscribirme
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
