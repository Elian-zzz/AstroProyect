import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";
export function Schedule() {
  const daysInMonth = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <section className="py-24 bg-[#F0DAD5]">
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        <div className="bg-white rounded-3xl p-12 shadow-lg">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Mini calendario */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-8 h-8 text-[#C56B62]" />
                <h2 className="text-3xl text-[#424658]">
                  Agenda Julio abierta
                </h2>
              </div>

              <div className="grid grid-cols-7 gap-2 mb-8" id="calendario">
                {["L", "M", "M", "J", "V", "S", "D"].map((day, i) => (
                  <div
                    key={i}
                    className="text-center text-[#6C739C] text-sm py-2"
                  >
                    {day}
                  </div>
                ))}
                {daysInMonth.map((day) => (
                  <div
                    key={day}
                    className={`text-center py-3 rounded-lg text-[#424658] ${
                      day % 7 === 0 || day % 5 === 0
                        ? "bg-[#678973] text-white"
                        : "hover:bg-[#BABBB1] cursor-pointer"
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex-1 space-y-6">
              <p className="text-xl text-[#6C739C] mb-8">
                Espacios disponibles para tu consulta personal
              </p>
              <button className="w-full py-4 px-8 bg-[#C56B62] text-white rounded-full hover:bg-[#D9A69F] transition-colors">
                Agendar tu revolución solar
              </button>
              <button className="w-full py-4 px-8 bg-transparent border-2 border-[#678973] text-[#678973] rounded-full hover:bg-[#678973] hover:text-white transition-colors">
                <Link to="/consultas">Ver todas las consultas</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
