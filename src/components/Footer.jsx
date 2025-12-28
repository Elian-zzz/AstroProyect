import { Instagram, Facebook, Mail, Youtube } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#424658] text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-2xl mb-6">Enlaces rápidos</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-[#BABBB1] hover:text-[#DEA785] transition-colors">
                  Cursos
                </a>
              </li>
              <li>
                <a href="#" className="text-[#BABBB1] hover:text-[#DEA785] transition-colors">
                  Consultas
                </a>
              </li>
              <li>
                <a href="#" className="text-[#BABBB1] hover:text-[#DEA785] transition-colors">
                  Sobre Vivi
                </a>
              </li>
              <li>
                <a href="#" className="text-[#BABBB1] hover:text-[#DEA785] transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Redes sociales */}
          <div>
            <h3 className="text-2xl mb-6">Conectá conmigo</h3>
            <div className="flex gap-4">
              <a
                href="#"
                className="p-3 bg-[#6C739C] rounded-full hover:bg-[#678973] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 bg-[#6C739C] rounded-full hover:bg-[#678973] transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="p-3 bg-[#6C739C] rounded-full hover:bg-[#678973] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Medios de pago */}
          <div>
            <h3 className="text-2xl mb-6">Medios de pago</h3>
            <p className="text-[#BABBB1] mb-4">Aceptamos:</p>
            <div className="flex flex-wrap gap-3">
              <div className="px-4 py-2 bg-[#6C739C] rounded-lg text-sm">
                Visa
              </div>
              <div className="px-4 py-2 bg-[#6C739C] rounded-lg text-sm">
                Mastercard
              </div>
              <div className="px-4 py-2 bg-[#6C739C] rounded-lg text-sm">
                MercadoPago
              </div>
              <div className="px-4 py-2 bg-[#6C739C] rounded-lg text-sm">
                Transferencia
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-[#6C739C] pt-8 text-center text-[#BABBB1]">
          <p>&copy; 2024 Vivi Astrología. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
