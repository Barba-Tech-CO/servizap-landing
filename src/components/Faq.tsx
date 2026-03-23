import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: 'Preciso trocar de número de WhatsApp?',
    answer: 'Não. O ServiZap funciona com o número que seus clientes já conhecem.',
  },
  {
    question: 'Meus clientes precisam instalar alguma coisa?',
    answer:
      'Não. Eles continuam mandando WhatsApp normalmente. A mágica acontece do seu lado.',
  },
  {
    question: 'Funciona com WhatsApp Business?',
    answer: 'Sim. Na verdade, funciona melhor com WhatsApp Business.',
  },
  {
    question: 'E se a organização automática errar a leitura da mensagem?',
    answer:
      'Você recebe uma notificação para revisar. Com o tempo, o sistema aprende com suas correções.',
  },
  {
    question: 'Posso usar para mais de um tipo de serviço?',
    answer:
      'Sim. Climatização, elétrica, hidráulica, limpeza, manutenção predial — qualquer serviço de campo.',
  },
  {
    question: 'Tem contrato de fidelidade?',
    answer: 'Não. Cancele quando quiser, sem multa.',
  },
];

function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100 last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-5 text-left"
        aria-expanded={open}
      >
        <span className="text-base font-semibold text-gray-900 pr-4">{question}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-gray-400 transition-transform duration-200 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-200 ${
          open ? 'max-h-40 pb-5' : 'max-h-0'
        }`}
      >
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>
  );
}

export function Faq() {
  return (
    <section id="faq" className="bg-brand-50/30 py-16 md:py-24">
      <div className="mx-auto max-w-2xl px-4">
        <h2 className="text-center text-2xl font-bold text-gray-900 md:text-4xl">
          Perguntas frequentes
        </h2>

        <div className="mt-10 rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
          {FAQ_ITEMS.map((item) => (
            <FaqItem key={item.question} question={item.question} answer={item.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}
