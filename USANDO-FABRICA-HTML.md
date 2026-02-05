# 📄 Usando o fabrica.html

## ✅ Site Atualizado e Pronto!

O arquivo `fabrica.html` agora está completamente atualizado com:
- ✅ 8 projetos com imagens/ícones SVG
- ✅ Cores únicas para cada projeto
- ✅ Links funcionais
- ✅ Título KÛARA® Studio

---

## 🌐 Como Abrir o Site

### Método 1: Clique Duplo
1. Vá até a pasta: `C:\Users\Ketruyn\Desktop\vendersite\`
2. Clique duas vezes no arquivo: **`fabrica.html`**
3. O site abrirá no seu navegador padrão

### Método 2: Arrastar
1. Abra seu navegador (Chrome, Edge, etc)
2. Arraste o arquivo `fabrica.html` para dentro do navegador
3. Pronto!

### Método 3: Abrir com...
1. Clique com botão direito no `fabrica.html`
2. Escolha "Abrir com"
3. Selecione seu navegador favorito

---

## 🎨 O Que Você Verá

### Seção de Projetos:
Agora você tem **8 projetos coloridos**:

1. 🟠 **U.GO App** (2025) - Logo PNG com gradiente laranja
2. 🟣 **Ortifolio** (2025) - Imagem com gradiente roxo
3. 🔴 **Fashion Store** (2024) - Ícone SVG vermelho/rosa
4. 🔵 **Clínica Saúde Total** (2024) - Ícone SVG ciano
5. 🟡 **Sabor & Arte** (2024) - Ícone SVG âmbar
6. 🟦 **Prime Imóveis** (2024) - Ícone SVG índigo
7. 🟪 **Landing Page Pro** (2023) - Ícone SVG violeta
8. 🩷 **Portfolio Creative** (2023) - Ícone SVG rosa

---

## 🔗 Links dos Projetos

- **U.GO App & Ortifolio** → Abrem WhatsApp para contato
- **Outros projetos** → Abrem os demos HTML (demo-ecommerce.html, etc)

---

## ✏️ Como Editar o Site

### Para Adicionar/Editar Projetos:

1. Abra `fabrica.html` no **VS Code** ou **Bloco de Notas**
2. Procure por: `<div class="projects-grid">`
3. Você verá os 8 projetos listados
4. Para adicionar um novo projeto, copie um card existente e modifique:

```html
<a href="seu-link.html" target="_blank" class="project-card" style="text-decoration: none; color: inherit;">
    <div class="project-card-header">
        <h3 class="project-card-title">Nome do Projeto<span class="project-card-year">/2025</span></h3>
        <div class="project-card-menu">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </div>
    <div class="project-image" style="background: linear-gradient(135deg, rgba(255, 0, 0, 0.1), rgba(255, 100, 0, 0.2)); display: flex; align-items: center; justify-content: center;">
        <img src="public/projects/seu-icone.svg" alt="Nome do Projeto" style="width: 150px; height: 150px; object-fit: contain;">
        <div class="project-logo-overlay center">
            <div class="project-logo-text" style="font-size: 12px; color: rgba(255,255,255,0.8);">Descrição curta</div>
        </div>
    </div>
</a>
```

5. Salve o arquivo
6. Atualize a página no navegador (F5)

---

## 🎨 Cores dos Gradientes

Para mudar a cor de fundo de um projeto, edite a parte:
```css
background: linear-gradient(135deg, rgba(COR1), rgba(COR2));
```

Exemplos de cores RGB:
- 🟠 Laranja: `rgba(249, 115, 22, 0.1), rgba(251, 146, 60, 0.2)`
- 🟣 Roxo: `rgba(168, 85, 247, 0.1), rgba(192, 132, 252, 0.2)`
- 🔴 Vermelho: `rgba(239, 68, 68, 0.1), rgba(236, 72, 153, 0.2)`
- 🔵 Ciano: `rgba(6, 182, 212, 0.1), rgba(20, 184, 166, 0.2)`
- 🟡 Amarelo: `rgba(245, 158, 11, 0.1), rgba(234, 179, 8, 0.2)`
- 🟦 Azul: `rgba(99, 102, 241, 0.1), rgba(59, 130, 246, 0.2)`
- 🟪 Violeta: `rgba(139, 92, 246, 0.1), rgba(167, 139, 250, 0.2)`
- 🩷 Rosa: `rgba(236, 72, 153, 0.1), rgba(251, 113, 133, 0.2)`

---

## 📂 Estrutura de Arquivos

```
vendersite/
├── fabrica.html          ← Site principal (ABRA ESTE!)
├── public/
│   └── projects/
│       ├── ugo-logo.png
│       ├── ortifolio.png
│       ├── fashion-store.svg
│       ├── clinica.svg
│       ├── restaurante.svg
│       ├── imoveis.svg
│       ├── landing-page.svg
│       └── portfolio.svg
├── demo-ecommerce.html
├── demo-clinica.html
├── demo-restaurante.html
├── demo-imobiliaria.html
├── demo-landing.html
└── demo-portfolio.html
```

---

## 🚀 Para Colocar Online

### Opção 1: Netlify (Recomendado)
1. Acesse: https://netlify.com
2. Arraste a pasta `vendersite` inteira
3. Site online em segundos!

### Opção 2: GitHub Pages
1. Crie um repositório no GitHub
2. Faça upload dos arquivos
3. Ative GitHub Pages nas configurações

### Opção 3: Hospedagem Tradicional
1. Faça upload via FTP
2. Coloque na pasta public_html
3. Acesse pelo domínio

---

## ✨ Vantagens do fabrica.html

✅ **Não precisa instalar nada** (sem Node.js, npm, etc)
✅ **Abre direto no navegador** (clique duplo)
✅ **Fácil de editar** (qualquer editor de texto)
✅ **Rápido** (sem compilação)
✅ **Funciona offline** (não precisa de servidor)
✅ **Compatível com tudo** (todos os navegadores)

---

## 🎯 Status

✅ **PRONTO PARA USO!**
✅ **8 Projetos Configurados**
✅ **Imagens e Ícones SVG Incluídos**
✅ **Cores Personalizadas**
✅ **100% Funcional**

---

## 💡 Dica Final

Para ver as alterações que você fizer:
1. Edite o `fabrica.html`
2. Salve (Ctrl+S)
3. Volte ao navegador
4. Atualize a página (F5 ou Ctrl+F5)

**Simples assim!** 🎉

---

**Site criado por KÛARA® Studio** 💜
