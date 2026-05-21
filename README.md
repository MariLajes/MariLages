# Mari Lajes — Site Institucional

![Status](https://img.shields.io/badge/status-online-brightgreen)
![Stack](https://img.shields.io/badge/stack-React%2019%20%2B%20Tailwind-orange)
![License](https://img.shields.io/badge/license-private-lightgrey)

Site institucional da **Mari Lajes** — empresa de **lajes pré-moldadas** e **concreto usinado**.
Landing page de página única (SPA) focada em **conversão via WhatsApp**.

> 👑 *Temos Lajes a Pronta Entrega e Concreto Usinado — garantindo agilidade e praticidade para sua obra.*

---

## 📸 Preview

O site é dividido em 5 seções principais:

| Seção | Função |
|---|---|
| **Hero** | Apresentação, valor da marca e CTA para WhatsApp |
| **Produtos** | 3 cards: Lajes Pré-moldadas · Concreto Usinado · Serviços Especializados |
| **Galeria** | Carrossel com fotos da produção e obras |
| **Contato** | Telefone, WhatsApp, email, horários + formulário |
| **Footer** | Links rápidos, contato consolidado e redes sociais |

Além de um **botão flutuante de WhatsApp** sempre visível no canto inferior direito.

---

## 🛠️ Stack Técnica

| Camada | Tecnologia |
|---|---|
| Framework | **React 19** |
| Build / Dev | **Create React App** (via **craco**) |
| Estilo | **Tailwind CSS 3** |
| Ícones | **lucide-react** |
| Fontes | **Poppins** (corpo) · **Playfair Display** (títulos) |
| Roteamento | Página única (anchors `#inicio`, `#produtos`, etc.) |

Não há backend próprio — todas as ações de contato abrem o WhatsApp via link `wa.me`, o cliente de email padrão (`mailto:`) ou o discador (`tel:`).

---

## 🚀 Rodando o projeto localmente

### Pré-requisitos
- **Node.js** ≥ 18
- **Yarn** (clássico ou 1.x) — `npm install -g yarn`

### Passos

```bash
# 1. Clone o repositório
git clone https://github.com/KurokawaBr/MariLagesSite.git
cd MariLagesSite/frontend

# 2. Instale as dependências
yarn install

# 3. Inicie o servidor de desenvolvimento
yarn start
```

O site abre em **http://localhost:3000** com hot-reload.

### Build de produção

```bash
yarn build
```

Gera arquivos otimizados em `frontend/build/` prontos para deploy estático em qualquer servidor (Vercel, Netlify, GitHub Pages, S3, etc.).

> 🚀 **Para publicar o site online:** veja [`docs/DEPLOY.md`](./docs/DEPLOY.md) — o projeto já vem com **deploy automático para GitHub Pages** configurado via GitHub Actions.

---

## ✏️ Como atualizar informações da empresa

**Toda a informação de contato fica em um único arquivo:**

📁 `frontend/src/lib/contact.js`

```js
export const CONTACT = {
  phoneDisplay: "+55 (61) 98248-0654",   // como aparece na tela
  phoneRaw: "5561982480654",              // usado no link wa.me e tel:
  email: "marinamacielsa2011@gmail.com",
  hours: [
    { label: "Segunda a Sexta", value: "07:00 às 18:00" },
    { label: "Sábado e Domingo", value: "Fechado" },
  ],
};
```

Basta editar esse arquivo e **todas as seções do site são atualizadas automaticamente** (Hero, Contato, Footer, formulário, botão flutuante).

---

## 📁 Estrutura do projeto

```
MariLagesSite/
├── README.md                    👈 Você está aqui
├── docs/                         Documentação técnica detalhada
│   ├── ARCHITECTURE.md           Arquitetura, decisões e fluxos
│   ├── COMPONENTS.md             Doc de cada componente
│   └── CONFIGURATION.md          Tailwind, craco, fontes, paleta
└── frontend/
    ├── public/
    │   ├── index.html            HTML base + tags <head>
    │   └── …                     favicon, manifest, assets estáticos
    ├── src/
    │   ├── index.js              Entrada do React
    │   ├── index.css             Tailwind base + variáveis globais
    │   ├── App.js                Composição das seções da página
    │   ├── App.css               Estilos globais (fontes, scroll smooth)
    │   ├── lib/
    │   │   └── contact.js        🔑 Fonte única de dados de contato
    │   └── components/
    │       ├── Header.jsx        Cabeçalho sticky + menu mobile
    │       ├── Hero.jsx          Seção principal com CTA
    │       ├── Products.jsx      Cards de produtos
    │       ├── Gallery.jsx       Carrossel de imagens
    │       ├── Contact.jsx       Composição da seção contato
    │       ├── ContactInfo.jsx   Lado esquerdo (telefone/email/etc)
    │       ├── ContactForm.jsx   Formulário que envia via WhatsApp
    │       ├── Footer.jsx        Rodapé
    │       └── WhatsAppFloat.jsx Botão flutuante fixo
    ├── package.json              Dependências e scripts
    ├── tailwind.config.js        Tema Tailwind
    ├── craco.config.js           Overrides do CRA (aliases @/)
    └── postcss.config.js         PostCSS + Tailwind plugin
```

---

## 🔗 Integração WhatsApp

O site converte visitantes em conversas no WhatsApp através de **5 pontos de contato**:

| Local | Comportamento |
|---|---|
| Botão flutuante | Mensagem genérica ("vim pelo site da Mari Lajes") |
| CTA do Hero | "Falar no WhatsApp" — mensagem de orçamento |
| Card WhatsApp em Contato | "Gostaria de mais informações sobre os produtos" |
| Footer | Link "WhatsApp" |
| Formulário de Contato | Compõe mensagem com nome/email/telefone/mensagem do usuário |

Todos usam o helper `whatsappLink(message)` definido em `lib/contact.js`, que gera URLs no formato:

```
https://wa.me/5561982480654?text=<mensagem-encoded>
```

---

## 📚 Documentação completa

Para detalhes técnicos consulte a pasta [`docs/`](./docs/):

- **[Deploy](./docs/DEPLOY.md)** — 🚀 como publicar o site (GitHub Pages, Vercel, Netlify, Cloudflare)
- **[Arquitetura](./docs/ARCHITECTURE.md)** — visão geral, fluxo de dados e decisões de design
- **[Componentes](./docs/COMPONENTS.md)** — responsabilidades, props e `data-testid`s
- **[Configuração](./docs/CONFIGURATION.md)** — Tailwind, craco, paleta, fontes e env

---

## 📞 Contato

**Mari Lajes — Concreto e Argamassa**

- 📱 WhatsApp: [+55 (61) 98248-0654](https://wa.me/5561982480654)
- 📧 Email: [marinamacielsa2011@gmail.com](mailto:marinamacielsa2011@gmail.com)
- 🕒 Segunda a Sexta · 07:00 às 18:00
- 🚫 Sábado e Domingo · Fechado

---

© 2026 Mari Lajes. Todos os direitos reservados.
