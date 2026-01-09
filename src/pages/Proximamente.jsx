import { Link } from "react-router-dom";
import { Footer } from "../components/Footer";
export function Proximamente({ children }) {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-[#F0DAD5]">
        <div className="text-center p-6">
          <div className="min-h-screen flex items-center justify-center bg-[#F0DAD5]">
            <h1 className="text-4xl text-[#424658]">
              {children} - Próximamente
            </h1>
          </div>
          <Link
            to="/"
            className="px-6 py-3 bg-[#C56B62] text-white rounded-full hover:bg-[#D9A69F] transition-colors"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}
