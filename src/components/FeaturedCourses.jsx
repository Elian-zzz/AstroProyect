import { ImageWithFallback } from "./ImageWithFallback";
import { getFeaturedCourses } from "../data/coursesData";
import { Link } from "react-router-dom";
export function FeaturedCourses() {
  const courses = getFeaturedCourses(3);

  return (
    <section className="py-24 bg-[#BABBB1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-5xl lg:text-6xl text-[#424658] mb-16 text-center">
          Cursos destacados
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              /* 1. flex flex-col y h-full hace que todas las tarjetas midan lo mismo */
              className="flex flex-col h-full bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Contenedor de Imagen (Altura fija) */}
              <div className="relative h-64 shrink-0">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 px-4 py-2 bg-[#678973] text-white rounded-full text-sm font-medium">
                  {course.isLive ? "En vivo" : "Grabado"}
                </span>
              </div>

              {/* 2. Contenedor de contenido (flex-grow para ocupar el espacio sobrante) */}
              <div className="flex flex-col flex-grow p-6">
                {/* Título con altura mínima o truncado para mantener simetría */}
                <div className="flex-grow">
                  <h3 className="text-2xl text-[#424658] font-semibold line-clamp-2">
                    {course.title}
                  </h3>
                </div>

                {/* Precio y Botón (Siempre al final gracias al flex-grow de arriba) */}
                <div className="mt-6 space-y-4">
                  <p className="text-3xl font-bold text-[#C56B62]">
                    ${course.price}
                  </p>

                  <Link
                    to={`/cursos/${course.id}`}
                    className="flex items-center justify-center w-full py-4 px-3 bg-[#DEA785] text-white rounded-2xl hover:bg-[#C79576] transition-colors text-center font-medium"
                  >
                    Ver curso
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/cursos"
            className="inline-block px-10 py-4 bg-[#C56B62] text-white rounded-full hover:bg-[#D9A69F] transition-colors text-lg"
          >
            Ver más
          </Link>
        </div>
      </div>
    </section>
  );
}
