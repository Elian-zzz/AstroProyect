import { ImageWithFallback } from "./ImageWithFallback";
import { Link } from "react-router-dom";
export function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#F0DAD5] to-[#BABBB1] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-8 z-10 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#424658] leading-tight mt-70 md:mt-0">
              Desarrolla tu autoconocimiento desde la astrología moderna
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-[#6C739C] max-w-xl mx-auto md:mx-0">
              Cursos, talleres y sesiones para acompañarte en tu crecimiento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/cursos"
                className="px-8 py-4 bg-[#C56B62] text-white rounded-full hover:bg-[#D9A69F] transition-colors inline-block text-center"
              >
                Ver cursos
              </Link>
              <Link
                to="/consultas"
                className="px-8 py-4 bg-transparent border-2 border-[#678973] text-[#678973] rounded-full hover:bg-[#678973] hover:text-white transition-colors"
              >
                Agendar consulta
              </Link>
            </div>
          </div>

          {/* Foto Vivi derecha */}
          <div className="relative lg:absolute lg:right-0 lg:top-0 lg:h-full lg:w-1/2 flex items-center justify-center">
            <div className="relative w-full h-[600px] lg:h-full">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2NjAwNzEyMHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Vivi"
                className="w-full h-full object-cover rounded-tl-[100px] rounded-bl-[100px] lg:rounded-none lg:rounded-tl-[200px] opacity-90"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#F0DAD5] lg:to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
