import { useState, type FormEvent } from 'react';
import { Send, Loader2, CheckCircle } from 'lucide-react';
import { isValidWhatsApp, formatWhatsApp } from '../lib/validation';
import { trackEvent } from '../lib/analytics';

const SERVICE_OPTIONS = [
  'Climatização',
  'Hidráulica',
  'Elétrica',
  'Limpeza',
  'Manutenção Predial',
  'Outro',
];

const TEAM_SIZE_OPTIONS = ['1', '2-5', '6-10', '10+'];

interface FormData {
  name: string;
  whatsapp: string;
  serviceType: string;
  teamSize: string;
}

interface FormErrors {
  name?: string;
  whatsapp?: string;
  serviceType?: string;
  teamSize?: string;
}

function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};
  if (!data.name.trim()) errors.name = 'Nome é obrigatório';
  if (!data.whatsapp.trim()) errors.whatsapp = 'WhatsApp é obrigatório';
  else if (!isValidWhatsApp(data.whatsapp)) errors.whatsapp = 'Número inválido (inclua o DDD)';
  if (!data.serviceType) errors.serviceType = 'Selecione o tipo de serviço';
  if (!data.teamSize) errors.teamSize = 'Selecione o tamanho da equipe';
  return errors;
}

export function WaitlistForm({ compact = false }: { compact?: boolean }) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    whatsapp: '',
    serviceType: '',
    teamSize: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function handleChange(field: keyof FormData, value: string) {
    const newData = {
      ...formData,
      [field]: field === 'whatsapp' ? formatWhatsApp(value) : value,
    };
    setFormData(newData);
    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const formErrors = validate(formData);
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setSubmitting(true);
    try {
      // Submit to Google Sheets via Google Forms or similar
      // For now, simulate submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      trackEvent({
        name: 'form_submit',
        properties: {
          serviceType: formData.serviceType,
          teamSize: formData.teamSize,
        },
      });
      setSubmitted(true);
    } catch {
      setErrors({ name: 'Erro ao enviar. Tente novamente.' });
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-2xl bg-brand-50 p-8 text-center border border-brand-200">
        <CheckCircle size={48} className="mx-auto text-whatsapp" />
        <h3 className="mt-4 text-xl font-bold text-gray-900">Você está na lista!</h3>
        <p className="mt-2 text-gray-600">
          Entraremos em contato pelo WhatsApp quando sua vaga estiver disponível.
        </p>
      </div>
    );
  }

  const inputClass =
    'w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-gray-900 placeholder:text-gray-400 focus:border-whatsapp focus:outline-none focus:ring-2 focus:ring-whatsapp/20 transition-colors';
  const errorClass = 'mt-1 text-sm text-red-500';

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div>
        <input
          type="text"
          placeholder="Seu nome"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className={inputClass}
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className={errorClass}>{errors.name}</p>}
      </div>

      <div>
        <input
          type="tel"
          placeholder="WhatsApp com DDD — (11) 99999-9999"
          value={formData.whatsapp}
          onChange={(e) => handleChange('whatsapp', e.target.value)}
          className={inputClass}
          aria-invalid={!!errors.whatsapp}
        />
        {errors.whatsapp && <p className={errorClass}>{errors.whatsapp}</p>}
      </div>

      <div>
        <select
          value={formData.serviceType}
          onChange={(e) => handleChange('serviceType', e.target.value)}
          className={`${inputClass} ${!formData.serviceType ? 'text-gray-400' : ''}`}
          aria-invalid={!!errors.serviceType}
        >
          <option value="" disabled>
            Tipo de serviço
          </option>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        {errors.serviceType && <p className={errorClass}>{errors.serviceType}</p>}
      </div>

      {!compact && (
        <fieldset>
          <legend className="mb-2 text-sm font-medium text-gray-700">
            Quantos técnicos na equipe?
          </legend>
          <div className="flex gap-3 flex-wrap">
            {TEAM_SIZE_OPTIONS.map((size) => (
              <label
                key={size}
                className={`cursor-pointer rounded-xl border px-4 py-2.5 text-sm font-medium transition-colors ${
                  formData.teamSize === size
                    ? 'border-whatsapp bg-whatsapp/10 text-brand-800'
                    : 'border-gray-200 text-gray-600 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="teamSize"
                  value={size}
                  checked={formData.teamSize === size}
                  onChange={(e) => handleChange('teamSize', e.target.value)}
                  className="sr-only"
                />
                {size}
              </label>
            ))}
          </div>
          {errors.teamSize && <p className={errorClass}>{errors.teamSize}</p>}
        </fieldset>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full rounded-xl bg-whatsapp px-6 py-4 text-lg font-bold text-white shadow-lg shadow-whatsapp/30 hover:bg-whatsapp-dark transition-all disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {submitting ? (
          <Loader2 size={20} className="animate-spin" />
        ) : (
          <Send size={20} />
        )}
        {submitting ? 'Enviando...' : 'Entrar na lista de espera'}
      </button>
    </form>
  );
}
