# 🚀 Guía de Deployment para Cloudflare

Esta guía te ayudará a subir tu proyecto GTA 6 Countdown a Cloudflare Pages con el backend de Workers KV.

## 📋 Requisitos Previos

1. **Cuenta de Cloudflare** (gratuita)
2. **Dominio configurado en Cloudflare** (cuentaregresivagta6.com)
3. **Node.js instalado** (para Wrangler CLI)
4. **Git instalado**

---

## 🎯 PARTE 1: Deployment del Sitio Web (Cloudflare Pages)

### Opción A: Deployment Directo (Recomendado para principiantes)

1. **Iniciar sesión en Cloudflare**
   - Ve a [dash.cloudflare.com](https://dash.cloudflare.com)
   - Selecciona tu cuenta

2. **Crear un nuevo proyecto en Pages**
   - En el panel izquierdo, selecciona **"Workers & Pages"**
   - Click en **"Create application"**
   - Selecciona la pestaña **"Pages"**
   - Click en **"Upload assets"**

3. **Subir archivos**
   - Arrastra el archivo `index.html` a la zona de carga
   - Click en **"Deploy site"**
   - Espera a que termine el deployment

4. **Configurar dominio personalizado**
   - Una vez deployado, ve a **"Custom domains"**
   - Click en **"Set up a custom domain"**
   - Ingresa: `cuentaregresivagta6.com`
   - Click en **"Continue"**
   - Cloudflare configurará automáticamente los DNS
   - Espera 5-10 minutos para que los cambios de DNS se propaguen

### Opción B: Deployment con Git (Recomendado para actualizaciones frecuentes)

1. **Conectar tu repositorio**
   - En Cloudflare Pages, click en **"Connect to Git"**
   - Selecciona tu proveedor de Git (GitHub, GitLab)
   - Autoriza a Cloudflare
   - Selecciona el repositorio `gta6count`

2. **Configurar el build**
   - **Framework preset**: None
   - **Build command**: (dejar vacío)
   - **Build output directory**: `/`
   - Click en **"Save and Deploy"**

3. **Configurar dominio personalizado** (igual que Opción A, paso 4)

---

## 🗄️ PARTE 2: Configurar Base de Datos (Workers KV)

### Paso 1: Crear KV Namespace

1. **Ir a Workers & Pages**
   - En Cloudflare Dashboard, ve a **"Workers & Pages"**
   - Click en **"KV"** en la barra lateral

2. **Crear namespace**
   - Click en **"Create namespace"**
   - Nombre: `gta6-leaderboard`
   - Click en **"Add"**
   - **Copia el ID** que se genera (lo necesitarás después)

### Paso 2: Instalar Wrangler CLI

```bash
# Instalar Wrangler globalmente
npm install -g wrangler

# Autenticar con Cloudflare
wrangler login
```

### Paso 3: Configurar el Worker

1. **Editar wrangler.toml**
   - Abre el archivo `wrangler.toml`
   - Reemplaza `YOUR_KV_NAMESPACE_ID_HERE` con el ID que copiaste

   Ejemplo:
   ```toml
   [[kv_namespaces]]
   binding = "LEADERBOARD_KV"
   id = "abc123def456ghi789"  # Tu ID aquí
   ```

2. **Configurar la ruta del Worker**
   - En el mismo archivo `wrangler.toml`, actualiza la ruta:
   ```toml
   # Para usar en tu dominio
   routes = [
     { pattern = "cuentaregresivagta6.com/api/*", zone_name = "cuentaregresivagta6.com" }
   ]
   ```

### Paso 4: Deployar el Worker

```bash
# Desde la carpeta del proyecto
cd /ruta/a/gta6count

# Deployar el worker
wrangler deploy
```

Si todo salió bien, verás un mensaje como:
```
✅ Uploaded gta6-leaderboard-worker
✅ Deployed gta6-leaderboard-worker
   https://gta6-leaderboard-worker.tu-cuenta.workers.dev
```

### Paso 5: Verificar que funciona

1. **Probar el endpoint**
   ```bash
   # Ver leaderboard vacío
   curl https://cuentaregresivagta6.com/api/leaderboard

   # Debería retornar: []
   ```

2. **Probar guardar un score**
   ```bash
   curl -X POST https://cuentaregresivagta6.com/api/score \
     -H "Content-Type: application/json" \
     -d '{"name":"TestPlayer","score":100}'

   # Debería retornar el leaderboard con tu score
   ```

---

## 🔄 PARTE 3: Actualizar el Sitio Web

Si hiciste cambios al código y quieres actualizar el sitio:

### Con Git (automático)
- Haz commit de tus cambios
- Haz push a tu repositorio
- Cloudflare Pages detectará automáticamente los cambios y re-deployará

### Sin Git (manual)
1. Ve a tu proyecto en Cloudflare Pages
2. Click en **"Upload new version"**
3. Arrastra el archivo `index.html` actualizado
4. Click en **"Deploy"**

---

## ⚙️ PARTE 4: Activar la API en el Frontend

Por defecto, el código está configurado para usar la API. Si quieres desactivarla temporalmente (por ejemplo, para testing local):

1. Abre `index.html`
2. Busca la línea:
   ```javascript
   const API_CONFIG = {
       enabled: true,  // Cambia a false para usar localStorage
       baseUrl: window.location.origin,
   };
   ```
3. Cambia `enabled: true` a `enabled: false` si quieres usar solo localStorage

---

## 🧪 Testing Local

### Probar el Worker localmente

```bash
# Iniciar el worker en modo desarrollo
wrangler dev

# El worker estará disponible en http://localhost:8787
```

### Probar el sitio web localmente

Puedes usar cualquier servidor web simple:

```bash
# Opción 1: Python
python -m http.server 8080

# Opción 2: Node.js
npx serve .

# Opción 3: Abrir directamente index.html en el navegador
```

**Importante**: Si pruebas localmente con el Worker remoto, asegúrate de que la API esté configurada correctamente en `API_CONFIG`.

---

## 🐛 Troubleshooting

### El leaderboard no guarda scores

1. **Verificar que el Worker esté deployado**
   ```bash
   wrangler whoami
   wrangler deployments list
   ```

2. **Verificar los logs del Worker**
   ```bash
   wrangler tail
   ```

3. **Verificar CORS**
   - Asegúrate de que el Worker tenga los headers CORS correctos
   - Revisa la consola del navegador (F12) para ver errores

### El dominio no funciona

1. **Verificar DNS**
   - Ve a Cloudflare Dashboard → DNS
   - Asegúrate de que haya un registro CNAME apuntando a tu Pages project

2. **Esperar propagación**
   - Los cambios de DNS pueden tardar hasta 24 horas
   - Usa [whatsmydns.net](https://www.whatsmydns.net) para verificar

### Error 403 o 404 en /api/*

1. **Verificar las rutas en wrangler.toml**
   - El pattern debe coincidir con tu dominio
   - Debe incluir `/api/*`

2. **Verificar que el Worker esté activo**
   - Ve a Workers & Pages → Tu worker
   - Verifica el estado

---

## 📊 Monitoreo

### Ver estadísticas del Worker

```bash
# Ver logs en tiempo real
wrangler tail

# Ver analytics
# Ve a Cloudflare Dashboard → Workers & Pages → Tu worker → Analytics
```

### Ver estadísticas de Pages

- Ve a Cloudflare Dashboard → Workers & Pages → Tu sitio
- Click en **"Analytics"**

---

## 💰 Límites del Plan Gratuito

- **Workers**: 100,000 requests/día
- **KV**: 100,000 reads/día, 1,000 writes/día, 1GB storage
- **Pages**: Builds ilimitados, 500 builds/mes con concurrencia

Para un sitio pequeño-mediano, esto es más que suficiente.

---

## 🔐 Seguridad

### Rate Limiting (Opcional)

Para evitar spam en el leaderboard, puedes agregar rate limiting al Worker:

```javascript
// En worker.js, agregar antes de guardar:
const clientIP = request.headers.get('CF-Connecting-IP');
// Implementar lógica de rate limiting por IP
```

### Validación de Scores (Opcional)

Actualmente cualquier score se guarda. Para validación más estricta:

```javascript
// En worker.js, agregar validación:
if (score > 10000) { // Score máximo razonable
  return new Response(JSON.stringify({ error: 'Invalid score' }), {
    status: 400,
    headers: { 'Content-Type': 'application/json', ...corsHeaders },
  });
}
```

---

## 📞 Soporte

Si tienes problemas:

1. **Cloudflare Community**: [community.cloudflare.com](https://community.cloudflare.com)
2. **Cloudflare Docs**: [developers.cloudflare.com](https://developers.cloudflare.com)
3. **Wrangler Docs**: [developers.cloudflare.com/workers/wrangler](https://developers.cloudflare.com/workers/wrangler)

---

## ✅ Checklist de Deployment

- [ ] Cuenta de Cloudflare creada
- [ ] Dominio configurado en Cloudflare
- [ ] Sitio web deployado en Pages
- [ ] Dominio personalizado configurado
- [ ] KV Namespace creado
- [ ] Wrangler CLI instalado
- [ ] wrangler.toml configurado con KV ID correcto
- [ ] Worker deployado
- [ ] API funcionando (prueba con curl)
- [ ] API_CONFIG.enabled = true en index.html
- [ ] Sitio web actualizado

¡Listo! Tu sitio debería estar funcionando en https://cuentaregresivagta6.com con leaderboard global.
