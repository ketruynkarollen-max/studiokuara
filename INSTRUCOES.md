# 🚀 Instruções Rápidas

## Instalação e Execução

```bash
# 1. Instalar dependências
pnpm install

# 2. Executar em desenvolvimento
pnpm dev

# 3. Abrir no navegador
# http://localhost:3000
```

## 📋 Checklist de Funcionalidades

### ✅ Seções Implementadas
- [x] Navbar fixa com blur
- [x] Hero com parallax
- [x] Quote Section
- [x] Benefits (3 cards)
- [x] Services (chips + cards)
- [x] Research Section (marquee + code panel)
- [x] Features (grid)
- [x] Process (sticky stepper)
- [x] Success Stories (count-up)
- [x] Pricing (toggle monthly/yearly)
- [x] FAQ (acordeão)
- [x] Comparison
- [x] Team
- [x] CTA final
- [x] Footer

### ✅ Animações Implementadas
- [x] Reveal on scroll (todas as seções)
- [x] Hero parallax (mouse + scroll)
- [x] Magnetic buttons
- [x] Marquee infinito
- [x] Code panel animado
- [x] Sticky stepper
- [x] Count-up numbers
- [x] Smooth scroll
- [x] Scroll progress bar
- [x] prefers-reduced-motion

## 🎨 Personalização

### Cores
Edite `tailwind.config.ts` para alterar o esquema de cores.

### Conteúdo
Edite os arquivos em `components/sections/` para modificar o conteúdo.

### Animações
Ajuste as animações nos componentes individuais usando Framer Motion.

## 📱 Responsividade

O projeto é totalmente responsivo com breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

## 🐛 Troubleshooting

### Erro ao instalar dependências
```bash
# Limpar cache e reinstalar
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Porta 3000 já em uso
```bash
# Usar outra porta
pnpm dev -- -p 3001
```

### Animações não funcionam
- Verifique se o JavaScript está habilitado
- Verifique o console do navegador para erros
- Certifique-se de que `prefers-reduced-motion` não está ativo

## 📦 Build para Produção

```bash
# Criar build
pnpm build

# Executar build
pnpm start
```

---

**Pronto para usar!** 🎉

