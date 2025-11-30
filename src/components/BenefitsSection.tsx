interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="feature-card bg-white p-8 rounded-xl shadow-lg">
      <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 section-fade">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Beneficios Comprobados
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Instituciones que implementaron SIASIS han experimentado mejoras significativas
            en sus procesos administrativos y seguimiento estudiantil.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 section-fade">
          <BenefitCard
            icon={
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            }
            title="Reducción del Ausentismo"
            description="Disminución del ausentismo docente de 16% a 5% mediante seguimiento automatizado y notificaciones oportunas."
          />

          <BenefitCard
            icon={
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            }
            title="Ahorro de Tiempo"
            description="Reduce hasta 80% el tiempo dedicado a procesos administrativos manuales y generación de reportes."
          />

          <BenefitCard
            icon={
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            }
            title="Mayor Precisión"
            description="Elimina errores humanos en el registro de asistencia con verificación automática y geolocalización precisa."
          />
        </div>
      </div>
    </section>
  );
}
