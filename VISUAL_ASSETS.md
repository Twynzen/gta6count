# 🎨 Visual Assets Requirements - GTA 6 Countdown Game

Este documento detalla todos los assets visuales necesarios para reemplazar los elementos básicos (cubos, rectángulos) del juego por gráficos profesionales.

---

## 📋 FORMATO GENERAL

**Formato de archivo**: PNG con transparencia (alpha channel)
**Profundidad de color**: 32-bit RGBA
**Estilo visual**: Neon/Cyberpunk inspirado en Vice City/Miami
**Paleta de colores**:
- Rosa/Magenta: #FF006E
- Cyan: #06B6D4
- Púrpura: #A855F7
- Rosa claro: #EC4899
- Dorado: #FFD700 (para jefes)

---

## 🎮 ASSETS DEL JUGADOR

### 1. Player Character (Jugador)
**Nombre del archivo**: `player_sprite.png`
**Dimensiones**: 40x40 pixels (sprite base)
**Descripción**: Personaje visto desde arriba (top-down view)
**Animaciones requeridas**:
- `player_idle.png` - 40x40px - Quieto
- `player_walk_up.png` - 160x40px (4 frames de 40x40) - Caminando arriba
- `player_walk_down.png` - 160x40px (4 frames de 40x40) - Caminando abajo
- `player_walk_left.png` - 160x40px (4 frames de 40x40) - Caminando izquierda
- `player_walk_right.png` - 160x40px (4 frames de 40x40) - Caminando derecha
- `player_shoot.png` - 80x40px (2 frames de 40x40) - Disparando

