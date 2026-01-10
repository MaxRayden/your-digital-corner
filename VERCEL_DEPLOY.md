# Como Fazer Deploy no Vercel

Este projeto está configurado para funcionar no Vercel.

## Deploy Automático via GitHub

1. **Conecte seu repositório ao Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub
   - Clique em **Add New Project**
   - Selecione o repositório `your-digital-corner`
   - O Vercel detectará automaticamente as configurações do Vite

2. **Configure o projeto:**
   - **Framework Preset**: Vite (deve ser detectado automaticamente)
   - **Root Directory**: `./` (raiz)
   - **Build Command**: `npm run build` (já configurado)
   - **Output Directory**: `dist` (já configurado)
   - **Install Command**: `npm install` (já configurado)

3. **Deploy:**
   - Clique em **Deploy**
   - O Vercel fará o build e deploy automaticamente
   - Cada push para o branch `main` fará um novo deploy automaticamente

## Deploy Manual via CLI

1. **Instale o Vercel CLI:**
   ```bash
   npm i -g vercel
   ```

2. **Faça login:**
   ```bash
   vercel login
   ```

3. **Deploy:**
   ```bash
   vercel
   ```

   Para produção:
   ```bash
   vercel --prod
   ```

## Configurações

O arquivo `vercel.json` já está configurado com:
- Build command: `npm run build`
- Output directory: `dist`
- Rewrites para SPA (Single Page Application) - todas as rotas redirecionam para `index.html`

## Domínio Customizado

Para usar um domínio customizado:
1. Vá em **Settings** → **Domains** no projeto no Vercel
2. Adicione seu domínio
3. Siga as instruções de DNS

## Variáveis de Ambiente

Se precisar de variáveis de ambiente:
1. Vá em **Settings** → **Environment Variables**
2. Adicione as variáveis necessárias
3. Elas estarão disponíveis como `process.env.VAR_NAME` no código

## Vantagens do Vercel

- ✅ Deploy automático a cada push
- ✅ Preview de cada PR
- ✅ SSL automático
- ✅ CDN global
- ✅ Sem necessidade de base path (diferente do GitHub Pages)
- ✅ Mais rápido que GitHub Pages

