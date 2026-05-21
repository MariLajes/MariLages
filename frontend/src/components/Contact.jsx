import { useState } from "react";
import { Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";
import { CONTACT, whatsappLink } from "@/lib/contact";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const msg = `Olá! Meu nome é ${formData.name}. Gostaria de solicitar um orçamento.\nTelefone: ${formData.phone}\nEmail: ${formData.email}\nMensagem: ${formData.message}`;
    window.open(whatsappLink(msg), "_blank");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section id="contato" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
            Entre em Contato
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Estamos prontos para atender suas necessidades. Solicite um orçamento ou tire suas dúvidas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-neutral-900">
              Informações de Contato
            </h3>

            <a
              href={`tel:${CONTACT.phoneRaw}`}
              data-testid="contact-phone-link"
              className="flex gap-4 group"
            >
              <div className="w-12 h-12 bg-orange-500/10 group-hover:bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                <Phone className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900">Telefone</p>
                <p className="text-neutral-600 group-hover:text-orange-600 transition-colors">
                  {CONTACT.phoneDisplay}
                </p>
              </div>
            </a>

            <a
              href={whatsappLink("Olá! Gostaria de mais informações sobre os produtos da Mari Lajes.")}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="contact-whatsapp-link"
              className="flex gap-4 group"
            >
              <div className="w-12 h-12 bg-green-600/10 group-hover:bg-green-600/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                <MessageCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900">WhatsApp</p>
                <p className="text-neutral-600 group-hover:text-green-700 transition-colors">
                  Conversar agora pelo WhatsApp
                </p>
              </div>
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              data-testid="contact-email-link"
              className="flex gap-4 group"
            >
              <div className="w-12 h-12 bg-orange-500/10 group-hover:bg-orange-500/20 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                <Mail className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900">Email</p>
                <p className="text-neutral-600 break-all group-hover:text-orange-600 transition-colors">
                  {CONTACT.email}
                </p>
              </div>
            </a>

            <div className="flex gap-4" data-testid="contact-hours">
              <div className="w-12 h-12 bg-orange-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-orange-600" />
              </div>
              <div>
                <p className="font-semibold text-neutral-900 mb-1">
                  Horário de Funcionamento
                </p>
                <ul className="space-y-1 text-neutral-600">
                  {CONTACT.hours.map((h) => (
                    <li key={h.label}>
                      <span className="font-medium text-neutral-700">
                        {h.label}:
                      </span>{" "}
                      {h.value}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-neutral-50 p-8 rounded-lg border border-neutral-200">
            <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
              <div>
                <label className="block text-sm font-medium text-neutral-800 mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  required
                  data-testid="form-name-input"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-800 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seu@email.com"
                  required
                  data-testid="form-email-input"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-800 mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(11) 98765-4321"
                  required
                  data-testid="form-phone-input"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-800 mb-2">
                  Mensagem
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Descreva sua necessidade..."
                  rows={4}
                  required
                  data-testid="form-message-input"
                  className="w-full px-3 py-2 border border-neutral-300 rounded-md bg-white text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>

              <button
                type="submit"
                data-testid="form-submit-btn"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-green-600 hover:bg-green-700 text-white font-semibold transition-colors"
              >
                Enviar via WhatsApp
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
