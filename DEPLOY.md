# Colocar o site online

Escolha uma opção e siga os passos. O site ficará com uma URL pública (ex: `https://seu-site.netlify.app` ou `https://seu-site.vercel.app`).

---

## Opção 1: Netlify (recomendado – já está configurado)

1. **Crie uma conta** em [netlify.com](https://www.netlify.com) (grátis).

2. **Conecte o repositório**
   - No Netlify: **Add new site** → **Import an existing project**.
   - Conecte **GitHub**, **GitLab** ou **Bitbucket** (onde estiver o código).
   - Se o código ainda não estiver no Git:
     - Na pasta do projeto, rode:
       ```bash
       git init
       git add .
       git commit -m "Deploy"
       ```
     - Crie um repositório no GitHub e envie:
       ```bash
       git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
       git branch -M main
       git push -u origin main
       ```
   - No Netlify, escolha esse repositório.

3. **Configuração do build** (já deve vir preenchida pelo `netlify.toml`):
   - **Build command:** `npm run build`
   - **Publish directory:** deixe em branco (o plugin Next.js cuida disso).
   - Clique em **Deploy site**.

4. **Pronto.** O site ficará em `https://[nome-do-site].netlify.app`.  
   - Index: `/`  
   - Amo Pictures: `/amo-pictures`

---

## Opção 2: Vercel (ótimo para Next.js)

1. **Crie uma conta** em [vercel.com](https://vercel.com) (grátis).

2. **Importe o projeto**
   - **Add New** → **Project**.
   - Conecte GitHub/GitLab/Bitbucket ou faça **upload** da pasta (arrastando o projeto).
   - Se usar Git: selecione o repositório e clique **Import**.

3. **Configuração**
   - **Framework Preset:** Next.js (detectado automaticamente).
   - **Build Command:** `npm run build` (padrão).
   - **Output Directory:** deixe em branco.
   - Clique em **Deploy**.

4. **Pronto.** O site ficará em `https://[nome-do-projeto].vercel.app`.  
   - Index: `/`  
   - Amo Pictures: `/amo-pictures`

---

## Resumo

| Serviço  | URL após deploy        | Custo   |
|----------|------------------------|---------|
| Netlify  | `*.netlify.app`        | Grátis  |
| Vercel   | `*.vercel.app`         | Grátis  |

Depois do primeiro deploy, cada **push** na branch conectada gera um novo deploy automático.
