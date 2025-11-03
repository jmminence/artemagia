# Zoho Mail - Inicio Rápido ⚡

## 🎯 Configuración en 10 Minutos

### 1. Registrarse
👉 https://www.zoho.com/mail/ → Sign Up → Plan FREE

### 2. Agregar Dominio
Panel Zoho → Add Domain → `artemagia.com`

### 3. Verificar Dominio (en tu proveedor DNS)
```
Tipo: TXT
Nombre: @
Valor: [código que te dio Zoho]
```

### 4. Configurar MX (en tu proveedor DNS)
```
MX | @ | mx.zoho.com | Prioridad: 10
MX | @ | mx2.zoho.com | Prioridad: 20
MX | @ | mx3.zoho.com | Prioridad: 50
```
⚠️ Elimina registros MX antiguos

### 5. Configurar SPF (en tu proveedor DNS)
```
TXT | @ | v=spf1 include:zoho.com ~all
```

### 6. Crear Cuenta de Correo
Panel Zoho → Users → Add User → `contacto@artemagia.com`

### 7. Acceder
🌐 https://mail.zoho.com
📱 App: Zoho Mail (iOS/Android)

---

## 📋 Registros DNS Resumidos

```
# Verificación
TXT | @ | zb-código-de-zoho

# MX (Recibir correos)
MX | @ | mx.zoho.com | 10
MX | @ | mx2.zoho.com | 20
MX | @ | mx3.zoho.com | 50

# SPF (Anti-spam)
TXT | @ | v=spf1 include:zoho.com ~all

# DKIM (Autenticación) - Obtener del panel Zoho
TXT | zoho._domainkey | v=DKIM1; k=rsa; p=...

# DMARC (Opcional)
TXT | _dmarc | v=DMARC1; p=none; rua=mailto:postmaster@artemagia.com
```

---

## ✅ Checklist Rápido

- [ ] Cuenta Zoho creada
- [ ] Dominio agregado
- [ ] TXT verificación → ✅
- [ ] Registros MX → ✅
- [ ] SPF configurado → ✅
- [ ] DKIM configurado → ✅
- [ ] Usuario creado
- [ ] Prueba envío/recepción → ✅

---

## 🔧 Herramientas de Verificación

- **MX Check:** https://mxtoolbox.com/SuperTool.aspx
- **DNS Check:** https://dnschecker.org/
- **Mail Tester:** https://www.mail-tester.com/

---

## 💡 Correos Sugeridos para Artemagia

- `contacto@artemagia.com` ⭐ Principal
- `info@artemagia.com` - Información
- `ventas@artemagia.com` - Ventas
- `hola@artemagia.com` - Alternativa

**Límite gratuito:** 5 cuentas

---

## ⚠️ Recuerda

- ❌ Plan gratuito NO tiene IMAP/POP
- ✅ Usa webmail (mail.zoho.com) o app móvil
- ⏱️ DNS tarda 5-15 min en propagar (máx 48h)
- 📧 25 MB máximo por adjunto

---

## 🆘 Ayuda Rápida

**Problema:** No recibo correos
**Solución:** Verifica MX en mxtoolbox.com

**Problema:** Mis correos van a spam
**Solución:** Configura SPF + DKIM + DMARC

**Problema:** No puedo verificar el dominio
**Solución:** Espera más tiempo (hasta 48h)

---

📄 **Guía Completa:** Ver `CONFIGURACION-ZOHO-MAIL.md`

