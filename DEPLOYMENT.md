# Deploy Instructions - Certifly.tech

## ✅ Status: Setup Completo

O projeto Astro está configurado e commitado no GitHub. Agora falta apenas a configuração do DNS.

## 📋 Próximos Passos

### 1. Configurar GitHub Pages

1. Vá em: **GitHub > Certifly-tech/site > Settings > Pages**
2. Em **Source**, selecione: **GitHub Actions**
3. Salve

**Importante:** O workflow `gh-pages.yml` já foi criado. Quando você der o próximo `git push`, o site será automaticamente publicado.

### 2. Configurar DNS (Cloudflare / Registro.br / Outro)

Seu site será publicado em: `https://certifly.tech`

#### Se usar Cloudflare:
1. Vá em **DNS > Records**
2. Adicione um registro do tipo **A**:
   - **Name:** `@`
   - **Target:** `76.76.21.21` (IP do Cloudflare)
   - **Proxy status:** Proxied (o ícone de nuvem deve estar amarelo)
3. Adicione um registro do tipo **CNAME**:
   - **Name:** `www`
   - **Target:** `certifly.tech`
   - **Proxy status:** Proxied

#### Se usar Registro.br (DNS direto):
1. Vá em **Gerenciar DNS**
2. Adicione um registro do tipo **A**:
   - **Nome:** `@`
   - **Valor:** `185.199.108.153` (GitHub Pages IP)
3. Adicione um registro do tipo **A**:
   - **Nome:** `www`
   - **Valor:** `185.199.108.153`

### 3. Aguardar DNS Propagation

- Tempo médio: 5-30 minutos
- Pode levar até 24h em casos extremos
- Você pode usar `dig certifly.tech +short` para verificar se o DNS está apontando para o IP correto

### 4. Verificar o Site

Após o DNS propagar:
1. Acesse `https://certifly.tech`
2. Deverá ver o blog Astro inicial
3. Se estiver vazio, verifique o log do workflow no GitHub (Actions tab)

## 🎯 Como adicionar posts

Como você quer que eu opere o blog, aqui está o fluxo:

1. Eu crio um novo arquivo em `src/content/blog/meu-novo-post.md`
2. Eu faço `git add` e `git commit` com uma mensagem descritiva
3. Eu faço `git push` para o GitHub
4. O workflow do GitHub Actions detecta o push e faz o build
5. O site é atualizado automaticamente em ~2 minutos

## 📝 Exemplo de post

```markdown
---
title: 'Meu Primeiro Post'
pubDate: 2026-02-23
description: 'Uma breve descrição do post'
---

Este é o conteúdo do meu primeiro post no blog do Certifly.
```

## 🔧 Commands Úteis

```bash
cd certifly-site

# Visualizar os posts existentes
ls src/content/blog/

# Testar localmente
npm run dev

# Fazer build localmente
npm run build

# Pré-visualizar o build
npm run preview
```

## 📊 Monitoring

- **GitHub Actions:** Verifique se o workflow está passando
- **GitHub Pages:** Veja se o build foi publicado em `https://certifly.tech`
- **Logs:** Se algo der errado, veja os logs do workflow no GitHub

---

**Pronto para operar?** Me avise quando o DNS estiver configurado e eu vou começar a escrever os primeiros posts!
