import { MessageSquare, Sparkles, CheckCircle, Bell, Users, Zap } from 'lucide-react';

const STEPS = [
  {
    number: '1',
    icon: MessageSquare,
    title: 'Cliente manda mensagem no WhatsApp',
    description: 'Foto, áudio, texto — como sempre fez. Nada muda para o cliente.',
  },
  {
    number: '2',
    icon: Sparkles,
    title: 'Organização automática',
    description:
      'Extrai nome, endereço, tipo de serviço, urgência e cria uma ordem de serviço estruturada.',
  },
  {
    number: '3',
    icon: CheckCircle,
    title: 'Você gerencia e responde pelo WhatsApp',
    description:
      'Atribui técnico, envia confirmação ao cliente, acompanha status — tudo pelo WhatsApp.',
  },
];

const PILLARS = [
  {
    icon: Bell,
    title: 'Nunca mais perca um chamado',
    description:
      'Toda mensagem de cliente vira uma ordem de serviço rastreável. Se chegou no WhatsApp, está no sistema.',
  },
  {
    icon: Users,
    title: 'Seus clientes não precisam mudar nada',
    description:
      'Sem app novo pra baixar, sem link pra clicar, sem cadastro. O cliente continua mandando WhatsApp normalmente.',
  },
  {
    icon: Zap,
    title: 'Organize sem esforço',
    description:
      'A organização automática lê a mensagem, extrai os dados e organiza. Você só confirma e despacha o técnico.',
  },
];

export function Solution() {
  return (
    <section id="solucao" className="bg-brand-50/50 py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-2xl font-bold text-gray-900 md:text-4xl">
          O WhatsApp que você já usa.{' '}
          <span className="text-whatsapp">Agora com superpoderes.</span>
        </h2>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {STEPS.map((step) => (
            <div key={step.number} className="relative text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-whatsapp/10">
                <step.icon size={28} className="text-whatsapp" />
              </div>
              <div className="mb-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-whatsapp text-sm font-bold text-white">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{step.title}</h3>
              <p className="mt-2 text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="rounded-2xl bg-white p-6 shadow-sm border border-brand-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-brand-100">
                <pillar.icon size={24} className="text-brand-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900">{pillar.title}</h3>
              <p className="mt-2 text-gray-600">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
