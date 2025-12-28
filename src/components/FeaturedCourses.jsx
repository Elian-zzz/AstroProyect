import { ImageWithFallback } from "./ImageWithFallback";

const courses = [
  {
    id: 1,
    title: "Curso de Tarot",
    image:
      "https://images.unsplash.com/photo-1600429753199-5376c2738737?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YXJvdCUyMGNhcmRzJTIwc3Bpcml0dWFsfGVufDF8fHx8MTc2NjAzNzIyOHww&ixlib=rb-4.1.0&q=80&w=1080",
    type: "Grabado",
    price: "$8,500",
  },
  {
    id: 2,
    title: "Astrología 1",
    image:
      "https://images.unsplash.com/photo-1630236604110-6cdb022470ce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Ryb2xvZ3klMjBjb25zdGVsbGF0aW9uJTIwc3RhcnN8ZW58MXx8fHwxNzY2MDg5NjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    type: "En vivo",
    price: "$12,000",
  },
  {
    id: 3,
    title: "Astrología y Emociones",
    image:
      "https://images.unsplash.com/photo-1762857995413-4f8f827a737a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpdGF0aW9uJTIwd2VsbG5lc3MlMjBlbW90aW9uYWx8ZW58MXx8fHwxNzY2MDg5NjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080",
    type: "Grabado",
    price: "$9,500",
  },
];

export function FeaturedCourses() {
  return (
    <section className="py-24 bg-[#BABBB1]">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl lg:text-5xl text-[#424658] mb-16 text-center">
          Cursos destacados
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div
              key={course.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
                <span className="absolute top-4 right-4 px-4 py-2 bg-[#678973] text-white rounded-full text-sm">
                  {course.type}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-2xl text-[#424658]">
                  {course.title}
                </h3>
                <p className="text-3xl text-[#C56B62]">
                  {course.price}
                </p>
                <button className="w-full py-3 bg-[#DEA785] text-white rounded-full hover:bg-[#C79576] transition-colors">
                  Ver curso
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
