import { useState, useEffect } from "react";
import { Search, Filter } from "lucide-react";
import { CourseCard } from "../components/CourseCard";
import { Newsletter } from "../components/Newsletter";
import { Footer } from "../components/Footer";
import { filterCourses, coursesData } from "../data/coursesData";

export function CoursesPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [typeFilter, setTypeFilter] = useState("all");
  const [levelFilter, setLevelFilter] = useState("all");
  const [filteredCourses, setFilteredCourses] = useState(coursesData);

  useEffect(() => {
    const results = filterCourses({
      search: searchTerm,
      type: typeFilter,
      level: levelFilter,
    });
    setFilteredCourses(results);
  }, [searchTerm, typeFilter, levelFilter]);

  return (
    <div className="min-h-screen bg-[#F0DAD5]">
      {/* Hero Section */}
      <section className="bg-[#424658] text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-3xl">
            <h1 className="text-5xl lg:text-6xl mb-6">Cursos de Astrología</h1>
            <p className="text-xl text-[#BABBB1]">
              Explora tu interior a través de la astrología moderna. Cursos
              diseñados para acompañarte en tu proceso de autoconocimiento y
              crecimiento personal.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="bg-white border-b border-[#BABBB1] sticky top-0 z-40 shadow-md">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-6">
          <div className="flex flex-col md:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1 w-full">
              <Search
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6C739C]"
                size={20}
              />
              <input
                type="text"
                placeholder="Buscar cursos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border-2 border-[#BABBB1] rounded-full focus:outline-none focus:border-[#C56B62] text-[#424658]"
              />
            </div>

            {/* Type Filter */}
            <div className="flex items-center gap-2 w-full md:w-auto">
              <Filter size={20} className="text-[#6C739C]" />
              <select
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="flex-1 md:flex-initial px-4 py-3 border-2 border-[#BABBB1] rounded-full focus:outline-none focus:border-[#C56B62] text-[#424658] bg-white cursor-pointer"
              >
                <option value="all">Todos los cursos</option>
                <option value="live">En vivo</option>
                <option value="recorded">Grabados</option>
              </select>
            </div>

            {/* Level Filter */}
            <div className="w-full md:w-auto">
              <select
                value={levelFilter}
                onChange={(e) => setLevelFilter(e.target.value)}
                className="w-full px-4 py-3 border-2 border-[#BABBB1] rounded-full focus:outline-none focus:border-[#C56B62] text-[#424658] bg-white cursor-pointer"
              >
                <option value="all">Todos los niveles</option>
                <option value="principiante">Principiante</option>
                <option value="intermedio">Intermedio</option>
                <option value="avanzado">Avanzado</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {filteredCourses.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-2xl text-[#6C739C]">
                No se encontraron cursos con estos filtros.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setTypeFilter("all");
                  setLevelFilter("all");
                }}
                className="mt-6 px-8 py-3 bg-[#C56B62] text-white rounded-full hover:bg-[#D9A69F] transition-colors"
              >
                Limpiar filtros
              </button>
            </div>
          ) : (
            <>
              <div className="mb-8">
                <p className="text-lg text-[#6C739C]">
                  Mostrando {filteredCourses.length}{" "}
                  {filteredCourses.length === 1 ? "curso" : "cursos"}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
}
