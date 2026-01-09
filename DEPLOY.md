# Como Publicar no GitHub Pages

Este projeto está configurado para ser publicado automaticamente no GitHub Pages.

## Configuração Inicial

### 1. Habilitar GitHub Pages no Repositório

1. Vá para **Settings** do seu repositório no GitHub
2. No menu lateral, clique em **Pages**
3. Em **Source**, selecione **GitHub Actions**
4. Salve as alterações

### 2. Configurar o Base Path (se necessário)

Se o seu repositório **NÃO** está na raiz do GitHub Pages (por exemplo, se está em `https://seu-usuario.github.io/nome-do-repositorio/`):

1. Abra o arquivo `.github/workflows/deploy.yml`
2. Na linha que contém `VITE_BASE_PATH: '/'`, altere para:
   ```yaml
   VITE_BASE_PATH: '/nome-do-repositorio/'
   ```
   (Substitua `nome-do-repositorio` pelo nome real do seu repositório)

3. Abra o arquivo `vite.config.ts`
4. Altere a linha do base para:
   ```typescript
   const base = process.env.VITE_BASE_PATH || '/nome-do-repositorio/';
   ```

### 3. Fazer o Deploy

O deploy acontece automaticamente quando você faz push para o branch `main` (ou `master`).

**Para fazer o deploy manualmente:**

1. Faça commit e push das alterações:
   ```bash
   git add .
   git commit -m "Preparar para deploy"
   git push origin main
   ```

2. O GitHub Actions irá:
   - Fazer o build da aplicação
   - Publicar automaticamente no GitHub Pages

3. Aguarde alguns minutos e acesse: `https://seu-usuario.github.io` (ou `https://seu-usuario.github.io/nome-do-repositorio/` se configurou base path)

## Verificar o Status do Deploy

1. Vá para a aba **Actions** do seu repositório
2. Clique no workflow mais recente para ver o progresso
3. Quando estiver completo, acesse a URL do GitHub Pages

## Troubleshooting

### Página em branco
- Verifique se o base path está correto
- Verifique o console do navegador para erros
- Certifique-se de que o build foi bem-sucedido nas Actions

### Rotas não funcionam
- Certifique-se de que o `basename` no `App.tsx` corresponde ao base path configurado
- GitHub Pages não suporta rotas do lado do servidor, então todas as rotas devem ser configuradas corretamente no React Router

### Build falha
- Verifique os logs nas Actions do GitHub
- Certifique-se de que todas as dependências estão instaladas
- Execute `npm run build` localmente para verificar erros

