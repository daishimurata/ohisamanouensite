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
        <section style={{ maxWidth: '900px', margin: '60px auto', padding: '0 20px' }}>
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', backgroundColor: '#ffffff', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.08)', border: '1px solid #f0f0f0' }}>
            <div style={{ flex: '1 1 300px', minHeight: '250px', backgroundImage: 'url(/Photo/71765613-EB14-4E02-9458-56D819407225_1_105_c.jpeg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>
            <div style={{ flex: '2 1 400px', padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h2 style={{ color: '#333', margin: '0 0 16px 0', fontSize: '1.8rem', fontWeight: 'bold', letterSpacing: '0.05em' }}>
                🥔 2026年春じゃが 販売開始！
              </h2>
              <p style={{ margin: '0 0 24px 0', color: '#555', fontSize: '1.05rem', lineHeight: '1.7' }}>
                おひさま農園で大切に育てた、ホクホクで甘みのある「新じゃが」のオンライン販売を開始しました。土の香りと春の恵みをそのままお届けします。<br /><span style={{ color: '#e53935', fontWeight: 'bold' }}>数量限定</span>となりますので、ぜひお早めにお買い求めください。
              </p>
              <div>
                <a href="https://buzzitems.base.shop/items/143259859" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#ff9800', color: '#fff', padding: '14px 32px', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', fontSize: '1.1rem', boxShadow: '0 6px 16px rgba(255, 152, 0, 0.3)', transition: 'transform 0.2s ease, box-shadow 0.2s ease' }}>
                  BASEショップで今すぐ購入
                  <svg style={{ marginLeft: '10px', width: '20px', height: '20px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                </a>
              </div>
            </div>
          </div>
        </section>
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
