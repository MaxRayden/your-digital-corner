# Estrutura de Branches

Este projeto usa branches separadas para diferentes plataformas de deploy:

## 🌿 Branch `main` - Vercel

**Configuração para:** Vercel (https://studio-dev-beige.vercel.app/)

**Características:**
- Base path: `/` (raiz)
- Arquivo `vercel.json` presente
- Meta tags com URLs do Vercel
- Deploy automático via Vercel a cada push

**Como usar:**
- Trabalhe normalmente nesta branch
- Faça push para `main` e o Vercel fará deploy automaticamente

## 🌿 Branch `github-pages` - GitHub Pages

**Configuração para:** GitHub Pages (https://maxrayden.github.io/your-digital-corner/)

**Características:**
- Base path: `/your-digital-corner/`
- Sem arquivo `vercel.json`
- Meta tags com URLs do GitHub Pages
- Deploy automático via GitHub Actions a cada push

**Como usar:**
- Para fazer deploy no GitHub Pages, faça merge ou push para esta branch
- O GitHub Actions fará o deploy automaticamente

## 🔄 Como fazer merge entre branches

Se você fez alterações na `main` e quer aplicar no GitHub Pages:

```bash
# Na branch github-pages
git checkout github-pages
git merge main
git push origin github-pages
```

Ou se fez alterações na `github-pages` e quer aplicar no Vercel:

```bash
# Na branch main
git checkout main
git merge github-pages
git push origin main
```

## 📝 Notas Importantes

- **Não faça merge automático** sem revisar, pois as configurações são diferentes
- O `vite.config.ts` tem base paths diferentes em cada branch
- O `index.html` tem URLs diferentes nas meta tags
- O workflow do GitHub Actions só roda na branch `github-pages`

