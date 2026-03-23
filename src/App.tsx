import { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Solution } from './components/Solution';
import { SocialProof } from './components/SocialProof';
import { Faq } from './components/Faq';
import { FooterCta } from './components/FooterCta';
import { Footer } from './components/Footer';
import { trackEvent } from './lib/analytics';

export default function App() {
  useEffect(() => {
    trackEvent({ name: 'page_view', properties: { page: 'landing' } });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <SocialProof />
        <Faq />
        <FooterCta />
      </main>
      <Footer />
    </>
  );
}
