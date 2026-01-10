# Como Resolver o Erro de Proteção do Ambiente GitHub Pages

## Problema
```
Branch "github-pages" is not allowed to deploy to github-pages due to environment protection rules.
The deployment was rejected or didn't satisfy other protection rules.
```

## Solução

O ambiente "github-pages" no GitHub tem regras de proteção que precisam ser ajustadas. Siga estes passos:

### Opção 1: Ajustar as Regras de Proteção do Ambiente (Recomendado)

1. **Acesse as configurações do repositório:**
   - Vá para **Settings** → **Environments**
   - Clique no ambiente **github-pages**

2. **Ajuste as regras de proteção:**
   - Em **Deployment branches**, selecione:
     - **All branches** (permite qualquer branch)
     - OU **Selected branches** e adicione `main` e `github-pages`

3. **Salve as alterações**

### Opção 2: Usar apenas a branch `main` (Atual)

O workflow já está configurado para usar apenas a branch `main`. Isso deve funcionar se:

1. O ambiente "github-pages" permitir a branch `main`
2. Você fizer push para a branch `main`

**Para fazer deploy:**
```bash
git checkout main
git add .
git commit -m "Deploy para GitHub Pages"
git push origin main
```

### Opção 3: Remover a Proteção do Ambiente

Se você não precisa de proteção:

1. Vá para **Settings** → **Environments**
2. Clique em **github-pages**
3. Remova todas as regras de proteção
4. Salve

## Verificação

Após ajustar, verifique:

1. O workflow deve rodar sem erros na aba **Actions**
2. O deploy deve aparecer como "Deployed" no ambiente
3. O site deve estar acessível em: `https://maxrayden.github.io/your-digital-corner/`

## Nota Importante

O workflow atual está configurado para:
- Rodar apenas na branch `main`
- Usar base path `/your-digital-corner/` para GitHub Pages
- Fazer deploy automático quando você faz push para `main`

Se você quiser usar a branch `github-pages` separadamente, você precisa:
1. Ajustar as regras de proteção do ambiente para permitir `github-pages`
2. OU mudar o workflow para usar `github-pages` ao invés de `main`

