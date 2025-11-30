import Navbar from "@/src/components/Navbar";
import HeroSection from "@/src/components/HeroSection";
import FeatureSection from "@/src/components/FeatureSection";
import BenefitsSection from "@/src/components/BenefitsSection";
import TestimonialSection from "@/src/components/TestimonialSection";
import ContactForm from "@/src/components/ContactForm";
import Footer from "@/src/components/Footer";
import ScrollAnimationProvider from "@/src/components/ScrollAnimationProvider";

export default function Home() {
  return (
    <ScrollAnimationProvider>
      <Navbar />
      <HeroSection />

      <FeatureSection
        title="Control en Tiempo Real"
        description="Monitorea la asistencia de estudiantes y personal en tiempo real. Con geolocalización de alta precisión y verificación automática, garantiza registros exactos y confiables."
        features={[
          { text: "Geolocalización con precisión sub-5 metros" },
          { text: "Registro automático de entrada y salida" },
          { text: "Sincronización instantánea entre dispositivos" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800"
        imageAlt="Control de asistencia en tiempo real"
        imageOnLeft={true}
        bgColor="gray"
      />

      <FeatureSection
        title="Notificaciones Automáticas"
        description="Sistema inteligente de alertas por correo electrónico que notifica automáticamente a directivos y tutores sobre inasistencias consecutivas, tardanzas recurrentes y situaciones que requieren atención inmediata."
        features={[
          { text: "Alertas automáticas por 3 faltas consecutivas" },
          { text: "Notificaciones a padres y directivos" },
          { text: "Reportes automáticos programables" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800"
        imageAlt="Notificaciones automáticas"
        imageOnLeft={false}
        bgColor="white"
      />

      <FeatureSection
        title="Reportes Inteligentes"
        description="Genera reportes detallados y estadísticas personalizadas con un solo clic. Visualiza tendencias, identifica patrones y toma decisiones informadas basadas en datos reales y actualizados."
        features={[
          { text: "Reportes mensuales y diarios automatizados" },
          { text: "Exportación en múltiples formatos (PDF, Excel)" },
          { text: "Dashboard con métricas en tiempo real" },
        ]}
        imageUrl="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800"
        imageAlt="Reportes y análisis avanzados"
        imageOnLeft={true}
        bgColor="gray"
      />

      <BenefitsSection />
      <TestimonialSection />
      <ContactForm />
      <Footer />
    </ScrollAnimationProvider>
  );
}
