import { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  Star,
  Sparkles,
  Users,
  Calendar,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
export function AboutPage({ navigateTo }) {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonios
  const testimonials = [
    {
      id: 1,
      name: "Laura Martínez",
      course: "Carta Natal: Introducción al Autoconocimiento",
      text: "El curso de Vivi cambió mi vida completamente. Finalmente entiendo patrones que se repetían una y otra vez. Su manera de enseñar es cálida, profunda y muy práctica.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      id: 2,
      name: "Sofía Ramírez",
      course: "Luna y Emociones",
      text: "Vivi tiene un don para conectar la astrología con la sanación emocional. Sus enseñanzas me ayudaron a comprender y honrar mis ciclos internos. Eternamente agradecida.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      id: 3,
      name: "Carolina Díaz",
      course: "Consulta Personal",
      text: "La lectura de mi carta natal con Vivi fue reveladora. Su enfoque combina profesionalismo con una calidez única. Me sentí vista y comprendida en un nivel muy profundo.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
    },
    {
      id: 4,
      name: "Valentina López",
      course: "Tránsitos Planetarios",
      text: "Aprendí a navegar los cambios de mi vida con mucha más conciencia. Vivi enseña con claridad y profundidad, haciendo accesible lo complejo.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    },
    {
      id: 5,
      name: "Daniela Torres",
      course: "Astrología de Relaciones",
      text: "El curso de sinastría me ayudó a entender mis vínculos desde una perspectiva totalmente nueva. Vivi es una maestra excepcional con un conocimiento profundo.",
      rating: 5,
      image:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop",
    },
  ];

  // Estudios y formación
  const education = [
    {
      icon: GraduationCap,
      title: "Licenciada en Psicología",
      institution: "Universidad de Buenos Aires",
      description:
        "Especialización en Psicología Clínica y enfoques humanísticos",
      color: "bg-[#678973]",
    },
    {
      icon: Star,
      title: "Formación en Astrología",
      institution: "Escuela de Astrología Psicológica",
      description:
        "4 años de estudio intensivo en Astrología Moderna, Carta Natal y Tránsitos",
      color: "bg-[#DEA785]",
    },
    {
      icon: Sparkles,
      title: "Tarot y Revolución Solar",
      institution: "Centro de Estudios Holísticos",
      description:
        "Certificación en Tarot Evolutivo y técnicas de Revolución Solar",
      color: "bg-[#D9A69F]",
    },
    {
      icon: Heart,
      title: "Terapias Holísticas",
      institution: "Instituto de Bienestar Integral",
      description:
        "Formación en técnicas de autoconocimiento y sanación emocional",
      color: "bg-[#C79576]",
    },
  ];

  // Talleres
  const workshops = [
    {
      title: "Taller de Autoconocimiento",
      description:
        "Un viaje profundo hacia tu esencia a través de la astrología y la psicología",
      participants: "25+ personas",
      image:
        "https://images.unsplash.com/photo-1717500252010-d708ec89a0a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
    {
      title: "Círculo de Luna Nueva",
      description:
        "Rituales mensuales para conectar con los ciclos lunares y establecer intenciones",
      participants: "15+ personas",
      image:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
    {
      title: "Sanación Emocional Colectiva",
      description:
        "Espacios seguros para explorar y sanar heridas emocionales en comunidad",
      participants: "20+ personas",
      image:
        "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="min-h-screen bg-[#F0DAD5]">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1603983616619-faf118d6c374?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMG1lZGl0YXRpb24lMjBzcGlyaXR1YWx8ZW58MXx8fHwxNzY4MTc5NjczfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Vivi - Psicología Holística"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#424658]/80 via-[#424658]/60 to-[#424658]/80"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight">
            Conecta con tu Esencia,
            <br />
            <span className="text-[#F0DAD5]">Sana desde el Alma</span>
          </h1>
          <p className="text-xl md:text-2xl text-[#BABBB1] mb-8 max-w-2xl mx-auto">
            Acompañamiento holístico que integra psicología, astrología y
            autoconocimiento para tu transformación personal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cursos"
              className="px-8 py-4 bg-[#DEA785] text-white rounded-lg hover:bg-[#C79576] transition-colors text-lg"
            >
              Explorar Cursos
            </Link>
            <Link
              to="/consultas"
              className="px-8 py-4 border-2 border-[#F0DAD5] text-[#F0DAD5] rounded-lg hover:bg-[#F0DAD5] hover:text-[#424658] transition-colors text-lg"
            >
              Agendar Consulta
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#F0DAD5] rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-[#F0DAD5] rounded-full"></div>
          </div>
        </div>
      </section>

      {/* About Introduction */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-[#424658] mb-6">Sobre Mí</h2>
          <div className="w-32 h-1 bg-[#DEA785] mx-auto mb-8"></div>
          <p className="text-lg text-[#6C739C] leading-relaxed mb-6">
            Soy Vivi, psicóloga y astróloga especializada en acompañar procesos
            de autoconocimiento y transformación personal. Creo firmemente que
            cada persona lleva dentro de sí la sabiduría necesaria para su
            sanación y crecimiento.
          </p>
          <p className="text-lg text-[#6C739C] leading-relaxed">
            Mi enfoque integra la psicología humanística con la astrología
            moderna, creando un espacio único donde la ciencia y la
            espiritualidad se encuentran para facilitar tu proceso de
            autodescubrimiento y evolución consciente.
          </p>
        </div>
      </section>

      {/* Education & Training */}
      <section className="py-20 px-6 bg-[#F0DAD5]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#424658] text-center mb-4">
            Formación y Estudios
          </h2>
          <div className="w-32 h-1 bg-[#DEA785] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {education.map((edu, index) => {
              const Icon = edu.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow border border-[#BABBB1]"
                >
                  <div
                    className={`w-16 h-16 ${edu.color} bg-opacity-20 rounded-lg flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-8 h-8 text-[#424658]" />
                  </div>
                  <h3 className="text-xl text-[#424658] mb-2">{edu.title}</h3>
                  <p className="text-[#678973] mb-3">{edu.institution}</p>
                  <p className="text-[#6C739C]">{edu.description}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 bg-white rounded-lg p-8 text-center border border-[#BABBB1]">
            <BookOpen className="w-12 h-12 text-[#DEA785] mx-auto mb-4" />
            <p className="text-lg text-[#6C739C] max-w-3xl mx-auto">
              Mi formación continua incluye participación en congresos
              internacionales de astrología, seminarios de psicología
              transpersonal y constante actualización en técnicas de
              acompañamiento holístico.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Carousel */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#424658] text-center mb-4">
            Testimonios
          </h2>
          <div className="w-32 h-1 bg-[#DEA785] mx-auto mb-12"></div>

          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-gradient-to-br from-[#F0DAD5] to-[#D9A69F] rounded-2xl p-8 md:p-12 shadow-2xl transform transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg mb-6"
                />

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-[#DEA785] text-[#DEA785]"
                      />
                    )
                  )}
                </div>

                <p className="text-lg md:text-xl text-[#424658] italic mb-6 leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </p>

                <h4 className="text-xl text-[#424658] mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-[#6C739C]">
                  {testimonials[currentTestimonial].course}
                </p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white p-3 rounded-full shadow-lg hover:bg-[#F0DAD5] transition-colors"
              aria-label="Testimonio anterior"
            >
              <ChevronLeft className="w-6 h-6 text-[#424658]" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white p-3 rounded-full shadow-lg hover:bg-[#F0DAD5] transition-colors"
              aria-label="Siguiente testimonio"
            >
              <ChevronRight className="w-6 h-6 text-[#424658]" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial
                    ? "bg-[#DEA785] w-8"
                    : "bg-[#BABBB1] hover:bg-[#6C739C]"
                }`}
                aria-label={`Ir a testimonio ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Event Accompaniment */}
      <section className="py-20 px-6 bg-[#424658] text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-center mb-4">
            Acompañamiento en Eventos
          </h2>
          <div className="w-32 h-1 bg-[#DEA785] mx-auto mb-12"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1660795468878-d9d8d75967b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
                alt="Acompañamiento en eventos"
                className="rounded-lg shadow-2xl w-full"
              />
            </div>

            <div>
              <h3 className="text-2xl md:text-3xl text-[#F0DAD5] mb-6">
                Presencia Consciente para tus Momentos Importantes
              </h3>
              <p className="text-lg text-[#BABBB1] mb-6 leading-relaxed">
                Ofrezco servicios de acompañamiento holístico en eventos
                especiales, ceremonias y momentos de transición importantes en
                tu vida o en la de tu comunidad.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-[#DEA785] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg text-white mb-1">
                      Ceremonias y Rituales
                    </h4>
                    <p className="text-[#BABBB1]">
                      Facilitación de ceremonias personalizadas para honrar
                      momentos de cambio y transformación
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-[#DEA785] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg text-white mb-1">
                      Eventos Corporativos
                    </h4>
                    <p className="text-[#BABBB1]">
                      Talleres de bienestar y autoconocimiento para equipos y
                      organizaciones
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-[#DEA785] flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="text-lg text-white mb-1">
                      Retiros y Encuentros
                    </h4>
                    <p className="text-[#BABBB1]">
                      Acompañamiento en retiros de sanación, autoconocimiento y
                      conexión grupal
                    </p>
                  </div>
                </div>
              </div>

              <Link
                to="/consultas"
                className="px-8 py-3 bg-[#DEA785] text-white rounded-lg hover:bg-[#C79576] transition-colors"
              >
                Consultar Disponibilidad
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Workshops */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#424658] text-center mb-4">
            Talleres Holísticos
          </h2>
          <div className="w-32 h-1 bg-[#DEA785] mx-auto mb-6"></div>
          <p className="text-lg text-[#6C739C] text-center mb-12 max-w-2xl mx-auto">
            Espacios de encuentro para la autosanación, el crecimiento personal
            y la conexión con tu esencia
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workshops.map((workshop, index) => (
              <div
                key={index}
                className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all border border-[#BABBB1]"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={workshop.image}
                    alt={workshop.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#424658]/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl text-white mb-1">
                      {workshop.title}
                    </h3>
                    <div className="flex items-center gap-2 text-[#F0DAD5]">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{workshop.participants}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-[#6C739C] leading-relaxed">
                    {workshop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-[#6C739C] mb-6">
              ¿Te gustaría participar en nuestros próximos talleres?
            </p>
            <Link
              to="/consultas"
              className="px-8 py-3 bg-[#424658] text-white rounded-lg hover:bg-[#6C739C] transition-colors"
            >
              Solicitar Información
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#678973] to-[#6C739C]">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="w-16 h-16 text-[#F0DAD5] mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl text-white mb-6">
            Comienza tu Viaje de Autoconocimiento
          </h2>
          <p className="text-xl text-[#F0DAD5] mb-8 max-w-2xl mx-auto">
            Estoy aquí para acompañarte en tu proceso de transformación.
            Exploremos juntas el camino hacia tu esencia.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/cursos"
              className="px-8 py-3 bg-white text-[#424658] rounded-lg hover:bg-[#F0DAD5] transition-colors"
            >
              Ver Cursos
            </Link>
            <Link
              to="/consultas"
              className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-[#424658] transition-colors"
            >
              Agendar Consulta
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
