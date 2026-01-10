import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { ScrollToTop } from "./components/ScrollToTop";
// import Header100 from "./components/header/Header100";
import { HomePage } from "./pages/HomePage";
import { CoursesPage } from "./pages/CoursesPage";
import { CourseDetailPage } from "./pages/CourseDetailPage";
import { NotFound } from "./pages/NotFound";
import { Proximamente } from "./pages/Proximamente";
import { UserDashboard } from "./pages/UserDashboard";
export default function App() {
  return (
    <>
      {/* <Header /> */}
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cursos" element={<CoursesPage />} />
        <Route path="/cursos/:id" element={<CourseDetailPage />} />
        <Route
          path="/consultas"
          element={<Proximamente children="Pagina de consultas" />}
        />
        <Route
          path="/sobre-mi"
          element={<Proximamente children="Sobre mi" />}
        />
        <Route path="/dashboard" element={<UserDashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
