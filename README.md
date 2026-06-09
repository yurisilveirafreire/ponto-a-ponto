# 🎾 Ponto a Ponto

Plataforma de entretenimento esportivo social. Torcida com propósito: parte de cada
torcida vai para um **projeto social**, parte é rateada entre quem acertou o vencedor,
e parte fica com a casa.

> Linguagem amigável, voltada para impacto social — **não** é uma casa de apostas.

## Como rodar (offline / teste)

Abra o arquivo `index.html` em qualquer navegador (celular ou computador).
Os dados ficam salvos no próprio navegador (localStorage) — funciona 100% offline.

**Login admin de teste:** `admin@pap.com` / senha `pap123`
**Torcedor:** crie sua conta em *Cadastrar* (login = e-mail, senha = CPF).

## Como publicar no Firebase Hosting

Pré-requisitos: ter o [Firebase CLI](https://firebase.google.com/docs/cli) instalado.

```bash
# 1. instalar o CLI (uma vez só)
npm install -g firebase-tools

# 2. entrar na sua conta Google/Firebase
firebase login

# 3. apontar para o seu projeto (substitua pelo seu Project ID)
firebase use --add

# 4. publicar
firebase deploy --only hosting
```

Ao final, o Firebase mostra a URL pública (ex: `https://SEU-PROJECT-ID.web.app`).

## Estrutura

| Arquivo | Função |
|---|---|
| `index.html` | O app inteiro (HTML + CSS + JS num arquivo só) |
| `firebase.json` | Configuração do Firebase Hosting |
| `.firebaserc` | Qual projeto Firebase usar |
| `.gitignore` | Arquivos que não vão pro repositório |

## Roadmap

- [x] Protótipo offline (localStorage)
- [ ] Publicar no Firebase Hosting
- [ ] Migrar dados para o Firestore (tempo real, multiusuário)
- [ ] Login real (Firebase Auth)
- [ ] Pix de verdade via Mercado Pago (QR dinâmico + webhook)

---

A camada de dados está isolada no objeto `DB` dentro do `index.html`, justamente para
facilitar a troca do localStorage pelo Firestore sem reescrever o resto do app.
