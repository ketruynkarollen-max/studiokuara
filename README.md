# Landio Clone - Next.js 14

Clone do site [landio.framer.website](https://landio.framer.website/) construído com Next.js 14 (App Router), TypeScript, TailwindCSS e Framer Motion.

## 🚀 Tecnologias

- **Next.js 14** (App Router)
- **TypeScript**
- **TailwindCSS**
- **Framer Motion** (animações)
- **pnpm** (gerenciador de pacotes)

## 📦 Instalação

1. Instale as dependências:
```bash
pnpm install
```

2. Execute o servidor de desenvolvimento:
```bash
pnpm dev
```

3. Abra [http://localhost:3000](http://localhost:3000) no navegador.

## 🎨 Funcionalidades

### Seções Implementadas

- ✅ **Navbar** - Fixa com blur ao rolar, links âncora suaves
- ✅ **Hero** - Parallax por mouse e scroll, elementos flutuantes
- ✅ **Quote Section** - Bloco de citação com avatar
- ✅ **Benefits** - 3 cards com animações de reveal
- ✅ **Services** - Chips interativos + cards de serviços
- ✅ **Research Section** - Marquee infinito + painel de código animado
- ✅ **Features** - Grid de funcionalidades
- ✅ **Process** - Sticky stepper com transições suaves
- ✅ **Success Stories** - Cards com count-up animado
- ✅ **Pricing** - Toggle Monthly/Yearly, 3 planos
- ✅ **FAQ** - Acordeão interativo
- ✅ **Comparison** - Comparação lado a lado
- ✅ **Team** - Cards da equipe
- ✅ **CTA** - Call-to-action final
- ✅ **Footer** - Links e copyright

### Animações Implementadas

1. ✅ **Reveal on scroll** - Todas as seções com IntersectionObserver
2. ✅ **Hero parallax** - Mouse e scroll parallax
3. ✅ **Magnetic buttons** - Botões com efeito magnético
4. ✅ **Marquee infinito** - Animação contínua
5. ✅ **Code panel** - Highlight animado + cursor piscando
6. ✅ **Sticky stepper** - Process section com scroll progressivo
7. ✅ **Count-up** - Números animados ao entrar na viewport
8. ✅ **Smooth scroll** - Navegação suave entre seções
9. ✅ **Scroll progress** - Barra de progresso no topo
10. ✅ **prefers-reduced-motion** - Respeita preferências de acessibilidade

## 📁 Estrutura do Projeto

```
├── app/
│   ├── globals.css          # Estilos globais
│   ├── layout.tsx            # Layout raiz
│   └── page.tsx              # Página principal
├── components/
│   ├── sections/             # Todas as seções
│   ├── ui/                   # Componentes reutilizáveis
│   └── ScrollProgress.tsx    # Barra de progresso
├── hooks/                    # Hooks customizados
│   ├── useInViewOnce.ts
│   ├── useMouseParallax.ts
│   ├── usePrefersReducedMotion.ts
│   └── useScrollProgress.ts
└── public/                   # Assets estáticos (se houver)
```

## 🎯 Características

- **100% Responsivo** - Mobile-first design
- **Performance Otimizada** - Lazy loading e code splitting
- **Acessível** - Respeita prefers-reduced-motion
- **Type-Safe** - TypeScript em todo o projeto
- **Animações Suaves** - Framer Motion para transições fluidas

## 🛠️ Scripts Disponíveis

- `pnpm dev` - Inicia servidor de desenvolvimento
- `pnpm build` - Cria build de produção
- `pnpm start` - Inicia servidor de produção
- `pnpm lint` - Executa o linter

## 📝 Notas

- Todas as imagens são placeholders (SVG/gradientes)
- O projeto não requer assets externos
- As animações são otimizadas para performance
- O código está pronto para produção

## 🎨 Customização

Você pode personalizar:
- Cores no `tailwind.config.ts`
- Animações nos componentes individuais
- Conteúdo nas seções
- Placeholders de imagens

---

Desenvolvido com ❤️ usando Next.js 14
