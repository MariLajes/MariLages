# Deploy do Site Mari Lajes

Este projeto já vem configurado para deploy automático no **GitHub Pages**. Você também pode publicar facilmente em outras plataformas como Vercel, Netlify ou Cloudflare Pages.

---

## 🚀 Opção 1 — GitHub Pages (recomendado e já configurado)

O workflow `.github/workflows/deploy.yml` faz tudo automaticamente:
toda vez que você dá push na branch `main`, o site é buildado e publicado.

### Passos para ativar (uma única vez)

1. **Suba o código para o GitHub**
   - Use o botão **"Save to GitHub"** na plataforma Emergent
   - Branch alvo: `main`
   - Repositório: `https://github.com/KurokawaBr/MariLagesSite`

2. **Habilite o GitHub Pages no repositório**
   - Acesse: `https://github.com/KurokawaBr/MariLagesSite/settings/pages`
   - Em **"Build and deployment" → "Source"**, selecione: **GitHub Actions**
   - Salve

3. **Aguarde o build (≈ 2 minutos)**
   - Acompanhe em: `https://github.com/KurokawaBr/MariLagesSite/actions`
   - Quando aparecer o ✅ verde, o site está no ar

4. **Acesse o site**
   - URL: **`https://kurokawabr.github.io/MariLagesSite/`**

### Como funciona o workflow

```yaml
on push to main
   ↓
checkout do código
   ↓
instala Node 20 + yarn
   ↓
yarn install (com cache)
   ↓
yarn build  →  frontend/build/
   ↓
upload do build
   ↓
publica no GitHub Pages
```

### Atualizar o site no futuro

Apenas faça push de qualquer mudança na branch `main`. O workflow roda sozinho e atualiza o site em ~2 minutos.

---

## ⚡ Opção 2 — Vercel (mais rápido para começar)

1. Acesse <https://vercel.com> e faça login com GitHub
2. Clique em **"Add New… → Project"**
3. Selecione o repo `MariLagesSite`
4. Configurações:
   - **Framework Preset:** Create React App
   - **Root Directory:** `frontend`
   - **Build Command:** `yarn build` (padrão)
   - **Output Directory:** `build` (padrão)
5. Clique em **Deploy**

URL final: `https://mari-lages-site.vercel.app` (ou domínio próprio)

---

## 🌐 Opção 3 — Netlify

1. Acesse <https://app.netlify.com> e faça login com GitHub
2. **Add new site → Import an existing project**
3. Selecione o repo `MariLagesSite`
4. Configurações:
   - **Base directory:** `frontend`
   - **Build command:** `yarn build`
   - **Publish directory:** `frontend/build`
5. Clique em **Deploy site**

URL final: `https://nome-aleatorio.netlify.app` (renomeável)

---

## ☁️ Opção 4 — Cloudflare Pages

1. Acesse <https://pages.cloudflare.com>
2. **Create a project → Connect to Git → MariLagesSite**
3. Configurações:
   - **Framework preset:** Create React App
   - **Build command:** `yarn build`
   - **Build output directory:** `build`
   - **Root directory:** `frontend`
4. Clique em **Save and Deploy**

URL final: `https://mari-lages-site.pages.dev`

---

## 🧭 Como apontar um domínio próprio (ex: `marilajes.com.br`)

### No GitHub Pages
1. Em `Settings → Pages → Custom domain`, digite `www.marilajes.com.br`
2. No seu provedor de DNS (Registro.br, GoDaddy, etc.), crie:
   - Um registro **CNAME** apontando `www` para `kurokawabr.github.io`
   - Um registro **A** apontando `@` para os IPs do GitHub Pages:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`

### Em Vercel / Netlify / Cloudflare Pages
Ambos têm seções "Custom Domain" — basta colar o domínio e seguir as instruções, eles validam DNS automaticamente.

---

## ⚙️ Por que `"homepage": "."` no package.json?

O CRA, por padrão, gera URLs absolutas para os assets (`/static/js/main.js`).
Isso quebra em deploys de **subdiretório** (como GitHub Pages: `kurokawabr.github.io/MariLagesSite/`).

Com `"homepage": "."`:
- URLs viram relativas (`./static/js/main.js`)
- Funciona em **qualquer** hospedagem (raiz ou subpasta)
- Sem precisar mudar nada ao trocar de hospedagem

---

## 🐛 Troubleshooting

### "Página em branco no GitHub Pages"
Causa comum: `homepage` não está configurado.
✅ Já corrigido neste projeto.

### "Aparece apenas o README.md"
Causa: GitHub Pages está em modo "Deploy from a branch" servindo o README.
✅ Solução: em `Settings → Pages`, mude **Source** para **GitHub Actions** (já documentado acima).

### "Workflow falha em 'yarn install'"
Causa: arquivo `yarn.lock` desatualizado no repositório.
✅ Solução: localmente, rode `yarn install` e commite o `yarn.lock` atualizado.

### "Mudei algo mas o site não atualizou"
- Verifique se o push foi na branch `main`
- Cheque a aba **Actions** do GitHub — algum workflow pode ter falhado
- Limpe o cache do navegador (Ctrl+Shift+R / Cmd+Shift+R)

---

## 📊 Comparação rápida

| Plataforma | Setup | Build automático | Domínio próprio grátis | HTTPS grátis |
|---|---|---|---|---|
| **GitHub Pages** | 2 cliques | ✅ (este workflow) | ✅ | ✅ |
| **Vercel** | 1 clique | ✅ | ✅ | ✅ |
| **Netlify** | 1 clique | ✅ | ✅ | ✅ |
| **Cloudflare Pages** | 1 clique | ✅ | ✅ | ✅ |

Para este projeto, **GitHub Pages** é suficiente e mantém tudo num só lugar (código + deploy no GitHub).
