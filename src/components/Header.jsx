import { Link2OffIcon, Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export function Header({ currentPage, navigateTo }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (page) => currentPage === page;

  const handleNavigation = (page) => {
    navigateTo(page);
    setIsMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-[#424658] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <NavLink
            to="/"
            className="text-2xl font-bold text-[#F0DAD5] hover:text-[#D9A69F] transition-colors"
          >
            Vivi Astrología
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className={`hover:text-[#D9A69F] transition-colors ${
                isActive("home") ? "text-[#DEA785] font-semibold" : ""
              }`}
            >
              Inicio
            </NavLink>
            <NavLink
              to="/cursos"
              className={`hover:text-[#D9A69F] transition-colors ${
                isActive("cursos") ? "text-[#DEA785] font-semibold" : ""
              }`}
            >
              Cursos
            </NavLink>
            <NavLink
              to="/consultas"
              className={`hover:text-[#D9A69F] transition-colors ${
                isActive("consultas") ? "text-[#DEA785] font-semibold" : ""
              }`}
            >
              Consultas
            </NavLink>
            <NavLink
              to="/sobre-mi"
              className={`hover:text-[#D9A69F] transition-colors ${
                isActive("sobre-mi") ? "text-[#DEA785] font-semibold" : ""
              }`}
            >
              Sobre Mí
            </NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[#6C739C]">
            <div className="flex flex-col gap-4">
              <NavLink
                to="/"
                className={`text-left hover:text-[#D9A69F] transition-colors ${
                  isActive("home") ? "text-[#DEA785] font-semibold" : ""
                }`}
              >
                Inicio
              </NavLink>
              <NavLink
                to="/cursos"
                className={`text-left hover:text-[#D9A69F] transition-colors ${
                  isActive("cursos") ? "text-[#DEA785] font-semibold" : ""
                }`}
              >
                Cursos
              </NavLink>
              <NavLink
                to="/consultas"
                className={`text-left hover:text-[#D9A69F] transition-colors ${
                  isActive("consultas") ? "text-[#DEA785] font-semibold" : ""
                }`}
              >
                Consultas
              </NavLink>
              <NavLink
                to="/sobre-mi"
                className={`text-left hover:text-[#D9A69F] transition-colors ${
                  isActive("sobre-mi") ? "text-[#DEA785] font-semibold" : ""
                }`}
              >
                Sobre Mí
              </NavLink>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
