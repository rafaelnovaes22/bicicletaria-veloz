# VELOZ Bicicletaria

Site institucional em arquivo único (`index.html`, 26 KB). Sem build, sem dependência de runtime. Abrir com qualquer servidor estático:

```powershell
python -m http.server 8000
```

Produção: https://bicicletaria-veloz-production.up.railway.app

Deploy: Railway, projeto `bicicletaria-veloz`, serviço ligado ao repo com Dockerfile nginx na porta 8080.

Identidade atual: Ciclo Ype. O formulário e os botões usam o WhatsApp (11) 97356-6669 já cadastrado no site. Fotos externas e links precisam de verificação periódica.

Verificação: `node --test evals/packaging.test.mjs` e `node evals/smoke.mjs`.
