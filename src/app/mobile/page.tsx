'use client';

import { useEffect } from 'react';
import { redirectToMobileVersion } from '@/utils/deviceDetection';
import Image from 'next/image'
import Link from 'next/link'

export default function MobilePage() {
  useEffect(() => {
    redirectToMobileVersion();
  }, []);

  return (
    <div className="mobile-optimized">
      {/* Navegação */}
      <nav className="nav-mobile">
        <Image 
          src="/logo.png" 
          alt="Pluma" 
          width={100} 
          height={32} 
          priority
        />
        <Link href="https://payment.ticto.app/O17F77F98" className="nav-button">
          Comprar agora
        </Link>
      </nav>

      <main className="mobile-sections">
        {/* Hero */}
        <section className="hero-section">
          <h1>Documentos prontos para psicólogos</h1>
          <p>
            Modelos profissionais e atualizados para sua prática clínica
          </p>
          <Image
            src="/hero-mobile.png"
            alt="Pluma - Documentos para Psicólogos"
            width={600}
            height={400}
            priority
            className="mx-auto"
          />
        </section>

        {/* Dores */}
        <section className="dores-section">
          <h2>Você quer continuar passando por isso?</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="card">
              <Image
                src="/perda-tempo.png"
                alt="Perda de tempo"
                width={200}
                height={200}
                className="mx-auto"
              />
              <h3>Perda de tempo</h3>
              <p>Horas perdidas tentando criar documentos do zero</p>
            </div>
            <div className="card">
              <Image
                src="/desgaste.png"
                alt="Desgaste"
                width={200}
                height={200}
                className="mx-auto"
              />
              <h3>Desgaste</h3>
              <p>Estresse por não saber se está fazendo certo</p>
            </div>
            <div className="card">
              <Image
                src="/desorganizacao.png"
                alt="Desorganização"
                width={200}
                height={200}
                className="mx-auto"
              />
              <h3>Desorganização</h3>
              <p>Documentos desorganizados e sem padrão</p>
            </div>
            <div className="card">
              <Image
                src="/exaustao.png"
                alt="Exaustão"
                width={200}
                height={200}
                className="mx-auto"
              />
              <h3>Exaustão</h3>
              <p>Cansaço de reescrever os mesmos documentos</p>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section className="beneficios-section">
          <h2>Recursos que vão facilitar sua vida</h2>
          <div className="grid grid-cols-1 gap-6">
            <div className="card">
              <Image
                src="/icons/pacientes.svg"
                alt="Tabela de pacientes"
                width={40}
                height={40}
              />
              <h3>Tabela de pacientes</h3>
              <p>Registre informações dos pacientes de forma organizada</p>
            </div>
            <div className="card">
              <Image
                src="/icons/agenda.svg"
                alt="Agenda"
                width={40}
                height={40}
              />
              <h3>Agenda</h3>
              <p>Estruture sua agenda semanal com facilidade</p>
            </div>
            <div className="card">
              <Image
                src="/icons/planejamento.svg"
                alt="Planejamentos"
                width={40}
                height={40}
              />
              <h3>Planejamentos</h3>
              <p>Organize faltas e lembretes importantes</p>
            </div>
            <div className="card">
              <Image
                src="/icons/financeiro.svg"
                alt="Central Financeira"
                width={40}
                height={40}
              />
              <h3>Central Financeira</h3>
              <p>Controle e planeje suas finanças</p>
            </div>
            <div className="card">
              <Image
                src="/icons/bonus.svg"
                alt="Muitos bônus!"
                width={40}
                height={40}
              />
              <h3>Muitos bônus!</h3>
              <p>Diversos recursos adicionais para te ajudar</p>
            </div>
          </div>
        </section>

        {/* Preço */}
        <section className="preco-section">
          <h2>Invista no seu desenvolvimento profissional</h2>
          <div className="card">
            <div className="text-center">
              <h3>Pacote Completo</h3>
              <div className="text-3xl font-bold text-[#C4A484] mt-2">
                R$ 97,00
              </div>
              <p className="text-sm text-gray-600 mt-1">Pagamento único</p>
            </div>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <span className="text-[#C4A484]">✓</span>
                <span>Todos os modelos de documentos</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C4A484]">✓</span>
                <span>Planilhas e templates</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C4A484]">✓</span>
                <span>Acesso vitalício</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#C4A484]">✓</span>
                <span>Atualizações gratuitas</span>
              </li>
            </ul>
            <Link 
              href="https://payment.ticto.app/O17F77F98"
              className="block w-full bg-[#C4A484] text-white text-center py-4 rounded-xl font-medium"
              onClick={() => {
                if (typeof window !== 'undefined' && window.trackEvent) {
                  window.trackEvent.beginCheckout()
                }
              }}
            >
              Comprar agora
            </Link>
          </div>
        </section>

        {/* Sobre */}
        <section className="sobre-section">
          <h2>Sobre a Pluma</h2>
          <p>
            Criamos soluções para ajudar psicólogos a terem mais tempo para o que realmente importa: seus pacientes.
          </p>
          <div className="grid grid-cols-1 gap-6">
            <div className="card">
              <h3>Propósito</h3>
              <p>Facilitar a vida dos psicólogos com soluções práticas e profissionais</p>
            </div>
            <div className="card">
              <h3>Qualidade</h3>
              <p>Documentos atualizados e alinhados com as normas do CFP</p>
            </div>
            <div className="card">
              <h3>Simplicidade</h3>
              <p>Interface intuitiva e fácil de usar no dia a dia</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div>
          <Image 
            src="/logo.png" 
            alt="Pluma" 
            width={100} 
            height={32} 
            className="mx-auto"
          />
          <p className="text-sm text-gray-600 mt-4">
            © 2024 Pluma. Todos os direitos reservados.
          </p>
        </div>
      </footer>

      {/* Botão flutuante */}
      <div className="floating-button">
        <Link 
          href="https://payment.ticto.app/O17F77F98"
          className="floating-button-link"
          onClick={() => {
            if (typeof window !== 'undefined' && window.trackEvent) {
              window.trackEvent.beginCheckout()
            }
          }}
        >
          <span>Comprar agora</span>
          <span className="text-sm">R$ 97,00</span>
        </Link>
      </div>
    </div>
  );
} 