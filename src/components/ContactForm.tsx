"use client";

import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    cargo: "",
    email: "",
    telefono: "",
    institucion: "",
    mensaje: "",
    acepto: false
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.");
    setFormData({
      nombre: "",
      cargo: "",
      email: "",
      telefono: "",
      institucion: "",
      mensaje: "",
      acepto: false
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section id="contacto" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto section-fade">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            ¿Listo para Transformar tu Institución?
          </h2>
          <p className="text-xl text-gray-600">
            Contáctanos y descubre cómo SIASIS puede mejorar la gestión de
            asistencia en tu institución educativa.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-50 p-8 md:p-12 rounded-2xl shadow-xl">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Nombre Completo *
              </label>
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition"
                placeholder="Juan Pérez"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Cargo *
              </label>
              <input
                type="text"
                name="cargo"
                value={formData.cargo}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition"
                placeholder="Director(a)"
                required
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Correo Electrónico *
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition"
                placeholder="correo@institucion.edu.pe"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Teléfono *
              </label>
              <input
                type="tel"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition"
                placeholder="+51 987 654 321"
                required
              />
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Institución Educativa *
            </label>
            <input
              type="text"
              name="institucion"
              value={formData.institucion}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition"
              placeholder="I.E. Nombre de la Institución"
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 font-medium mb-2">
              Mensaje *
            </label>
            <textarea
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-purple-600 focus:ring-2 focus:ring-purple-200 outline-none transition resize-none"
              placeholder="Cuéntanos sobre tu institución y cómo podemos ayudarte..."
              required
            />
          </div>

          <div className="mb-6">
            <label className="flex items-start">
              <input
                type="checkbox"
                name="acepto"
                checked={formData.acepto}
                onChange={handleChange}
                className="mt-1 mr-3"
                required
              />
              <span className="text-sm text-gray-600">
                Acepto que SIASIS se ponga en contacto conmigo para proporcionar
                información sobre el sistema y agendar una demostración.
              </span>
            </label>
          </div>

          <button
            type="submit"
            className="w-full btn-primary px-8 py-4 rounded-lg text-white font-semibold text-lg shadow-lg"
          >
            Solicitar Información
          </button>
        </form>
      </div>
    </section>
  );
}
