import { ImageWithFallback } from "./ImageWithFallback";
import { Clock, Users } from "lucide-react";

export function CourseCard({ course, navigateTo }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
      {/* Imagen */}
      <div className="relative h-48 overflow-hidden">
        <ImageWithFallback
          src={course.image}
          alt={course.title}
          className="w-full h-full object-cover"
        />
        {course.isLive && (
          <span className="absolute top-3 right-3 bg-[#C56B62] text-white px-3 py-1 rounded-full text-sm">
            En vivo
          </span>
        )}
        {!course.isLive && (
          <span className="absolute top-3 right-3 bg-[#678973] text-white px-3 py-1 rounded-full text-sm">
            Grabado
          </span>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6 space-y-4">
        <h3 className="text-xl text-[#424658] line-clamp-1">{course.title}</h3>

        <p className="text-[#6C739C] text-sm line-clamp-2 min-h-[2.5rem]">
          {course.description}
        </p>

        {/* Meta información */}
        <div className="flex items-center gap-4 text-sm text-[#6C739C]">
          <div className="flex items-center gap-1">
            <Clock size={16} />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} />
            <span>{course.level}</span>
          </div>
        </div>

        {/* Precio y botones */}
        <div className="pt-4 border-t border-[#BABBB1] flex items-center justify-between">
          <div>
            <p className="text-2xl text-[#424658]">${course.price}</p>
            {course.oldPrice && (
              <p className="text-sm text-[#6C739C] line-through">
                ${course.oldPrice}
              </p>
            )}
          </div>

          <button
            onClick={() => navigateTo("curso-detalle", course.id)}
            className="px-6 py-2 bg-[#C56B62] text-white rounded-full hover:bg-[#D9A69F] transition-colors text-sm"
          >
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
}
