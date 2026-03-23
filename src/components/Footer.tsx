export function Footer() {
  return (
    <footer className="bg-gray-900 py-8">
      <div className="mx-auto max-w-5xl px-4 text-center">
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} ServiZap. Todos os direitos reservados.
        </p>
        <p className="mt-2 text-xs text-gray-500">
          ServiZap &mdash; Organização automática de serviços pelo WhatsApp.
        </p>
      </div>
    </footer>
  );
}
