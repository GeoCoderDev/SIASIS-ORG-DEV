import Link from "next/link";

export default function HeroSection() {
  return (
    <section id="inicio" className="hero-gradient pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Control de Asistencia<br />
          <span className="text-purple-200">Inteligente y Eficiente</span>
        </h1>
        <p className="text-xl md:text-2xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
          Sistema integral para la gestión de asistencia escolar con geolocalización,
          notificaciones automáticas y reportes en tiempo real para instituciones educativas.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="#contacto" 
            className="btn-primary px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg inline-block"
          >
            Solicitar Demo
          </Link>
          <Link 
            href="#caracteristicas" 
            className="bg-white px-8 py-4 rounded-full text-purple-600 font-semibold text-lg hover:shadow-lg transition inline-block"
          >
            Conocer Más
          </Link>
        </div>
      </div>
    </section>
  );
}
