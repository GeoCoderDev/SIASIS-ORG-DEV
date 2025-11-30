

export default function TestimonialSection() {
  return (
    <section className="py-24 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Diseñado para Instituciones Educativas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desarrollado específicamente para las necesidades de colegios
            e instituciones educativas en el Perú.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 section-fade">
          <div className="bg-white p-10 rounded-xl shadow-lg">
            <div className="mb-6">
              <svg className="w-12 h-12 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
              &ldquo;SIASIS ha transformado completamente nuestra gestión de asistencia.
              Lo que antes nos tomaba horas ahora se hace en minutos, y los padres
              están mucho más informados sobre la asistencia de sus hijos.&rdquo;
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                IE
              </div>
              <div>
                <p className="font-semibold text-gray-900">I.E. 20935 Asunción 8</p>
                <p className="text-gray-600">Imperial, Cañete</p>
              </div>
            </div>
          </div>

          <div className="image-container">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800"
              alt="Estudiantes en clase"
              width={800}
              height={600}
              className="w-full h-full object-cover rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
