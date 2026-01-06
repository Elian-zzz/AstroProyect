import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./pages/HomePage";
import { CoursesPage } from "./pages/CoursesPage";
import { CourseDetailPage } from "./pages/CourseDetailPage";
import { NotFound } from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cursos" element={<CoursesPage />} />
        <Route path="/cursos/:id" element={<CourseDetailPage />} />
        <Route
          path="/consultas"
          element={
            <div className="min-h-screen flex items-center justify-center bg-[#F0DAD5]">
              <h1 className="text-4xl text-[#424658]">
                Página de Consultas - Próximamente
              </h1>
            </div>
          }
        />
        <Route
          path="/sobre-mi"
          element={
            <div className="min-h-screen flex items-center justify-center bg-[#F0DAD5]">
              <h1 className="text-4xl text-[#424658]">
                Sobre Mí - Próximamente
              </h1>
            </div>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
