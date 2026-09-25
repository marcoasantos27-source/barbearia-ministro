import type { CSSProperties } from 'react'
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Instagram,
  MapPin,
  MessageCircle,
  Scissors,
  Sparkles,
} from 'lucide-react'
import logoMinistro from './assets/logo-ministro.png'

const AGENDAMENTO = 'https://agendaservico.com/ministrobarbearia'
const WHATSAPP =
  'https://wa.me/5579998093413?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20um%20hor%C3%A1rio%20na%20Barbearia%20Ministro.'
const MAPA =
  'https://www.google.com/maps/search/?api=1&query=Rua+Tenente+Waldir+dos+Santos,+197,+Farol%C3%A2ndia,+Aracaju+-+SE'
const INSTAGRAM = 'https://www.instagram.com/barbeariaministro.ofc/'

// Fotos provisórias. A estrutura já está preparada para receber as fotos reais da Ministro.
const images = {
  hero: 'https://images.unsplash.com/photo-1585747860715-2ba37e788b70?auto=format&fit=crop&fm=jpg&q=84&w=1800',
  cabelo: 'https://images.unsplash.com/photo-1747830280502-f33d7305a714?auto=format&fit=crop&fm=jpg&q=82&w=1200',
  barba: 'https://images.unsplash.com/photo-1593702275687-f8b402bf1fb5?auto=format&fit=crop&fm=jpg&q=82&w=1200',
  combo: 'https://images.unsplash.com/photo-1647140655214-e4a2d914971f?auto=format&fit=crop&fm=jpg&q=82&w=1200',
  sobrancelha: 'https://images.unsplash.com/photo-1653875700322-cf550d9a52ff?auto=format&fit=crop&fm=jpg&q=82&w=1200',
  cuidado: 'https://images.unsplash.com/photo-1605497788044-5a32c7078486?auto=format&fit=crop&fm=jpg&q=82&w=1200',
  galeria1: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&fm=jpg&q=82&w=1200',
  galeria2: 'https://images.unsplash.com/photo-1621645582931-d1d3e6564943?auto=format&fit=crop&fm=jpg&q=82&w=1200',
  galeria3: 'https://images.unsplash.com/photo-1536520002442-39764a41e987?auto=format&fit=crop&fm=jpg&q=82&w=1200',
}

const servicos = [
  { nome: 'Cabelo', preco: 'R$ 45', duracao: '40 min', imagem: images.cabelo },
  { nome: 'Barba', preco: 'R$ 45', duracao: '30 min', imagem: images.barba },
  { nome: 'Cabelo + Barba', preco: 'R$ 90', duracao: '1h', imagem: images.combo },
  { nome: 'Sobrancelha', preco: 'R$ 25', duracao: '10 min', imagem: images.sobrancelha },
  { nome: 'Cuidados', preco: 'a partir de R$ 35', duracao: '15 min', imagem: images.cuidado },
  { nome: 'Assinaturas', preco: 'a partir de R$ 160', duracao: 'mensal', imagem: images.hero },
]

const assinaturas = [
  { nome: 'Cabelo 4x no mês', preco: 'R$ 160/mês' },
  { nome: 'Barba 4x no mês', preco: 'R$ 160/mês' },
  { nome: 'Cabelo + Barba 4x no mês', preco: 'R$ 320/mês' },
  { nome: 'Cabelo + Barba + Sobrancelhas', preco: 'R$ 360/mês' },
]

const trabalhos = [images.galeria1, images.galeria2, images.galeria3, images.cabelo]

