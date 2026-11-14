import { useRef, useState } from "react";
import { CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const regions = [
  "Abdômen",
  "Flancos (Pneuzinhos)",
  "Costas",
  "Braços",
  "Coxas (Interna/Externa)",
  "Papada",
  "Culote",
  "Outro",
];

const scheduleOptions = [
  "Manhã (8h - 12h)",
  "Tarde (12h - 18h)",
  "Noite (18h - 21h)",
  "Flexível",
];

const ContactForm = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    nome: "",
    idade: "",
    telefone: "",
    regiao: "",
    historico: "",
    comorbidades: "",
    objetivo: "",
    horario: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      const whatsappMessage = encodeURIComponent(
        `Olá! Acabei de preencher minha pré-avaliação para o FFSculpt com a Dra. Isabella. Quero agendar minha sessão.\n\nNome: ${formData.nome}\nIdade: ${formData.idade}\nTelefone: ${formData.telefone}\nRegião: ${formData.regiao}\nObjetivo: ${formData.objetivo}`
      );
      const whatsappUrl = `https://wa.me/5562996093076?text=${whatsappMessage}`;

      setIsSubmitting(false);
      setIsSubmitted(true);

      toast({
        title: "Pré-avaliação enviada!",
        description: "Redirecionando para o WhatsApp...",
      });

      setTimeout(() => {
        if (typeof (window as any).fbq === "function") {
          (window as any).fbq("track", "Contact");
        }
        window.open(whatsappUrl, "_blank");
      }, 1500);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <section id="pre-avaliacao" ref={ref} className="section-padding bg-cream">
        <div className="container-narrow">
          <div className="text-center py-16">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ background: "var(--rose-light-hex)" }}>
              <CheckCircle className="w-10 h-10" style={{ color: "var(--rose-hex)" }} />
            </div>
            <h2 className="heading-section title-sans text-[clamp(1.5rem,4.4vw,2.1rem)] mb-4">Pré-avaliação Enviada!</h2>
            <p className="text-elegant max-w-md mx-auto">
              Obrigada pelo seu interesse! Você será redirecionada para o WhatsApp
              para finalizar o agendamento com nossa equipe.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="pre-avaliacao" ref={ref} className="section-padding bg-cream">
      <div className="container-narrow">
        <div className="max-w-2xl mb-10">
          <span className="eyebrow">Próximo Passo</span>
          <h2 className="heading-section title-sans text-[clamp(1.5rem,4.4vw,2.1rem)] mt-3">
            Formulário de <em>Pré-Avaliação</em>
          </h2>
          <div className="hairline" />
          <p className="text-elegant">
            Preencha o formulário abaixo para que possamos entender seu caso e
            preparar uma avaliação personalizada. Após o envio, você será
            direcionada ao WhatsApp para agendar sua consulta.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-warm-white border border-brand"
          style={{ borderRadius: 16, padding: "32px 24px" }}
        >
          <div className="grid md:grid-cols-2 gap-6">
            {/* Nome */}
            <div>
              <label htmlFor="nome" className="field-label">
                Nome Completo <span className="field-required">*</span>
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                required
                value={formData.nome}
                onChange={handleChange}
                className="field-input"
                placeholder="Seu nome completo"
              />
            </div>

            {/* Idade */}
            <div>
              <label htmlFor="idade" className="field-label">
                Idade <span className="field-required">*</span>
              </label>
              <input
                type="number"
                id="idade"
                name="idade"
                required
                min="18"
                max="100"
                value={formData.idade}
                onChange={handleChange}
                className="field-input"
                placeholder="Sua idade"
              />
            </div>

            {/* Telefone */}
            <div>
              <label htmlFor="telefone" className="field-label">
                Telefone/WhatsApp <span className="field-required">*</span>
              </label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                required
                value={formData.telefone}
                onChange={handleChange}
                className="field-input"
                placeholder="(62) 99999-9999"
              />
            </div>

            {/* Região */}
            <div>
              <label htmlFor="regiao" className="field-label">
                Região a Tratar <span className="field-required">*</span>
              </label>
              <select
                id="regiao"
                name="regiao"
                required
                value={formData.regiao}
                onChange={handleChange}
                className="field-input"
              >
                <option value="">Selecione uma região</option>
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
            </div>

            {/* Histórico */}
            <div>
              <label htmlFor="historico" className="field-label">
                Já fez criolipólise antes?
              </label>
              <select
                id="historico"
                name="historico"
                value={formData.historico}
                onChange={handleChange}
                className="field-input"
              >
                <option value="">Selecione</option>
                <option value="nao">Nunca fiz</option>
                <option value="sim-uma">Sim, uma vez</option>
                <option value="sim-varias">Sim, mais de uma vez</option>
              </select>
            </div>

            {/* Horário */}
            <div>
              <label htmlFor="horario" className="field-label">
                Melhor Horário <span className="field-required">*</span>
              </label>
              <select
                id="horario"
                name="horario"
                required
                value={formData.horario}
                onChange={handleChange}
                className="field-input"
              >
                <option value="">Selecione um horário</option>
                {scheduleOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            {/* Comorbidades */}
            <div className="md:col-span-2">
              <label htmlFor="comorbidades" className="field-label">
                Possui alguma condição de saúde relevante?
              </label>
              <input
                type="text"
                id="comorbidades"
                name="comorbidades"
                value={formData.comorbidades}
                onChange={handleChange}
                className="field-input"
                placeholder="Ex: diabetes, problemas circulatórios, etc."
              />
            </div>

            {/* Objetivo */}
            <div className="md:col-span-2">
              <label htmlFor="objetivo" className="field-label">
                Qual seu principal objetivo? <span className="field-required">*</span>
              </label>
              <textarea
                id="objetivo"
                name="objetivo"
                required
                rows={3}
                value={formData.objetivo}
                onChange={handleChange}
                className="field-input resize-none"
                placeholder="Descreva brevemente o que você espera alcançar com o tratamento..."
              />
            </div>
          </div>

          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary cta-gradient w-full justify-center"
              style={{ width: "100%" }}
            >
              {isSubmitting ? (
                <span>Enviando…</span>
              ) : (
                <span>Enviar Pré-Avaliação</span>
              )}
            </button>
            <p style={{ fontSize: "0.72rem", color: "var(--text-tertiary-hex)", marginTop: 14, textAlign: "center" }}>
              Ao enviar, você será redirecionada ao WhatsApp para finalizar o agendamento.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
