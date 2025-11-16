# 🎮 GTA 6 Countdown Game

Un contador regresivo interactivo para el lanzamiento de GTA 6 (19 de noviembre de 2026) con un juego estilo Miami Street Escape integrado y sistema de leaderboard global.

## 🌟 Características

### Contador Regresivo
- Cuenta regresiva en tiempo real hasta el lanzamiento de GTA 6
- Diseño estilo neon/cyberpunk inspirado en Vice City
- Totalmente responsive (móvil y desktop)

### Juego "Miami Street Escape"
- **Fase 1 - HEIST**: Roba la tienda
- **Fase 2 - ESCAPE**: Escapa de los policías y jefes
- Sistema de oleadas progresivas con dificultad exponencial
- Jefes cada 5 oleadas con loot de power-ups

### Sistema de Habilidades
- **Básicas**: Speed Boost, Fire Rate Boost
- **Épicas**: Multi-Shot, Bomb Ability
- **Legendarias**: Extra Life, Invisibility, Triple Epic
- **CORREGIDO**: Siempre aparecen las 3 rarezas (Básica, Épica, Legendaria)

### Leaderboard Global
- Sistema de puntuaciones global usando Cloudflare Workers KV
- Top 10 jugadores visibles
- Nombres únicos obligatorios (mínimo 2 caracteres)
- Fallback a localStorage si la API no está disponible

### Monetización
- Google AdSense integrado
- Anuncios laterales (desktop) y superior/inferior (móvil)
- Botón para ocultar/mostrar anuncios

## 🏗️ Arquitectura

### Frontend
- **index.html**: Página principal con todo el código integrado
- HTML5 Canvas para el juego
- Vanilla JavaScript (sin dependencias)
- CSS moderno con gradientes y animaciones

### Backend
- **worker.js**: Cloudflare Worker que maneja la API del leaderboard
- **Cloudflare Workers KV**: Base de datos para almacenar scores
- Endpoints:
  - `GET /api/leaderboard` - Obtener top 10 scores
  - `POST /api/score` - Guardar nuevo score

### Configuración
- **wrangler.toml**: Configuración del Cloudflare Worker
- **API_CONFIG** en index.html: Activa/desactiva el uso de la API

## 🚀 Deployment

Ver [DEPLOYMENT.md](./DEPLOYMENT.md) para instrucciones detalladas de deployment en Cloudflare.

### Quick Start

1. **Deployar sitio web**:
   - Sube `index.html` a Cloudflare Pages
   - Configura dominio personalizado

2. **Deployar backend**:
   ```bash
   npm install -g wrangler
   wrangler login
   # Editar wrangler.toml con tu KV namespace ID
   wrangler deploy
   ```

3. **Probar**:
   - Visita tu dominio
   - Juega y verifica que los scores se guarden

## 🎮 Controles del Juego

- **Movimiento**: Flechas o WASD
- **Robar tienda**: SPACE (cerca de la tienda)
- **Disparar**: SHIFT, X o Z
- **Bomba**: B (si está desbloqueada)

## 📝 Cambios Realizados

### ✅ Problemas Corregidos

1. **Sistema de habilidades**: Ahora siempre muestra exactamente 1 habilidad de cada rareza (Básica, Épica, Legendaria) en posiciones aleatorias

2. **Sistema de nombres**:
   - Eliminado el uso de "Anonymous"
   - Modal personalizado obligatorio para ingresar nombre
   - Validación mínimo 2 caracteres
   - Recuerda el último nombre usado

3. **Leaderboard duplicado**: Con nombres únicos obligatorios, ya no habrá múltiples "Anonymous" en el leaderboard

4. **Base de datos global**: Implementado sistema con Cloudflare Workers KV para leaderboard compartido entre todos los jugadores

### 🔧 Mejoras Técnicas

- Sistema async/await para llamadas a la API
- Fallback a localStorage cuando la API no está disponible
- Loading states en el leaderboard
- Validación de datos en backend
- CORS configurado correctamente
- Sanitización de nombres

## 🛠️ Tecnologías Utilizadas

- **Frontend**:
  - HTML5 Canvas
  - Vanilla JavaScript (ES6+)
  - CSS3 (Gradients, Animations, Flexbox, Grid)
  - Google Fonts (Bebas Neue, Orbitron)

- **Backend**:
  - Cloudflare Workers
  - Cloudflare Workers KV
  - Wrangler CLI

- **Hosting**:
  - Cloudflare Pages (sitio web)
  - Cloudflare Workers (API)

## 📊 Estructura del Proyecto

```
gta6count/
├── index.html          # Página principal con todo el código
├── worker.js           # Cloudflare Worker (API del leaderboard)
├── wrangler.toml       # Configuración del Worker
├── DEPLOYMENT.md       # Guía de deployment detallada
└── README.md           # Este archivo
```

## 🎨 Personalización

### Cambiar colores
Los colores principales están definidos en los gradientes CSS y en el código del juego:

```css
/* Colores principales */
#FF006E  /* Rosa/Magenta principal */
#06B6D4  /* Cyan */
#A855F7  /* Púrpura */
#EC4899  /* Rosa claro */
```

### Ajustar dificultad
En el código JavaScript, busca:

```javascript
// Velocidad de spawn de policías (ms)
if (now - gameState.lastCopSpawn > 8000) { // Cambiar 8000

// Multiplicador de dificultad
const copsToSpawn = Math.floor(3 * Math.pow(1.5, gameState.copWaveNumber));
```

### Cambiar fecha de lanzamiento
```javascript
const releaseDate = new Date('November 19, 2026 00:00:00').getTime();
```

## 🔒 Seguridad

### Recomendaciones para producción

1. **Rate Limiting**: Implementar límite de requests por IP en el Worker
2. **Validación de Scores**: Agregar validación de scores máximos razonables
3. **Sanitización**: El Worker ya sanitiza nombres, pero puedes agregar más validaciones
4. **Captcha**: Para evitar bots, considera agregar hCaptcha o reCAPTCHA

### Ejemplo de Rate Limiting

```javascript
// En worker.js
const RATE_LIMIT = 10; // máximo 10 scores por hora por IP
// Implementar lógica usando KV para trackear IPs
```

## 📈 Límites del Plan Gratuito de Cloudflare

- **Workers**: 100,000 requests/día
- **KV**: 100,000 reads/día, 1,000 writes/día
- **Pages**: Builds ilimitados

Para un sitio pequeño/mediano, esto es suficiente. Si creces, considera el plan Pro ($5/mes).

## 🐛 Problemas Conocidos

- Ninguno actualmente

## 🤝 Contribuciones

Este es un proyecto personal, pero si encuentras bugs o tienes sugerencias:

1. Abre un issue describiendo el problema
2. Si tienes una solución, crea un pull request

## 📄 Licencia

Este proyecto no está afiliado con Rockstar Games o Take-Two Interactive.

## 🙏 Créditos

- **Fuentes**: Google Fonts (Bebas Neue, Orbitron)
- **Hosting**: Cloudflare Pages & Workers
- **Inspiración**: GTA Vice City aesthetic

---

## 📞 Contacto

Si tienes preguntas sobre el deployment o el código, consulta [DEPLOYMENT.md](./DEPLOYMENT.md).

---

**Desarrollado con ❤️ para los fans de GTA**

⏰ GTA 6 llegará el 19 de noviembre de 2026... ¡no olvides jugar mientras esperas!