function App() {
  return (
    <main>
      <header className="topbar">
        <a className="brand" href="#top" aria-label="Barbearia Ministro - início">
          <img src={logoMinistro} alt="Logo da Barbearia Ministro" />
        </a>
      </header>

      <section id="top" className="hero" style={{ '--hero-image': `url(${images.hero})` } as CSSProperties}>
        <div className="hero__overlay" />
        <div className="hero__content container">
          <span className="eyebrow">Barbearia em Aracaju</span>
          <h1>
            Seu visual no <span>padrão Ministro.</span>
          </h1>
          <p>Cortes, barba e visagismo moderno em Aracaju.</p>

          <div className="hero__actions">
            <a className="button button--primary" href={AGENDAMENTO} target="_blank" rel="noreferrer">
              <CalendarDays size={19} />
              Agendar meu horário
            </a>
            <a className="button button--ghost" href="#servicos">
              Ver serviços
            </a>
          </div>

          <div className="hero__meta">
            <span>
              <MapPin size={15} /> Farolândia
            </span>
            <span>
              <Sparkles size={15} /> Visagismo moderno
            </span>
          </div>
        </div>
      </section>

      <section id="servicos" className="section container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Escolha seu serviço</span>
            <h2>Serviços</h2>
          </div>
          <a className="text-link" href={AGENDAMENTO} target="_blank" rel="noreferrer">
            Ver todos <ArrowRight size={16} />
          </a>
        </div>

        <div className="horizontal-scroll service-list" aria-label="Serviços da Barbearia Ministro">
          {servicos.map((servico) => (
            <a
              className="service-card"
              href={AGENDAMENTO}
              target="_blank"
              rel="noreferrer"
              key={servico.nome}
            >
              <img src={servico.imagem} alt="" loading="lazy" />
              <div className="service-card__shade" />
              <div className="service-card__content">
                <h3>{servico.nome}</h3>
                <p>{servico.preco}</p>
                <span>
                  <Clock3 size={14} /> {servico.duracao}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="section container">
        <div className="membership">
          <div className="membership__intro">
            <span className="eyebrow">Assinaturas</span>
            <h2>Seu corte sempre em dia.</h2>
            <p>Planos para manter o padrão Ministro durante todo o mês.</p>
          </div>

          <div className="horizontal-scroll membership__list" aria-label="Planos de assinatura">
            {assinaturas.map((plano) => (
              <a className="plan-card" href={AGENDAMENTO} target="_blank" rel="noreferrer" key={plano.nome}>
                <Scissors size={18} />
                <h3>{plano.nome}</h3>
                <strong>{plano.preco}</strong>
                <span>De segunda a sexta</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--compact container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Trabalhos</span>
            <h2>O padrão Ministro</h2>
          </div>
          <a className="icon-link" href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram da Barbearia Ministro">
            <Instagram size={18} />
          </a>
        </div>

        <div className="horizontal-scroll gallery" aria-label="Referências de cortes e cuidados masculinos">
          {trabalhos.map((src, index) => (
            <figure className="gallery__item" key={src}>
              <img src={src} alt={`Referência de trabalho de barbearia ${index + 1}`} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <section className="section section--location container">
        <div className="location-card">
          <div>
            <span className="eyebrow">Barbearia Ministro</span>
            <h2>Tradição com olhar moderno.</h2>
            <p>
              Rua Tenente Waldir dos Santos, 197<br />
              Farolândia / Conjunto Augusto Franco, Aracaju - SE
            </p>
          </div>

          <div className="location-card__actions">
            <a className="button button--primary" href={MAPA} target="_blank" rel="noreferrer">
              <MapPin size={18} /> Como chegar
            </a>
            <a className="button button--outline" href={WHATSAPP} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="footer container">
        <img src={logoMinistro} alt="Barbearia Ministro" />
        <div>
          <a href={INSTAGRAM} target="_blank" rel="noreferrer" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a href={WHATSAPP} target="_blank" rel="noreferrer" aria-label="WhatsApp">
            <MessageCircle size={18} />
          </a>
        </div>
      </footer>

      <a className="mobile-booking" href={AGENDAMENTO} target="_blank" rel="noreferrer">
        <CalendarDays size={19} />
        Agendar horário
      </a>
    </main>
  )
}

export default App
