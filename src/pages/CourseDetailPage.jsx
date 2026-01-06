import {
  ArrowLeft,
  Check,
  Clock,
  Users,
  Star,
  PlayCircle,
  Download,
  MessageCircle,
} from "lucide-react";
import { ImageWithFallback } from "../components/ImageWithFallback";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { getCourseById } from "../data/coursesData";
import { useState } from "react";

export function CourseDetailPage({ courseId, navigateTo }) {
  const course = getCourseById(courseId);
  const [openFaq, setOpenFaq] = useState(null);

  if (!course) {
    return (
      <div className="min-h-screen bg-[#F0DAD5] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl text-[#424658] mb-4">Curso no encontrado</h1>
          <button
            onClick={() => navigateTo("cursos")}
            className="text-[#C56B62] hover:underline"
          >
            Volver a cursos
          </button>
        </div>
      </div>
    );
  }

  const faqs = [
    {
      question: "¿Necesito conocimientos previos?",
      answer: course.requirements.join(". ") + ".",
    },
    {
      question: "¿Cómo accedo al curso?",
      answer: course.isLive
        ? "Recibirás un email con el enlace de Zoom antes de cada clase. Las grabaciones estarán disponibles en tu área de estudiante."
        : "Una vez realizado el pago, recibirás acceso inmediato a la plataforma con todos los videos y materiales.",
    },
    {
      question: "¿Tiene certificado?",
      answer:
        "Sí, al completar el curso recibirás un certificado digital de finalización que puedes descargar y compartir.",
    },
    {
      question: "¿Puedo hacer preguntas durante el curso?",
      answer: course.isLive
        ? "Sí, las clases en vivo incluyen espacio para preguntas y respuestas. También tendrás acceso a un grupo privado de Telegram."
        : "Tendrás acceso a una comunidad privada donde podrás hacer preguntas y recibir feedback.",
    },
    {
      question: "¿Qué pasa si me pierdo una clase en vivo?",
      answer: course.isLive
        ? "No te preocupes, todas las clases se graban y quedan disponibles para que las veas cuando quieras."
        : "Este es un curso grabado, puedes verlo a tu propio ritmo cuando quieras.",
    },
  ];

  const testimonials = [
    {
      name: "María González",
      text: "Este curso cambió completamente mi perspectiva sobre la astrología. Vivi tiene un don para explicar conceptos complejos de manera simple y práctica.",
      rating: 5,
    },
    {
      name: "Laura Fernández",
      text: "La calidad del contenido es excepcional. Cada módulo está muy bien estructurado y los ejercicios prácticos realmente ayudan a integrar el conocimiento.",
      rating: 5,
    },
    {
      name: "Ana Martínez",
      text: "Recomiendo este curso a cualquier persona interesada en el autoconocimiento. Es una inversión que vale cada peso.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F0DAD5]">
      {/* Back button */}
      <div className="bg-white border-b border-[#BABBB1]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-4">
          <button
            onClick={() => navigateTo("cursos")}
            className="inline-flex items-center gap-2 text-[#6C739C] hover:text-[#C56B62] transition-colors"
          >
            <ArrowLeft size={20} />
            Volver a cursos
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative">
        <div className="h-96 overflow-hidden">
          <ImageWithFallback
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#424658] to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="relative -mt-32 bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Content */}
              <div className="lg:col-span-2 space-y-6">
                <div className="flex items-center gap-3">
                  {course.isLive ? (
                    <span className="px-4 py-2 bg-[#C56B62] text-white rounded-full text-sm">
                      Curso en vivo
                    </span>
                  ) : (
                    <span className="px-4 py-2 bg-[#678973] text-white rounded-full text-sm">
                      Curso grabado
                    </span>
                  )}
                  <span className="px-4 py-2 bg-[#BABBB1] text-[#424658] rounded-full text-sm">
                    {course.level}
                  </span>
                </div>

                <h1 className="text-4xl lg:text-5xl text-[#424658]">
                  {course.title}
                </h1>

                <p className="text-xl text-[#6C739C] leading-relaxed">
                  {course.description}
                </p>

                <div className="flex items-center gap-6 text-[#6C739C]">
                  <div className="flex items-center gap-2">
                    <Clock size={20} />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users size={20} />
                    <span>{course.level}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star size={20} className="fill-[#DEA785] text-[#DEA785]" />
                    <span>4.9/5</span>
                  </div>
                </div>
              </div>

              {/* Price Card */}
              <div className="lg:col-span-1">
                <div className="bg-[#F0DAD5] rounded-2xl p-6 space-y-4 sticky top-24">
                  <div>
                    <div className="flex items-baseline gap-3">
                      <p className="text-4xl text-[#424658]">${course.price}</p>
                      {course.oldPrice && (
                        <p className="text-xl text-[#6C739C] line-through">
                          ${course.oldPrice}
                        </p>
                      )}
                    </div>
                    {course.oldPrice && (
                      <p className="text-sm text-[#C56B62] mt-1">
                        ¡Ahorrás ${course.oldPrice - course.price}!
                      </p>
                    )}
                  </div>

                  <button className="w-full py-4 bg-[#C56B62] text-white rounded-full hover:bg-[#D9A69F] transition-colors text-lg">
                    Comprar ahora
                  </button>

                  <button className="w-full py-3 border-2 border-[#C56B62] text-[#C56B62] rounded-full hover:bg-[#C56B62] hover:text-white transition-colors">
                    Consultar por WhatsApp
                  </button>

                  <div className="pt-4 border-t border-[#BABBB1] space-y-2 text-sm text-[#6C739C]">
                    <p className="flex items-center gap-2">
                      <Check size={16} className="text-[#678973]" />
                      Acceso inmediato
                    </p>
                    <p className="flex items-center gap-2">
                      <Check size={16} className="text-[#678973]" />
                      Certificado incluido
                    </p>
                    <p className="flex items-center gap-2">
                      <Check size={16} className="text-[#678973]" />
                      Garantía de 7 días
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What you'll learn */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-3xl p-8 lg:p-12">
            <h2 className="text-3xl text-[#424658] mb-8">
              ¿Qué vas a aprender?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {course.whatYouLearn.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check
                    size={20}
                    className="text-[#678973] flex-shrink-0 mt-1"
                  />
                  <p className="text-[#6C739C]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl text-[#424658] mb-8">Temario del curso</h2>
          <div className="space-y-4">
            {course.modules.map((module, index) => (
              <div
                key={index}
                className="border-2 border-[#BABBB1] rounded-2xl overflow-hidden"
              >
                <div className="bg-[#F0DAD5] p-6">
                  <h3 className="text-xl text-[#424658]">{module.title}</h3>
                </div>
                <div className="p-6 space-y-3">
                  {module.lessons.map((lesson, lessonIndex) => (
                    <div
                      key={lessonIndex}
                      className="flex items-center gap-3 text-[#6C739C]"
                    >
                      <PlayCircle size={18} className="flex-shrink-0" />
                      <span>{lesson}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Includes */}
          <div className="mt-12 bg-[#F0DAD5] rounded-2xl p-8">
            <h3 className="text-2xl text-[#424658] mb-6">
              Este curso incluye:
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {course.includes.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Download
                    size={18}
                    className="text-[#678973] flex-shrink-0"
                  />
                  <span className="text-[#6C739C]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Vivi mini */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="bg-white rounded-3xl p-8 lg:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#BABBB1]">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                  alt="Vivi"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="flex-1 space-y-4">
              <h2 className="text-3xl text-[#424658]">Sobre Vivi</h2>
              <p className="text-[#6C739C] leading-relaxed">
                Con formación en psicología holística y años de estudio en
                astrología moderna, mi misión es acompañarte en tu proceso de
                autoconocimiento y transformación personal. He guiado a más de
                500 personas en su camino de crecimiento a través de la
                astrología.
              </p>
              <button
                onClick={() => navigateTo("sobre-mi")}
                className="inline-block text-[#C56B62] hover:underline"
              >
                Conocer más →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl text-[#424658] mb-12 text-center">
            Opiniones de alumnos
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#F0DAD5] rounded-2xl p-6 space-y-4"
              >
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-[#DEA785] text-[#DEA785]"
                    />
                  ))}
                </div>
                <p className="text-[#6C739C] italic">"{testimonial.text}"</p>
                <p className="text-[#424658]">— {testimonial.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 className="text-3xl text-[#424658] mb-12 text-center">
            Preguntas frecuentes
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden border-2 border-[#BABBB1]"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-[#F0DAD5] transition-colors"
                >
                  <span className="text-lg text-[#424658]">{faq.question}</span>
                  <MessageCircle
                    size={20}
                    className="text-[#6C739C] flex-shrink-0"
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-[#6C739C]">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-[#424658]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center space-y-6">
          <h2 className="text-4xl text-white">
            ¿Lista para comenzar tu transformación?
          </h2>
          <p className="text-xl text-[#BABBB1]">
            Únete a cientos de personas que ya están explorando su carta natal
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-10 py-4 bg-[#C56B62] text-white rounded-full hover:bg-[#D9A69F] transition-colors text-lg">
              Comprar curso - ${course.price}
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white hover:text-[#424658] transition-colors">
              Consultar dudas
            </button>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}
