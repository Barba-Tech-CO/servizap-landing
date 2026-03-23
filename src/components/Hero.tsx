import { MessageCircle } from 'lucide-react';
import { trackEvent } from '../lib/analytics';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-brand-100 pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto max-w-4xl px-4 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-whatsapp/10 px-4 py-2 text-sm font-medium text-brand-800">
          <MessageCircle size={16} className="text-whatsapp" />
          Organização automática pelo WhatsApp
        </div>

        <h1 className="text-3xl font-extrabold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
          Seus clientes já pedem serviço pelo WhatsApp.{' '}
          <span className="text-whatsapp">Agora você pode organizar tudo automaticamente.</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600 md:text-xl">
          Transforme mensagens do WhatsApp em ordens de serviço organizadas. Sem app novo, sem
          planilha, sem perder cliente.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#lista-espera"
            onClick={() =>
              trackEvent({ name: 'cta_click', properties: { location: 'hero' } })
            }
            className="inline-flex items-center gap-2 rounded-full bg-whatsapp px-8 py-4 text-lg font-bold text-white shadow-lg shadow-whatsapp/30 hover:bg-whatsapp-dark transition-all hover:shadow-xl"
          >
            <MessageCircle size={20} />
            Entrar na lista de espera
          </a>
          <a
            href="#solucao"
            className="text-brand-700 font-semibold hover:text-brand-800 transition-colors"
          >
            Como funciona →
          </a>
        </div>

        <p className="mt-6 text-sm text-gray-400">
          Vagas limitadas para beta fechado. Sem spam.
        </p>
      </div>

      <div className="absolute -bottom-1 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
