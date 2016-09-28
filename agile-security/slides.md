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
 - JWT
 - OAuth2

---

## Senhas

- Senhas fracas: 123456, admin ou 18061992
- Políticas de senhas
- Armazenando senhas
- Vida sem senhas

note: Waldemar

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
- Cross Site Scripting
- Injection Attacks
- Uploads
- Tamper-proof

---

## Corrigindo HTTP headers

- Um header de cada vez
- Mais seguros com headers

---

## Sessões

- Lembre de mim
- Onde salvar estatus de sessão
- Invalidando sessões
- Cookie monster

---

## Quando um ataque acontece

- Clickjacking
- Cross Site Request Forgery (CSRF)
- Denial of Service (DoS)
- Server Side Request Forgery (SSRF)
- CORS

---

## Falhas em configurações

- Esqueci o debug com TRUE
- Monitoramento
- Principle of least privilege (verificar se é válido falar sobre)
- Rate limiting & Captchas (verificar se é válido falar sobre)
- Senhas e segredos de projeto em arquivos
- Patching e Updates

---

## Penetesting

- Elevation of privelege

---

## Continuous Security hygiene

- Mantenha sempre os padrões de segurança
- Segurança vs Usabilidade

---

## Threat Modeling

---

## OWASP Cornucopia e EOP

---

# Muito Obrigado!

<hr />
<p class="subtitle">https://github.com/jeffhsta/tdc2016</p>
