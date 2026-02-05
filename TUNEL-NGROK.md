# Colocar o site Headspace online com ngrok

O [ngrok](https://ngrok.com) cria um túnel seguro e gera uma URL pública (ex: `https://xxxx.ngrok-free.app`) que aponta para o servidor rodando na sua máquina.

---

## 1. Conta no ngrok (grátis)

1. Acesse **https://ngrok.com** e crie uma conta.
2. No painel, copie seu **Authtoken**.
3. Configure (uma vez só):

   ```bash
   npx ngrok config add-authtoken SEU_TOKEN_AQUI
   ```

---

## 2. Subir o servidor local

Na pasta do projeto, em **um terminal**:

```bash
npm run serve:headspace
```

Isso sobe o `headspace-html` em **http://localhost:3333** (porta 3333 para não bater com `npm run dev`, que usa 3000). Deixe o terminal aberto.

---

## 3. Subir o túnel ngrok

Em **outro terminal**, na pasta do projeto:

```bash
npm run tunnel:headspace
```

O ngrok vai mostrar algo como:

```
Forwarding    https://abc123.ngrok-free.app -> http://localhost:3333
```

Use a URL **https** (ex: `https://abc123.ngrok-free.app`) para acessar o site de qualquer lugar.

---

## 4. Ver a URL no Inspetor do ngrok

Com o **ngrok rodando** (`npm run tunnel:headspace`), abra no navegador:

**http://127.0.0.1:4040**  
*(porta **4040**, com os quatro zeros — não use 404)*

Lá aparecem as requisições e a URL pública do túnel. Se der "conexão recusada", verifique se o ngrok está ativo no outro terminal.

---

## Scripts no `package.json`

| Script | O que faz |
|--------|-----------|
| `npm run serve:headspace` | Sobe `http-server` na pasta `headspace-html` na porta **3333** |
| `npm run tunnel:headspace` | Abre o túnel ngrok para **http://localhost:3333** |

---

## Resumo rápido

1. `ngrok config add-authtoken SEU_TOKEN` (só na primeira vez)
2. Terminal 1: `npm run serve:headspace`
3. Terminal 2: `npm run tunnel:headspace`
4. Acessar a URL `https://....ngrok-free.app` que o ngrok mostrar (ou em http://127.0.0.1:4040)

---

## Já atualizando o ngrok (depois de mudar o site)

Depois de editar os arquivos em `headspace-html`, o `http-server` com `-c-1` já entrega a versão nova. Para garantir:

1. **Terminal do `serve:headspace`:** Ctrl+C e de novo `npm run serve:headspace`.
2. **Terminal do ngrok:** Ctrl+C e de novo `npm run tunnel:headspace`.
3. Use a **nova URL** se o ngrok exibir (no free às vezes muda).

A URL antiga pode seguir funcionando; o importante é o `serve:headspace` estar na 3333 com os arquivos atualizados.

---

## Se der erro de “Lock compromised” no `serve`

O script `serve:headspace` usa `http-server` em vez de `serve`. Se ainda assim der problema com `npx`, instale na pasta do projeto e use:

```bash
npx http-server headspace-html -p 3333 -c-1
```

Depois, no outro terminal:

```bash
npx ngrok http 3333
```

---

## "Visite o site" não abre nada / página em branco

Se ao clicar em "Visite o site" nada carrega ou fica em branco, o **ngrok estava na porta 3000**, que é a mesma do `npm run dev` (Next.js). O headspace passou para a **porta 3333** para não conflitar.

**Faça de novo, na ordem:**
1. Feche o terminal do **ngrok** (Ctrl+C).
2. **Pare** o `serve:headspace` antigo se estiver rodando (Ctrl+C).
3. Terminal 1: `npm run serve:headspace` (sobe na **3333**).
4. Terminal 2: `npm run tunnel:headspace` (túnel para **3333**).
5. Use a **nova URL** que o ngrok mostrar (pode ser igual ou diferente da anterior). Depois clique em "Visite o site".

Assim o túnel aponta para o `headspace-html` de verdade, não para o Next.js.

---

## Página "Você está prestes a visitar" (aviso ngrok)

Na conta **grátis**, o ngrok exibe uma tela de aviso antes do site. **Clique em "Visite o site"** para entrar. Visitantes em geral só veem essa tela uma vez. Para não exibir o aviso: conta paga do ngrok ou enviar o header `ngrok-skip-browser-warning` (em HTML estático isso exige extensão/ferramenta ou servidor que injete o header).

---

## Erro "Conexão recusada" (ERR_CONNECTION_REFUSED)

- **Inspetor ngrok:** use **http://127.0.0.1:4040** (porta **4040**, não 404). A porta 404 não existe.
- O inspetor só funciona **enquanto o ngrok estiver rodando** (`npm run tunnel:headspace`).
- **localhost:3333 recusado:** inicie antes `npm run serve:headspace`.
