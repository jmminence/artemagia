# Guía Completa: Configuración de Zoho Mail para Artemagia

## 📋 Resumen
Esta guía te ayudará a configurar Zoho Mail gratuito con tu dominio personalizado para el proyecto Artemagia.

---

## ✅ Requisitos Previos
- Tener un dominio registrado (ej: artemagia.com)
- Acceso al panel de administración DNS de tu dominio
- Cuenta de correo personal para registro

---

## 🚀 PASO 1: Registro en Zoho Mail

1. Ve a: https://www.zoho.com/mail/
2. Haz clic en **"Sign Up Now"** o **"Registrarse"**
3. Selecciona el plan **"FOREVER FREE"** (Hasta 5 usuarios)
4. Ingresa tu información:
   - Nombre de la organización: **Artemagia**
   - Correo personal (para administración)
   - Contraseña segura

---

## 🔧 PASO 2: Agregar Tu Dominio

1. Una vez dentro del panel de Zoho
2. Ve a **"Add Domain"** o **"Agregar Dominio"**
3. Ingresa tu dominio: `artemagia.com` (o el que tengas)
4. Selecciona el método de verificación: **TXT Record** (recomendado)

---

## 🌐 PASO 3: Verificar Tu Dominio

Zoho te dará un código de verificación. Debes agregarlo como registro TXT en tu DNS:

### En tu proveedor de DNS (GoDaddy, Namecheap, Cloudflare, etc.):

```
Tipo: TXT
Nombre: @ (o déjalo en blanco)
Valor: zb-código-que-te-dio-zoho
TTL: 3600 (o automático)
```

**Ejemplo del código:**
```
zb12345678901234567890123456789012
```

### Espera y Verifica:
- Espera 5-15 minutos (la propagación DNS puede tardar)
- Vuelve a Zoho y haz clic en **"Verify"** o **"Verificar"**
- ✅ Si está correcto, verás: "Domain verified successfully"

---

## 📧 PASO 4: Configurar Registros MX (Para Recibir Correos)

En tu proveedor de DNS, agrega estos registros MX:

```
Prioridad: 10
Tipo: MX
Nombre: @ (o tu dominio)
Valor: mx.zoho.com
TTL: 3600

Prioridad: 20
Tipo: MX
Nombre: @ (o tu dominio)
Valor: mx2.zoho.com
TTL: 3600

Prioridad: 50
Tipo: MX
Nombre: @ (o tu dominio)
Valor: mx3.zoho.com
TTL: 3600
```

⚠️ **Importante:** Si ya tienes registros MX (de Gmail, Outlook, etc.), **debes eliminarlos primero**.

---

## 🔐 PASO 5: Configurar SPF (Para Enviar Correos)

Agrega este registro TXT para validar que tus correos no sean spam:

```
Tipo: TXT
Nombre: @ (o tu dominio)
Valor: v=spf1 include:zoho.com ~all
TTL: 3600
```

**Si ya tienes un registro SPF**, modifícalo para incluir Zoho:
```
v=spf1 include:zoho.com include:otro-servicio.com ~all
```

---

## 🔑 PASO 6: Configurar DKIM (Autenticación de Correo)

1. En el panel de Zoho, ve a **"Email Configuration"** → **"DKIM"**
2. Zoho generará un registro DKIM automáticamente
3. Copia el registro y agrégalo a tu DNS:

```
Tipo: TXT
Nombre: zoho._domainkey (o el que te indique Zoho)
Valor: (string largo que te proporciona Zoho, comenzará con v=DKIM1)
TTL: 3600
```

---

## 📨 PASO 7: Configurar DMARC (Opcional pero Recomendado)

```
Tipo: TXT
Nombre: _dmarc
Valor: v=DMARC1; p=none; rua=mailto:postmaster@artemagia.com
TTL: 3600
```

---

## 👤 PASO 8: Crear Cuentas de Correo

1. En el panel de Zoho, ve a **"Users"** → **"Add User"**
2. Crea las cuentas que necesites (hasta 5 gratis):
   - `contacto@artemagia.com`
   - `info@artemagia.com`
   - `ventas@artemagia.com`
   - `soporte@artemagia.com`
   - etc.

3. Establece contraseñas seguras para cada cuenta

---

## 💻 PASO 9: Acceder a Tu Correo

### Opción 1: Webmail (Principal)
- URL: https://mail.zoho.com
- Ingresa con: `tucorreo@artemagia.com`
- Contraseña: la que configuraste

### Opción 2: App Móvil
- Descarga **Zoho Mail** desde:
  - iOS: App Store
  - Android: Google Play
