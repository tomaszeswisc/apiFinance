# Registro de segurança e alterações — apiFinance

> Este documento não guarda valores de senhas, tokens ou segredos. Antes de remover um arquivo rastreado, registre o commit de origem e defina como restaurar código e configurações não sigilosas.

## Inventário inicial — 15/10/2026

- Repositório: https://github.com/tomaszeswisc/apiFinance
- Arquivo `server.js`: blob SHA `05162ad24a70af64fe5b029ccb86d11c3a39783b`
- Arquivo `.env`: presente no repositório; blob SHA `f40bde3723825a1f2a0bcb968f08e74d92780c31`
- Elementos a revisar: DB_HOST, DB_USER, DB_PASS, DB_NAME, EMAIL_USER, EMAIL_PASS, JWT_SECRET
- **Código removido nesta etapa:** nenhum.
- **Credenciais substituídas nesta etapa:** nenhuma.
- **Histórico Git reescrito nesta etapa:** não.

## Problemas e ações futuras

- Retirar o arquivo `.env` do rastreamento após providenciar as variáveis no ambiente de execução; `.gitignore` sozinho não remove arquivos já rastreados.
- Substituir/rotacionar credenciais que tenham sido publicadas antes de considerar a exposição resolvida.
- Revisar eventuais credenciais também presentes em commits antigos; a limpeza de histórico é uma operação separada e exige backup e coordenação com cópias locais.
- Antes de alterar código, anotar o caminho, SHA/commit anterior, resumo do trecho afetado, motivo e procedimento de restauração neste arquivo.
- Nunca registrar valores reais de `DB_PASS`, `JWT_SECRET`, `EMAIL_PASS` ou segredos equivalentes neste documento.

## Diário de modificações

| Data | Arquivo | Operação | Alteração/remoção | Como recuperar |
|---|---|---|---|---|
| 2026-10-15 | `SECURITY_CHANGELOG.md` | Criação | Apenas documentação e inventário; nenhum código original removido | Histórico de commits do próprio arquivo |

## Recuperação

Consulte o histórico de commits em https://github.com/tomaszeswisc/apiFinance/commits e examine a versão anterior de cada arquivo pelo seu commit ou blob SHA. **Não restaure senhas antigas expostas**, pois devem ser revogadas. Para recuperar uma função ou regra segura, compare o diff e restaure somente o código necessário.

## Atualização de 15/10/2026 — modelo de ambiente

- Arquivo adicionado: `.env.example` com nomes de variáveis e valores fictícios.
- **Removido:** nada. `server.js` e `.env` não foram modificados.
- Motivo: permitir reconstruir a configuração sem guardar credenciais reais na documentação.
- Commit: https://github.com/tomaszeswisc/apiFinance/commit/064600d5c553cc55efdbb7c015f484f813fad3d2
- **Pendente:** trocar credenciais comprometidas e só então remover o `.env` rastreado do Git, com plano de limpeza do histórico.

## 15/10/2026 — retirada de arquivo de ambiente público

- Arquivo alvo: `.env` na raiz. O repositório já possui `.env.example` com estrutura de configuração fictícia e `.gitignore` que ignora `.env`.
- Operação aprovada: remover **somente** `.env` da versão atual do repositório, sem modificar código ou reescrever o histórico Git.
- Registro de recuperação: reconstituir `.env` local copiando `.env.example` e preenchendo credenciais **novas**, sem reutilizar senhas antigas.
- O histórico antigo continuará contendo dados anteriormente expostos até futura limpeza coordenada. Segredos devem ser revogados.