**Detalles visuales**:
- Debe tener un brillo/glow neon rosa (#FF006E)
- Vista desde arriba (top-down)
- Estilo minimalista pero reconocible como persona
- Opcional: Sombra sutil debajo del sprite

**Variante invisible** (opcional):
- `player_ghost.png` - 40x40px - Versión semitransparente (30% opacity)

---

## 👮 ASSETS DE ENEMIGOS

### 2. Cop (Policía Normal)
**Nombre del archivo**: `cop_sprite.png`
**Dimensiones**: 36x36 pixels
**Descripción**: Policía visto desde arriba
**Animaciones**:
- `cop_idle.png` - 36x36px - Quieto
- `cop_chase.png` - 144x36px (4 frames de 36x36) - Persiguiendo

**Detalles visuales**:
- Color principal: Azul (#0000FF) con luces rojas/azules parpadeantes
- Debe verse claramente como policía (gorra, uniforme)
- Glow azul alrededor del sprite
- Luces de policía en la parte superior (2 puntos rojos/azules alternando)

### 3. Boss Cop (Jefe)
**Nombre del archivo**: `boss_sprite.png`
**Dimensiones**: 50x50 pixels
**Descripción**: Jefe más grande y dorado
**Animaciones**:
- `boss_idle.png` - 50x50px - Quieto
- `boss_chase.png` - 200x50px (4 frames de 50x50) - Persiguiendo
- `boss_hurt.png` - 50x50px - Recibiendo daño (flash)

**Detalles visuales**:
- Color principal: Dorado (#FFD700) con detalles blancos
- Más grande que policías normales
- Glow dorado intenso
- Corona o insignia especial visible
- Luces más brillantes y rápidas

### 4. Corpse (Cadáver)
**Nombre del archivo**: `corpse_sprite.png`
**Dimensiones**: 36x36 pixels
**Descripción**: Policía muerto en el suelo
**Variantes**:
- `corpse_01.png` - 36x36px
- `corpse_02.png` - 36x36px (variante rotada)

**Detalles visuales**:
- Color rojo oscuro (#8B0000)
- Silueta acostada/caída
- X roja encima
- Semi-transparente (50% opacity)
- Sin glow

---

## 🏢 ASSETS DE EDIFICIOS

### 5. Store (Tienda para robar)
**Nombre del archivo**: `store.png`
**Dimensiones**: 100x80 pixels
**Estados**:
- `store_normal.png` - 100x80px - Estado normal
- `store_robbed.png` - 100x80px - Estado robado (rojo)

**Detalles visuales**:
- Estilo neon storefront
- Letrero brillante "STORE" o "24/7"
- Color cyan (#06B6D4) cuando normal
- Color rosa/rojo (#FF006E) cuando robado
- Ventanas con luz
- Sombra proyectada

### 6. Buildings (Edificios obstáculos)
**Cantidad**: 5 edificios diferentes
**Nombres**: `building_01.png` a `building_05.png`
**Dimensiones variables**:
1. `building_01.png` - 150x100px
2. `building_02.png` - 150x100px
3. `building_03.png` - 100x150px
4. `building_04.png` - 100x150px
5. `building_05.png` - 200x80px

**Detalles visuales**:
- Estilo Miami/Vice City (art deco, neon)
- Colores púrpura (#A855F7) y rosa (#EC4899) alternados
- Ventanas con luces
- Letreros neon en algunos
- Bordes blancos brillantes
- Sombras proyectadas

---

## 🔫 ASSETS DE PROYECTILES Y EFECTOS

### 7. Bullet (Bala)
**Nombre del archivo**: `bullet.png`
**Dimensiones**: 8x8 pixels
**Descripción**: Proyectil del jugador

**Detalles visuales**:
- Color amarillo brillante (#FFFF00)
- Forma ovalada o circular
- Glow intenso alrededor
- Trail effect (estela) opcional: `bullet_trail.png` - 16x4px

### 8. Bomb (Bomba)
**Nombre del archivo**: `bomb.png`
**Dimensiones**: 32x32 pixels
**Estados**:
- `bomb_placed.png` - 32x32px - Bomba colocada
- `bomb_tick.png` - 64x32px (2 frames) - Parpadeando
- `bomb_explosion.png` - 160x160px (4 frames de 160x160) - Explosión

**Detalles visuales**:
- Bomba: Roja/naranja con temporizador digital
- Explosión: Círculo de fuego expandiéndose
- Frames de explosión con partículas
- Glow naranja/rojo

### 9. Power-Up (Mejora)
**Nombre del archivo**: `powerup.png`
**Dimensiones**: 30x30 pixels
**Animación**:
- `powerup_anim.png` - 120x30px (4 frames de 30x30) - Pulsando

**Detalles visuales**:
- Cubo o estrella blanca brillante
- Glow blanco intenso (20px de radio)
- Partículas flotando alrededor (opcional)
- Rotación o pulsación

---

## 🎨 ASSETS DE UI/HUD

### 10. Heart Icon (Vida)
**Nombre del archivo**: `heart_icon.png`
**Dimensiones**: 24x24 pixels
**Descripción**: Icono de corazón para mostrar vidas

**Detalles visuales**:
- Corazón pixel art
- Color rojo brillante (#FF0000)
- Borde blanco

### 11. Bomb Icon (UI)
**Nombre del archivo**: `bomb_ui_icon.png`
**Dimensiones**: 20x20 pixels
**Estados**:
- `bomb_ready.png` - Verde (#00FF00)
- `bomb_cooldown.png` - Rojo (#FF0000)

### 12. Ability Icons (Iconos de habilidades)
**Dimensiones**: 64x64 pixels cada uno
**Cantidad**: 7 iconos

1. `ability_speed.png` - Icono de velocidad (rayo)
2. `ability_firerate.png` - Icono de cadencia (metralleta)
3. `ability_multishot.png` - Icono de multidisparo (3 balas)
4. `ability_bomb.png` - Icono de bomba
5. `ability_life.png` - Icono de vida extra (corazón)
6. `ability_ghost.png` - Icono de invisibilidad (fantasma)
7. `ability_epic.png` - Icono de boost épico (estrella triple)

**Detalles visuales**:
- Fondo transparente
- Icono centrado y claro
- Glow del color de rareza:
  - Básico: Cyan (#06B6D4)
  - Épico: Púrpura (#A855F7)
  - Legendario: Dorado (#FFD700)
- Borde redondeado opcional

---

## 🌆 ASSETS DE FONDO

### 13. Ground/Street (Suelo)
**Nombre del archivo**: `street_tile.png`
**Dimensiones**: 50x50 pixels (tile repetible)
**Descripción**: Textura de calle

**Detalles visuales**:
- Color oscuro púrpura (#0a0520)
- Líneas de cuadrícula neon (#FF006E) tenue
- Textura de asfalto opcional
- Debe ser tileable (seamless)

### 14. Background Grid (Cuadrícula)
**Nombre del archivo**: `neon_grid.png`
**Dimensiones**: 800x600 pixels (full canvas)
**Descripción**: Fondo con cuadrícula estilo Miami/Tron

**Detalles visuales**:
- Cuadrícula rosa/cyan (#FF006E)
- Semi-transparente (10% opacity)
- Líneas cada 50 pixels
- Efecto de perspectiva opcional (más pequeño arriba)

---

## 💫 ASSETS DE PARTÍCULAS Y EFECTOS

### 15. Muzzle Flash (Destello de disparo)
**Nombre del archivo**: `muzzle_flash.png`
**Dimensiones**: 20x20 pixels
**Frames**: 3 frames de animación (60x20px total)

**Detalles visuales**:
- Destello amarillo/blanco
- Forma de estrella o cruz
- Muy brillante

### 16. Hit Impact (Impacto)
**Nombre del archivo**: `hit_impact.png`
**Dimensiones**: 16x16 pixels
**Frames**: 4 frames (64x16px total)

**Detalles visuales**:
- Explosión pequeña
- Partículas dispersándose
- Color rojo/naranja

### 17. Death Particles (Partículas de muerte)
**Nombre del archivo**: `death_particles.png`
**Dimensiones**: 8x8 pixels
**Cantidad**: 10 variaciones

**Detalles visuales**:
- Pequeños píxeles de sangre/fragmentos
- Color rojo oscuro
- Dispersión aleatoria

---

## 📦 ESTRUCTURA DE CARPETAS RECOMENDADA

```
/assets
  /sprites
    /player
      - player_idle.png
      - player_walk_up.png
      - player_walk_down.png
      - player_walk_left.png
      - player_walk_right.png
      - player_shoot.png
      - player_ghost.png
    /enemies
      - cop_idle.png
      - cop_chase.png
      - boss_idle.png
      - boss_chase.png
      - boss_hurt.png
      - corpse_01.png
      - corpse_02.png
    /environment
      - store_normal.png
      - store_robbed.png
      - building_01.png
      - building_02.png
      - building_03.png
      - building_04.png
      - building_05.png
    /projectiles
      - bullet.png
      - bullet_trail.png
      - bomb_placed.png
      - bomb_tick.png
      - bomb_explosion.png (sprite sheet)
    /powerups
      - powerup_anim.png (sprite sheet)
    /effects
      - muzzle_flash.png (sprite sheet)
      - hit_impact.png (sprite sheet)
      - death_particles.png
  /ui
    - heart_icon.png
    - bomb_ui_icon.png
    - bomb_ready.png
    - bomb_cooldown.png
    /abilities
      - ability_speed.png
      - ability_firerate.png
      - ability_multishot.png
      - ability_bomb.png
      - ability_life.png
      - ability_ghost.png
      - ability_epic.png
  /backgrounds
    - street_tile.png
    - neon_grid.png
```

---

## 🎯 PRIORIDADES

### Alta Prioridad (necesarios para gameplay básico):
1. Player sprites (idle + walk)
2. Cop sprites
3. Boss sprite
4. Bullet sprite
5. Buildings (al menos 3)
6. Store sprites

### Media Prioridad (mejoran la experiencia):
7. Bomb sprites
8. Power-up sprite
9. Ability icons
10. Corpse sprites
11. Background grid

### Baja Prioridad (polish):
12. Efectos de partículas
13. Animaciones avanzadas
14. Trail effects
15. UI icons adicionales

---

## 📐 ESPECIFICACIONES TÉCNICAS

### Exportación:
- **Software recomendado**: Aseprite, Photoshop, GIMP, Krita
- **Formato**: PNG-8 o PNG-24 con alpha channel
- **Compresión**: Optimizada (TinyPNG, OptiPNG)
- **Naming convention**: lowercase_snake_case
- **Sin espacios** en nombres de archivo

### Sprite Sheets:
- Frames organizados horizontalmente (de izquierda a derecha)
- Todos los frames del mismo tamaño
- Espaciado de 0 pixels entre frames
- Incluir metadata JSON opcional:
  ```json
  {
    "frames": 4,
    "frameWidth": 40,
    "frameHeight": 40,
    "frameDuration": 100
  }
  ```

### Transparencia:
- Usar alpha channel completo (0-255)
- No usar "magic pink" (#FF00FF)
- Anti-aliasing permitido en bordes

### Resolución:
- Los sprites están diseñados para 800x600 canvas
- Si el canvas aumenta, los sprites escalan proporcionalmente
- Mantener aspect ratio 1:1 para caracteres

---

## 🎨 REFERENCIAS DE ESTILO

**Inspiración visual**:
- GTA Vice City (paleta neon)
- Hotline Miami (violencia stylizada)
- Cyberpunk/Synthwave aesthetic
- Blade Runner (neons y colores)

**Ejemplos de color**:
- Cielo/fondo: Púrpura oscuro (#1a0b2e)
- Luces neon: Rosa (#FF006E), Cyan (#06B6D4)
- Acentos: Púrpura (#A855F7), Rosa (#EC4899)
- Warnings/peligro: Rojo (#FF0000)
- Rewards: Dorado (#FFD700)

---

## ✅ CHECKLIST DE ENTREGA

Cuando entregues los assets, asegúrate de:

- [ ] Todos los archivos en formato PNG
- [ ] Transparencia correcta (alpha channel)
- [ ] Nombres de archivo según convención
- [ ] Dimensiones exactas especificadas
- [ ] Organizados en carpetas según estructura
- [ ] Sprite sheets con frames correctos
- [ ] Compresión optimizada
- [ ] Paleta de colores respetada
- [ ] Sin fondos blancos/negros donde debe haber transparencia
- [ ] Probados visualmente en fondo oscuro

---

## 📞 NOTAS ADICIONALES

- Si tienes dudas sobre algún asset, consulta antes de crearlo
- Puedes usar herramientas de IA (DALL-E, Midjourney) pero asegúrate de limpiar/optimizar los resultados
- Todos los sprites pueden ser pixel art o vector, según tu preferencia
- Lo importante es mantener consistencia de estilo entre todos los assets
- Si necesitas crear variaciones, agrégalas con sufijos: `_v1`, `_v2`, etc.

**Ejemplo**: `cop_chase_v1.png`, `cop_chase_v2.png`

---

**Total de assets**: ~50-60 archivos PNG
**Tiempo estimado de creación**: 8-12 horas (dependiendo de complejidad)
**Tamaño total aproximado**: 2-5 MB (optimizado)
