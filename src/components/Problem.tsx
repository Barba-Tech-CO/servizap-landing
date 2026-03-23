import { AlertTriangle, Camera, Brain, MapPin, Receipt } from 'lucide-react';

const PAIN_POINTS = [
  {
    icon: AlertTriangle,
    text: 'Cliente manda mensagem e você esquece de responder',
  },
  {
    icon: Camera,
    text: 'Fotos de equipamentos com defeito perdidas na galeria do celular',
  },
  {
    icon: Brain,
    text: 'Agenda de serviços controlada de cabeça ou no papel',
  },
  {
    icon: MapPin,
    text: 'Técnico chega no endereço errado porque a informação veio por áudio',
  },
  {
    icon: Receipt,
    text: 'Fechamento do mês: caça ao tesouro nas conversas pra saber o que cobrar',
  },
];

export function Problem() {
  return (
    <section id="problema" className="bg-white py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="text-center text-2xl font-bold text-gray-900 md:text-4xl">
          Você perde clientes no WhatsApp?
        </h2>

        <blockquote className="mx-auto mt-8 max-w-2xl rounded-2xl bg-gray-50 p-6 text-gray-600 italic border-l-4 border-whatsapp">
          Todo dia é a mesma história: o cliente manda foto do ar-condicionado com defeito no
          WhatsApp, pede orçamento, e a mensagem se perde no meio de 47 conversas. Quando você
          lembra, já perdeu o serviço.
        </blockquote>

        <p className="mt-10 text-center text-lg font-semibold text-gray-800">
          Isso acontece com você?
        </p>

        <ul className="mt-6 grid gap-4 md:grid-cols-2">
          {PAIN_POINTS.map((point) => (
            <li
              key={point.text}
              className="flex items-start gap-3 rounded-xl bg-red-50/50 p-4 border border-red-100"
            >
              <point.icon size={20} className="mt-0.5 shrink-0 text-red-400" />
              <span className="text-gray-700">{point.text}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl bg-gradient-to-r from-red-50 to-orange-50 p-6 text-center border border-red-100">
          <p className="text-lg text-gray-800">
            <strong>Resultado:</strong> Você perde{' '}
            <span className="text-red-600 font-bold">R$ 2.000-5.000/mês</span> em serviços
            esquecidos, reagendamentos e cobranças perdidas.
          </p>
        </div>
      </div>
    </section>
  );
}
