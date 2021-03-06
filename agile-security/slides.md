# Agile Security

<hr />
<h4 class="nickname subtitle">Jeff Stachelski - <span>@jeffhsta</span></h4>
<h4 class="nickname subtitle">Waldemar Neto - <span>@waldemarnt</span></h4>

Note: apresentação

---

## Agile Security

- Mindset de segurança em um ambiente ágil

---

## Porque?

- Aplicação
 - Pacote
 - Auditoria externa
 - Cloud computing
- Desenvolvimento
 - Senhas fracas
 - 2FA
 - GPG
 - Git
 - Conhecimentos de autenticação

---

## Git e GPG

```bash
$ git config --global --edit
```

```
[user]
  email = jeffhsta@riseup.net
  name = Jeff Stachelski
  signingkey = C39C19AC

[commit]
	gpgsign = true

[rebase]
	gpgsign = true
```

---

## Git e GPG

![David commit](images/david-commit.png)

---

## Demo time

![Demo gif](images/demo-time.gif)

---

## Segredos compartilhados

- pass
- Vault
- 1Password for teams

---

## Criptografando canais de comunicação

- **H**ypper
- **T**ext
- **T**ransport
- **P**rotocol
- **S**ecure

---

## Autenticação

- Baseada em HTML form
- Mais de um fator de autenticação
- Baseadas em token
 - Basic
 - JWT (JSON Web Token)
 - OAuth2

---

## Dois fatores de autenticação no time

![TW team](images/tw-team.png)

---

## Senhas

- Senhas fracas: 123456, admin ou 18061992
- Políticas de senhas
- Armazenando senhas
- Vida sem senhas

---

## Criptografia e Hashing

- Plaintext != Encoding != Encryption != Hashing
 - Criptografia
 - Hashing

---

## Não reinvente a roda

- Bibliotecas de criptografia existentes
- Algoritmos conhecidos como:
 - AES
 - RSA
 - SHA512
 - bcrypt

---

## Gerenciamento de reset de senhas

note: Waldemar até aqui

---

## Validação de dados de entrada

- Validar e sanitizar os dados de entrada
- Sanitizar os dados de saída
- Cross Site Scripting (XSS)
- Injection Attacks
- Uploads
- Tamper-proof

---

## Corrigindo falhas com HTTP headers

- Um header de cada vez
- Mais seguros com headers

note: fonte https://wiki.mozilla.org/Security/CSP/Specification

---

## Demo time

![Demo gif](images/demo-time2.gif)

---

## Sessões

- Lembre de mim
- Onde salvar estatus de sessão
- Invalidando sessões
- Cookie monster
- Local Storage

note: O webserver deve lembrar do estado da sessão para ter uma maior segurança
dos dados.

---

## Ataques comuns

- Clickjacking
- Cross Site Request Forgery (CSRF)
- Denial of Service (DoS)
- Server Side Request Forgery (SSRF)
- CORS

---

## Evitar Clickjacking

```
# Disallow embedding. All iframes etc. will be blank, or contain
# a browser specific error page.
Content-Security-Policy: frame-ancestors 'none'

# Allow embedding of own content only.
Content-Security-Policy: frame-ancestors 'self'

# Allow specific origins to embed this content
Content-Security-Policy: frame-ancestors example.com wikipedia.org
```

---

## Falhas em configurações

- Esqueci o debug com TRUE
- Monitoramento
- Principle of least privilege
- Rate limiting & Captchas (verificar se é válido falar sobre)
- Senhas e segredos de projeto em arquivos
- Patching e Updates

---

## Demo time (Docker)

![Demo gif](images/demo-time3.gif)

---

## Penetesting

- OWASP top 10
- Ferramentas
 - OWASP ZAP
 - Burp Suite

---

## Continuous Security hygiene

- Mantenha sempre os padrões de segurança
- Segurança vs Usabilidade

---

## Threat Modeling

---

## OWASP Cornucopia e EOP

- Microsoft Elevation of privelege
- OWASP Cornucopia

---

# Muito Obrigado!

<hr />
<p class="subtitle">https://github.com/jeffhsta/tdc2016</p>
