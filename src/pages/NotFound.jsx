import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F0DAD5]">
      <div className="text-center p-6">
        <h1 className="text-6xl font-bold text-[#424658] mb-4">404</h1>
        <p className="text-xl text-[#6C739C] mb-6">Página no encontrada</p>
        <Link
          to="/"
          className="px-6 py-3 bg-[#C56B62] text-white rounded-full hover:bg-[#D9A69F] transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
}
