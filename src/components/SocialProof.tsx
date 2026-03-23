import { Snowflake, Droplets, Plug, MessageCircle, Clock, DollarSign } from 'lucide-react';

const SEGMENTS = [
  {
    icon: Snowflake,
    title: 'Climatização & Ar-Condicionado',
    quote:
      '"Recebo 15-20 pedidos de manutenção por dia pelo WhatsApp. Hoje anoto tudo no caderno."',
  },
  {
    icon: Droplets,
    title: 'Encanamento & Hidráulica',
    quote:
      '"Cliente manda foto do vazamento e pede urgência. Às vezes demoro 2 horas pra ver porque tô em outro serviço."',
  },
  {
    icon: Plug,
    title: 'Eletricista',
    quote:
      '"Minha esposa me ajuda respondendo o WhatsApp, mas ela não sabe diferenciar urgência de rotina."',
  },
];

const STATS = [
  {
    icon: MessageCircle,
    value: '95%',
    label: 'das empresas brasileiras usam WhatsApp para negócios',
  },
  {
    icon: Clock,
    value: '2h/dia',
    label: 'perdidas organizando informações de clientes',
  },
  {
    icon: DollarSign,
    value: 'R$ 0',
    label: 'de custo extra — funciona no WhatsApp que você já tem',
  },
];

export function SocialProof() {
  return (
    <section id="prova-social" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-4">
        <h2 className="text-center text-2xl font-bold text-gray-900 md:text-4xl">
          Feito para quem vive no WhatsApp
        </h2>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {SEGMENTS.map((seg) => (
            <div
              key={seg.title}
              className="rounded-2xl bg-gray-50 p-6 border border-gray-100"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-whatsapp/10">
                <seg.icon size={24} className="text-whatsapp" />
              </div>
              <h3 className="text-base font-semibold text-gray-900">{seg.title}</h3>
              <p className="mt-3 text-sm text-gray-600 italic">{seg.quote}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-brand-100">
                <stat.icon size={20} className="text-brand-600" />
              </div>
              <p className="text-3xl font-extrabold text-brand-700">{stat.value}</p>
              <p className="mt-1 text-sm text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