- Inicia sesión con tus credenciales

---

## 📝 PASO 10: Configurar Alias de Correo (Opcional)

Si quieres que varios correos lleguen a la misma cuenta:

1. Ve a **"Users"** → Selecciona usuario
2. **"Email Aliases"** → **"Add Alias"**
3. Ejemplo: `hola@artemagia.com` → redirige a `contacto@artemagia.com`

---

## ✉️ Integración con el Formulario de Contacto de Artemagia

Para que el formulario de tu sitio web envíe correos:

### Opción A: Usar un servicio de terceros
- **EmailJS** (gratuito, 200 emails/mes)
- **Formspree** (gratuito, 50 envíos/mes)
- **Web3Forms** (gratuito, 250 envíos/mes)

### Opción B: Usar Zoho Forms API
- Requiere configuración adicional
- API disponible en: https://www.zoho.com/forms/api/

### Opción C: SMTP de Zoho (Requiere plan de pago)
- El plan gratuito NO permite SMTP para envío desde apps

---

## 🔍 Verificación Final

### Checklist de Verificación:
- [ ] Dominio verificado en Zoho
- [ ] Registros MX configurados y propagados
- [ ] Registro SPF agregado
- [ ] Registro DKIM configurado
- [ ] Cuentas de correo creadas
- [ ] Prueba de envío exitosa
- [ ] Prueba de recepción exitosa

### Herramientas para Verificar DNS:
- https://mxtoolbox.com/SuperTool.aspx
- https://dnschecker.org/
- Herramienta de Zoho: **"Check DNS Records"** en el panel

---

## 🧪 Prueba de Envío y Recepción

1. **Envía un correo de prueba:**
   - Desde Zoho webmail a tu correo personal
   - Verifica que llegue correctamente

2. **Recibe un correo de prueba:**
   - Desde tu correo personal a `contacto@artemagia.com`
   - Verifica que llegue a Zoho

3. **Verifica la carpeta de Spam** en ambos casos

---

## ⚠️ Problemas Comunes

### "Domain verification failed"
- **Solución:** Espera más tiempo (hasta 48h) para propagación DNS
- Verifica que el registro TXT esté exactamente como te lo dio Zoho

### "Not receiving emails"
- **Solución:** Verifica los registros MX en https://mxtoolbox.com
- Asegúrate de haber eliminado otros registros MX antiguos

### "Emails going to spam"
- **Solución:** Configura SPF y DKIM correctamente
- Considera agregar DMARC

### "Cannot send emails from my domain"
- **Solución:** El plan gratuito no permite IMAP/SMTP
- Usa el webmail o la app móvil de Zoho

---

## 📚 Recursos Adicionales

- Documentación oficial: https://www.zoho.com/mail/help/
- Centro de ayuda: https://help.zoho.com/portal/en/community/zoho-mail
- Video tutoriales: https://www.youtube.com/c/ZohoMail

---

## 💰 Límites del Plan Gratuito

- ✅ 5 usuarios máximo
- ✅ 5 GB de almacenamiento por usuario
- ✅ 1 dominio
- ✅ 25 MB por archivo adjunto
- ✅ Webmail y app móvil
- ❌ Sin IMAP/POP/SMTP
- ❌ Sin soporte técnico prioritario

---

## 🚀 Upgrade a Plan de Pago (Opcional)

Si necesitas más funciones:

### Zoho Mail Lite ($1 USD/usuario/mes)
- ✅ IMAP/POP/SMTP
- ✅ 5 GB por usuario
- ✅ Soporte por email

### Zoho Mail Premium ($4 USD/usuario/mes)
- ✅ Todo lo anterior
- ✅ 50 GB por usuario
- ✅ eDiscovery
- ✅ Retención de datos

---

## 📞 Contactos Útiles

**Email de Soporte Zoho:** support@zohomail.com

**Dominio configurado:** [Tu dominio aquí]

**Cuentas creadas:**
1. contacto@artemagia.com - Principal
2. info@artemagia.com - Información
3. [Agregar más según necesites]

---

## ✅ Próximos Pasos

Después de configurar Zoho Mail:

1. [ ] Actualizar la sección de contacto en el sitio web
2. [ ] Configurar firma de correo profesional
3. [ ] Establecer respuestas automáticas (si es necesario)
4. [ ] Configurar filtros y carpetas
5. [ ] Integrar formulario de contacto con servicio de terceros

---

**Fecha de configuración:** [Agregar fecha]

**Última actualización:** Octubre 2025

