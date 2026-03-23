import { Shield, Ban } from 'lucide-react';
import { WaitlistForm } from './WaitlistForm';

export function FooterCta() {
  return (
    <section id="lista-espera" className="bg-gradient-to-br from-brand-800 to-brand-900 py-16 md:py-24">
      <div className="mx-auto max-w-xl px-4">
        <h2 className="text-center text-2xl font-bold text-white md:text-4xl">
          Pare de perder clientes no WhatsApp.
        </h2>
        <p className="mt-4 text-center text-brand-200">
          Entre na lista de espera e seja um dos primeiros a testar.
        </p>

        <div className="mt-10 rounded-2xl bg-white p-6 md:p-8 shadow-xl">
          <WaitlistForm />
        </div>

        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
          <span className="inline-flex items-center gap-1.5 text-sm text-brand-200">
            <Shield size={14} />
            Seus dados estão seguros (LGPD)
          </span>
          <span className="inline-flex items-center gap-1.5 text-sm text-brand-200">
            <Ban size={14} />
            Sem spam. Prometemos.
          </span>
        </div>
      </div>
    </section>
  );
}
