import { ImageWithFallback } from './ImageWithFallback';

export function AboutVivi() {
  return (
    <section className="py-24 bg-[#BABBB1]">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Foto circular */}
          <div className="flex-shrink-0">
            <div className="w-80 h-80 rounded-full overflow-hidden shadow-2xl border-8 border-white">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NjAwNzEyMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Vivi"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Contenido */}
          <div className="flex-1 space-y-6">
            <h2 className="text-4xl lg:text-5xl text-[#424658]">
              Conocé a Vivi
            </h2>
            <p className="text-lg text-[#424658] leading-relaxed">
              Con formación en psicología holística y años de estudio en astrología moderna, 
              mi misión es acompañarte en tu proceso de autoconocimiento y transformación personal.
            </p>
            <p className="text-lg text-[#424658] leading-relaxed">
              Creo en la astrología como una herramienta poderosa para entender nuestros patrones, 
              sanar nuestras emociones y desarrollar una relación más consciente con nosotros mismos. 
              A través de mis cursos y sesiones, te invito a explorar tu carta natal como un mapa 
              hacia el self-care y el crecimiento personal.
            </p>
            <button className="mt-8 px-8 py-4 bg-[#C56B62] text-white rounded-full hover:bg-[#D9A69F] transition-colors">
              Leer más
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}