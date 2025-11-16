# 🔊 Audio Implementation Guide - GTA 6 Countdown Game

Esta guía explica cómo está implementado el sistema de audio y cómo agregar nuevos sonidos al juego.

---

## 📋 Índice

1. [Sistema de Audio](#sistema-de-audio)
2. [AudioManager API](#audiomanager-api)
3. [Sonidos Implementados](#sonidos-implementados)
4. [Cómo Agregar Nuevos Sonidos](#cómo-agregar-nuevos-sonidos)
5. [Testing y Debug](#testing-y-debug)
6. [Troubleshooting](#troubleshooting)

---

## 🎵 Sistema de Audio

### Arquitectura

El juego utiliza un `AudioManager` centralizado que maneja:
- ✅ **Música de fondo** con loops seamless y fade in/out
- ✅ **Efectos de sonido** con soporte para variaciones aleatorias
- ✅ **Mute global** con persistencia en localStorage
- ✅ **Volumen independiente** para música y SFX
- ✅ **Fallback automático** de MP3 a OGG
- ✅ **Clonación de audio** para permitir overlapping

### Ubicación del Código

El `AudioManager` está implementado en `index.html` líneas 774-1021:

```javascript
class AudioManager {
    constructor() {
        this.sounds = {};
        this.music = {};
        this.currentMusic = null;
        this.isMuted = false;
        this.musicVolume = 0.3;  // 30% volumen música
        this.sfxVolume = 0.5;     // 50% volumen SFX
        // ...
    }
}

const audioManager = new AudioManager();
```

---

## 📚 AudioManager API

### Métodos Principales

#### `playMusic(name, fadeIn = true)`
Reproduce música de fondo con loop automático.

```javascript
// Reproducir música del menú con fade in
audioManager.playMusic('menu');

// Reproducir música de juego sin fade in
audioManager.playMusic('game', false);

// Reproducir música de game over
audioManager.playMusic('gameOver', false);
```

**Música disponible**:
- `'menu'` - Música del menú principal (no implementado aún)
- `'game'` - Música durante el gameplay
- `'gameOver'` - Sting de game over

---

#### `stopMusic(fadeOut = true)`
Detiene la música actual.

```javascript
// Detener con fade out
audioManager.stopMusic();

// Detener abruptamente
audioManager.stopMusic(false);
```

---

#### `playSFX(name, volume = 1.0)`
Reproduce un efecto de sonido.

```javascript
// Reproducir disparo normal
audioManager.playSFX('shoot');

// Reproducir explosión más fuerte (120% volumen)
audioManager.playSFX('bombExplosion', 1.2);

// Reproducir footstep más suave (70% volumen)
audioManager.playSFX('footstep', 0.7);
```

**Si hay variaciones** (array de sonidos), se elige una al azar automáticamente.

---

#### `toggleMute()`
Activa/desactiva el mute global.

```javascript
const isMuted = audioManager.toggleMute();
console.log(isMuted ? 'Muted' : 'Unmuted');
```

El estado se guarda en `localStorage`.

---

#### `setMusicVolume(volume)` / `setSFXVolume(volume)`
Ajusta volúmenes (0.0 a 1.0).

```javascript
audioManager.setMusicVolume(0.5);  // 50%
audioManager.setSFXVolume(0.8);    // 80%
```

---

## 🎮 Sonidos Implementados

### Música de Fondo

| Evento | Sonido | Ubicación en Código |
|--------|--------|---------------------|
| Robar la tienda | `playMusic('game')` | `checkRobbery()` (línea 1471) |
| Game Over | `playMusic('gameOver', false)` | `showGameOver()` (línea 2136) |

### Acciones del Jugador

| Evento | Sonido | Ubicación en Código | Volumen |
|--------|--------|---------------------|---------|
| Disparar normal | `playSFX('shoot')` | `shoot()` (línea 1569) | Default |
| Disparar multi-shot | `playSFX('multishot')` | `shoot()` (línea 1567) | Default |
| Colocar bomba | `playSFX('bombPlace')` | `placeBomb()` (línea 1588) | Default |
| Explosión de bomba | `playSFX('bombExplosion', 1.2)` | `updateBombs()` (línea 1599) | 120% |
| Jugador recibe daño | `playSFX('playerHit')` | `updateCops()` (línea 2114) | Default |
| Jugador muere | `playSFX('playerDeath')` | `updateCops()` (línea 2107) | Default |

### Enemigos

| Evento | Sonido | Ubicación en Código | Volumen |
|--------|--------|---------------------|---------|
| Boss aparece | `playSFX('bossSpawn', 1.2)` | `spawnCops()` (línea 1530) | 120% |
| Boss recibe daño | `playSFX('bossHurt', 0.8)` | `updateBullets()` (línea 1700) | 80% |
| Boss muere | `playSFX('bossDeath', 1.0)` | `updateBullets()` (línea 1673) | Default |
| Cop muere | `playSFX('copDeath', 0.7)` | `updateBullets()` (línea 1675) | 70% |

### Power-Ups y Habilidades

| Evento | Sonido | Ubicación en Código |
|--------|--------|---------------------|
| Power-up aparece | `playSFX('powerupAppear')` | `dropPowerUp()` (línea 1721) |
| Power-up colectado | `playSFX('powerupCollect')` | `checkPowerUpCollection()` (línea 1731) |
| Habilidad Básica | `playSFX('abilityBasic')` | `startAbilitySelection()` (línea 1759) |
| Habilidad Épica | `playSFX('abilityEpic')` | `startAbilitySelection()` (línea 1761) |
| Habilidad Legendaria | `playSFX('abilityLegendary')` | `startAbilitySelection()` (línea 1763) |
| Extra Life | `playSFX('extraLife')` | `applyAbility()` (línea 1925) |
| Invisibilidad ON | `playSFX('invisibilityOn')` | `applyAbility()` (línea 1930) |
| Invisibilidad OFF | `playSFX('invisibilityOff')` | `updatePlayer()` (línea 1948) |

### UI y Eventos

| Evento | Sonido | Ubicación en Código |
|--------|--------|---------------------|
| Click en botón | `playSFX('uiClick')` | `openGame()`, `toggleAudio()`, etc. |
| Robar tienda | `playSFX('robbery')` | `checkRobbery()` (línea 1470) |
| Nueva wave empieza | `playSFX('waveStart', 0.8)` | `updateCops()` (línea 2017) |

---

## ➕ Cómo Agregar Nuevos Sonidos

### Paso 1: Agregar la Ruta en AudioManager

Edita `index.html` línea ~800-840 y agrega tu sonido en `sfxPaths`:

```javascript
this.sfxPaths = {
    // ... existing sounds ...

    // Tu nuevo sonido
    miNuevoSonido: './sounds/sfx/categoria/sfx_mi_sonido',

    // Si quieres variaciones aleatorias
    miSonidoVariado: [
        './sounds/sfx/categoria/sfx_mi_sonido_01',
        './sounds/sfx/categoria/sfx_mi_sonido_02',
        './sounds/sfx/categoria/sfx_mi_sonido_03'
    ]
};
```

### Paso 2: Crear los Archivos de Audio

Coloca tus archivos en la carpeta apropiada:

```
sounds/
  sfx/
    categoria/
      sfx_mi_sonido.mp3
      sfx_mi_sonido.ogg
```

**IMPORTANTE**: Debes tener ambos formatos (MP3 y OGG) para compatibilidad.

### Paso 3: Reproducir el Sonido

En el lugar apropiado del código:

```javascript
// Reproducir con volumen default
audioManager.playSFX('miNuevoSonido');

// O con volumen personalizado
audioManager.playSFX('miNuevoSonido', 0.8);  // 80%
```

### Ejemplo Completo

**Caso**: Agregar sonido de "powerup perdido" cuando expira.

1. **Agregar ruta**:
```javascript
// En this.sfxPaths
powerupExpire: './sounds/sfx/powerups/sfx_powerup_expire',
```

2. **Crear archivos**:
```
sounds/sfx/powerups/sfx_powerup_expire.mp3
sounds/sfx/powerups/sfx_powerup_expire.ogg
```

3. **Reproducir**:
```javascript
// En la función que elimina power-ups expirados
if (Date.now() - powerUp.createdAt > 10000) {
    audioManager.playSFX('powerupExpire', 0.6);
    powerUps.splice(i, 1);
}
```

---

## 🧪 Testing y Debug

### Verificar que el Audio Está Cargado

Abre la consola del navegador (F12) y ejecuta:

```javascript
// Ver todos los sonidos cargados
console.log(audioManager.sounds);

// Ver toda la música cargada
console.log(audioManager.music);

// Probar un sonido manualmente
audioManager.playSFX('shoot');
```

### Verificar Estado del AudioManager

```javascript
// Ver si está muteado
console.log('Muted:', audioManager.isMuted);

// Ver volúmenes
console.log('Music Volume:', audioManager.musicVolume);
console.log('SFX Volume:', audioManager.sfxVolume);

// Ver música actual
console.log('Current Music:', audioManager.currentMusic);
```

### Testing de Nuevos Sonidos

1. **Abre el juego** en el navegador
2. **Abre la consola** (F12)
3. **Ejecuta** manualmente:

```javascript
// Probar sonido nuevo
audioManager.playSFX('miNuevoSonido');

// Probar con diferentes volúmenes
audioManager.playSFX('miNuevoSonido', 0.5);
audioManager.playSFX('miNuevoSonido', 1.0);
audioManager.playSFX('miNuevoSonido', 1.5);
```

---

## 🔧 Troubleshooting

### "El sonido no se reproduce"

**Posibles causas**:

1. **Archivos no existen**
   - Verifica que existan los archivos MP3 y OGG
   - Verifica la ruta exacta

2. **Nombre incorrecto**
   - Verifica que el nombre en `sfxPaths` coincida con el usado en `playSFX()`
   - JavaScript es case-sensitive: `'shoot'` ≠ `'Shoot'`

3. **AudioManager muteado**
   ```javascript
   audioManager.isMuted = false;
   ```

4. **Navegador bloqueando autoplay**
   - Los navegadores modernos requieren interacción del usuario antes de reproducir audio
   - El AudioManager espera un click para precargar
   - Verifica en la consola si hay errores de "play() failed"

### "El sonido suena distorsionado o clippeado"

**Solución**: Reducir volumen

```javascript
// Cambiar el volumen base en playSFX
audioManager.playSFX('miSonido', 0.7);  // En vez de 1.0
```

O normalizar el audio a -3dB antes de exportar (ver `SOUND_ASSETS.md`).

### "La música no hace loop correctamente"

**Problema**: Click audible al reiniciar el loop.

**Solución**:
1. Asegúrate de que el archivo de audio tenga un loop perfecto (mismo volumen/frecuencia al inicio y final)
2. Usa fade in/out de 10-50ms al exportar

### "No se escucha nada en móvil"

**Problema**: iOS Safari requiere interacción explícita.

**Solución**: Ya implementado
- El `AudioManager` espera el primer click para precargar
- Si persiste, verifica que no haya errores en la consola móvil

### "Varios sonidos se solapan y suena mal"

**Solución**: Reducir volumen de sonidos frecuentes

```javascript
// Ejemplo: Reducir volumen de cop deaths (muy frecuente)
audioManager.playSFX('copDeath', 0.5);  // 50% en vez de 70%
```

---

## 📊 Volúmenes Recomendados

Basado en `SOUND_ASSETS.md`:

| Tipo de Sonido | Volumen Base | Volumen en playSFX |
|----------------|--------------|-------------------|
| Explosiones | -3dB a 0dB | 1.0 - 1.2 |
| Disparos | -6dB a -3dB | 0.8 - 1.0 |
| Boss spawn | -6dB a -3dB | 1.0 - 1.2 |
| Cop death | -12dB a -9dB | 0.6 - 0.8 |
| UI clicks | -18dB a -15dB | 0.5 - 0.7 |
| Footsteps | -24dB a -20dB | 0.3 - 0.5 |

---

## 🎚️ Ajustes Avanzados

### Cambiar Volúmenes Globales

Si todos los SFX suenan muy fuerte/suave:

```javascript
// En el constructor de AudioManager (línea ~781)
this.sfxVolume = 0.3;  // Reducir de 0.5 a 0.3
```

### Ducking (Música baja cuando hay SFX)

No implementado actualmente, pero se puede agregar:

```javascript
playSFX(name, volume = 1.0) {
    if (this.isMuted || !this.sounds[name]) return;

    // Duck music
    if (this.currentMusic) {
        this.fadeVolume(this.currentMusic, this.musicVolume * 0.5, 100);
    }

    let sound = /* ... */;
    const clone = sound.cloneNode();
    clone.volume = this.sfxVolume * volume;
    clone.play().catch(e => console.log('SFX play failed:', e));

    clone.onended = () => {
        // Restore music volume
        if (this.currentMusic) {
            this.fadeVolume(this.currentMusic, this.musicVolume, 200);
        }
        clone.remove();
    };
}
```

---

## 🎵 Próximos Pasos

1. **Conseguir/crear los archivos de audio** según `SOUND_ASSETS.md`
2. **Colocarlos en las carpetas** apropiadas
3. **Probar en navegador** y ajustar volúmenes según necesidad
4. **Optimizar archivos** (compresión, normalización)
5. **(Opcional)** Agregar más sonidos:
   - Footsteps al caminar
   - Cop spawn sound
   - Roulette tick durante selección de habilidades

---

## 📞 Referencias

- **Especificaciones completas**: Ver `SOUND_ASSETS.md`
- **Assets visuales**: Ver `VISUAL_ASSETS.md`
- **Deployment**: Ver `DEPLOYMENT.md`

---

**Desarrollado para GTA 6 Countdown Game** 🎮🔊
