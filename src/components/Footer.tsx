import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <span className="text-2xl font-bold">SIASIS</span>
            </div>
            <p className="text-gray-400">
              Sistema Integral de Asistencia y Seguimiento Institucional
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Producto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-purple-400 transition">
                  Características
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400 transition">
                  Precios
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400 transition">
                  Casos de Éxito
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Recursos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-purple-400 transition">
                  Documentación
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400 transition">
                  Soporte
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-purple-400 transition">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Imperial, Cañete, Perú</li>
              <li>contacto@siasis.edu.pe</li>
              <li>+51 987 654 321</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>
            &copy; 2024 SIASIS - Sistema Integral de Asistencia y Seguimiento Institucional.
            Desarrollado por{" "}
            <Link href="#" className="text-purple-400 hover:text-purple-300">
              UNDC
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
