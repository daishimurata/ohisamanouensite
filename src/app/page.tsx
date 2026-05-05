import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { NewsList } from '@/components/NewsList';
import { NouenInstagram } from '@/components/NouenInstagram';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { Company } from '@/components/Company';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <NewsList />
        <Services />
        <NouenInstagram />
        <Testimonials />
        <FAQ />
        <Company />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
