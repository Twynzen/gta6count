# 🔊 Sound Assets Requirements - GTA 6 Countdown Game

Este documento detalla todos los assets de sonido necesarios para el juego GTA 6 Countdown.

---

## 📋 FORMATO GENERAL

**Formato de archivo**: MP3 (para compatibilidad web) + OGG (fallback)
**Sample rate**: 44.1 kHz
**Bit rate**: 128-192 kbps (MP3) / Variable (OGG)
**Canales**: Stereo
**Normalización**: -3dB peak (evitar clipping)
**Fade in/out**: 10-50ms en loops para evitar clicks

**Nota**: Entregar cada sonido en ambos formatos (MP3 y OGG) para máxima compatibilidad de navegadores.

---

## 🎵 MÚSICA DE FONDO

### 1. Main Menu Theme
**Nombre**: `music_menu.mp3` / `music_menu.ogg`
**Duración**: 2:00 - 3:00 minutos (loop)
**BPM**: 100-120
**Descripción**: Música de fondo para la pantalla principal del countdown

**Características**:
- Estilo: Synthwave/Outrun/Miami Vice
- Mood: Nostálgico, anticipación, retro-futurista
- Instrumentos: Sintetizadores, drums electrónicos, bass sintetizado
- Loop perfecto (sin cortes audibles)
- Volumen moderado (no debe ser invasiva)
- Armonía: Menor (para ese toque melancólico)

**Referencia de estilo**:
- Kavinsky - "Nightcall"
- Miami Nights 1984
- Mitch Murder
- GTA Vice City OST

**Implementación**: Loop continuo en la página principal, fade out al abrir el juego.

---

### 2. Gameplay Music
**Nombre**: `music_game.mp3` / `music_game.ogg`
**Duración**: 2:30 - 4:00 minutos (loop)
**BPM**: 130-150 (más rápido que el menú)
**Descripción**: Música durante el juego

**Características**:
- Estilo: Synthwave/Action/Electronic
- Mood: Tensión, acción, urgencia
- Instrumentos: Sintetizadores agresivos, batería rápida, bassline driving
- Intensidad creciente opcional (primeros 30s más suaves, luego intenso)
- Loop perfecto
- Compatible con SFX (no debe tapar efectos de sonido)

**Capas/variaciones** (opcional pero recomendado):
- `music_game_layer1.mp3` - Base (drums + bass)
- `music_game_layer2.mp3` - Melodía
- `music_game_layer3.mp3` - Intensidad extra (activar en waves altas)

**Implementación**: Empieza al robar la tienda, continúa hasta Game Over.

---

### 3. Game Over Theme
**Nombre**: `music_gameover.mp3` / `music_gameover.ogg`
**Duración**: 0:05 - 0:10 segundos (sting)
**BPM**: Libre
**Descripción**: Música breve al perder

**Características**:
- Estilo: Dramatic sting / Fail sound
- Mood: Derrota, decepción
- Acordes descendentes
- Final abrupto o fade out rápido
- No es un loop

**Referencia**: Sonidos de "game over" clásicos pero con estética synthwave.

**Implementación**: Se reproduce una vez al morir.

---

## 🎮 EFECTOS DE SONIDO - ACCIONES DEL JUGADOR

### 4. Player Footsteps
**Nombre**: `sfx_footstep_01.mp3` a `sfx_footstep_04.mp3`
**Cantidad**: 4 variaciones
**Duración**: 0.15 - 0.25 segundos cada uno
**Descripción**: Pasos del jugador

**Características**:
- Sonido de zapatos en asfalto/concreto
- Variaciones sutiles para evitar monotonía
- Frecuencia: Reproducir cada 0.3-0.4 segundos al caminar
- Volumen: Bajo (no debe molestar)
- Stereo panning según dirección de movimiento (opcional)

**Implementación**: Reproducir aleatoriamente una de las 4 variaciones mientras el jugador se mueve.

---

### 5. Player Shoot
**Nombre**: `sfx_shoot.mp3` / `sfx_shoot.ogg`
**Duración**: 0.1 - 0.2 segundos
**Descripción**: Sonido de disparo del jugador

**Características**:
- Estilo: Pistola automática/futurista
- Punchy y claro
- Ataque rápido, decay corto
- Debe destacarse entre otros sonidos
- Un toque de reverb (opcional)

**Variaciones** (recomendado):
- `sfx_shoot_01.mp3` - Disparo normal
- `sfx_shoot_02.mp3` - Variación 1
- `sfx_shoot_03.mp3` - Variación 2

**Implementación**: Se reproduce cada vez que el jugador dispara (potencialmente muy frecuente, optimizar).

---

### 6. Multi-Shot (Upgrade)
**Nombre**: `sfx_multishot.mp3` / `sfx_multishot.ogg`
**Duración**: 0.15 - 0.25 segundos
**Descripción**: Disparo mejorado (suena más potente)

**Características**:
- Similar a `sfx_shoot` pero más grave/pesado
- Más cuerpo (más bass)
- Doble/triple capa de disparo
- Stereo spread

**Implementación**: Reemplaza `sfx_shoot` cuando el jugador tiene multishot.

---

### 7. Bomb Place
**Nombre**: `sfx_bomb_place.mp3` / `sfx_bomb_place.ogg`
**Duración**: 0.3 - 0.5 segundos
**Descripción**: Colocar bomba en el suelo

**Características**:
- Sonido de "click" o "beep" electrónico
- Tono medio-agudo
- Sentimiento de "activado"

**Implementación**: Se reproduce al presionar B y colocar bomba.

---

### 8. Bomb Tick
**Nombre**: `sfx_bomb_tick.mp3` / `sfx_bomb_tick.ogg`
**Duración**: 0.1 segundos
**Descripción**: Beep del temporizador

**Características**:
- Beep electrónico corto
- Frecuencia: cada 0.5 segundos
- Pitch aumenta conforme se acerca la explosión (opcional)

**Implementación**: Loop mientras la bomba está activa (3 segundos).

---

### 9. Bomb Explosion
**Nombre**: `sfx_bomb_explosion.mp3` / `sfx_bomb_explosion.ogg`
**Duración**: 1.0 - 2.0 segundos
**Descripción**: Explosión de bomba

**Características**:
- Explosión grande y satisfactoria
- Ataque fuerte, sustain medio, decay largo
- Puede incluir escombros/resonancia
- Bass potente
- No debe saturar (normalizar bien)

**Implementación**: Se reproduce cuando la bomba explota.

---

### 10. Robbery Sound
**Nombre**: `sfx_robbery.mp3` / `sfx_robbery.ogg`
**Duración**: 0.5 - 1.0 segundos
**Descripción**: Sonido al robar la tienda

**Características**:
- Estilo: Alarma, caja registradora, cristal roto
- Combinar varios elementos
- Sensación de "iniciando el caos"

**Implementación**: Se reproduce una vez al presionar SPACE cerca de la tienda.

---

## 👮 EFECTOS DE SONIDO - ENEMIGOS

### 11. Cop Spawn
**Nombre**: `sfx_cop_spawn.mp3` / `sfx_cop_spawn.ogg`
**Duración**: 0.5 - 0.8 segundos
**Descripción**: Aparición de policía

**Características**:
- Sirena breve o "whoosh"
- Indicador audio de peligro
- No muy invasivo (se spawmean muchos)

**Implementación**: Se reproduce cuando aparece cada cop (puede ser frecuente, considerar cooldown).

---

### 12. Cop Alert
**Nombre**: `sfx_cop_alert.mp3` / `sfx_cop_alert.ogg`
**Duración**: 0.3 - 0.5 segundos
**Descripción**: Policía detecta al jugador

**Características**:
- Alarma o silbato corto
- Pitch agudo (alerta)
- Stereo position según ubicación del cop

**Implementación**: Se reproduce cuando un cop entra en rango de ataque (una vez por cop).

---

### 13. Cop Death
**Nombre**: `sfx_cop_death.mp3` / `sfx_cop_death.ogg`
**Duración**: 0.4 - 0.7 segundos
**Descripción**: Policía muere

**Características**:
- Sonido de impacto + caída
- Puede incluir "ugh" o quejido electrónico/distorsionado
- Satisfactorio (feedback de kill)

**Variaciones** (recomendado):
- `sfx_cop_death_01.mp3`
- `sfx_cop_death_02.mp3`
- `sfx_cop_death_03.mp3`

**Implementación**: Se reproduce cada vez que muere un cop (muy frecuente).

---

### 14. Boss Spawn
**Nombre**: `sfx_boss_spawn.mp3` / `sfx_boss_spawn.ogg`
**Duración**: 1.5 - 2.5 segundos
**Descripción**: Aparición de jefe

**Características**:
- Dramático y único
- Sirena de alerta + música sting
- Bass profundo
- Debe llamar la atención
- Mayor duración que cop normal

**Implementación**: Se reproduce cada 5 waves cuando aparece un boss.

---

### 15. Boss Hurt
**Nombre**: `sfx_boss_hurt.mp3` / `sfx_boss_hurt.ogg`
**Duración**: 0.2 - 0.4 segundos
**Descripción**: Jefe recibe daño

**Características**:
- Diferente a cop normal
- Más metálico/pesado
- Feedback claro de que está perdiendo vida

**Implementación**: Se reproduce cada vez que una bala impacta al boss (frecuente).

---

### 16. Boss Death
**Nombre**: `sfx_boss_death.mp3` / `sfx_boss_death.ogg`
**Duración**: 1.5 - 2.5 segundos
**Descripción**: Jefe muere

**Características**:
- Explosión dramática
- Más grande que cop normal
- Satisfactorio (recompensa)
- Puede incluir resonancia
- Bass fuerte

**Implementación**: Se reproduce cuando el boss muere.

---

## ✨ EFECTOS DE SONIDO - POWER-UPS Y UI

### 17. Power-Up Appear
**Nombre**: `sfx_powerup_appear.mp3` / `sfx_powerup_appear.ogg`
**Duración**: 0.5 - 0.8 segundos
**Descripción**: Aparece power-up al matar boss

**Características**:
- Mágico/celestial
- Pitch ascendente
- Brillo/chispa
- Llamativo

**Implementación**: Se reproduce cuando aparece el power-up (drop del boss).

---

### 18. Power-Up Collect
**Nombre**: `sfx_powerup_collect.mp3` / `sfx_powerup_collect.ogg`
**Duración**: 0.4 - 0.7 segundos
**Descripción**: Jugador recoge power-up

**Características**:
- Satisfactorio y positivo
- Campaña/chime brillante
- Pitch alto
- Sensación de "premio"

**Implementación**: Se reproduce al tocar el power-up.

---

### 19. Ability Roulette Tick
**Nombre**: `sfx_roulette_tick.mp3` / `sfx_roulette_tick.ogg`
**Duración**: 0.05 - 0.1 segundos
**Descripción**: Tick de la ruleta de habilidades

**Características**:
- Click corto
- Mecánico
- Puede acelerar conforme avanza la ruleta

**Implementación**: Se reproduce varias veces durante el roulette (cada ~100ms durante 3 segundos).

---

### 20. Ability Selected - Basic
**Nombre**: `sfx_ability_basic.mp3` / `sfx_ability_basic.ogg`
**Duración**: 1.0 - 1.5 segundos
**Descripción**: Se selecciona habilidad básica

**Características**:
- Positivo pero no espectacular
- Campanada simple
- Color cyan en audio (tonos claros)

**Implementación**: Se reproduce cuando la ruleta selecciona una habilidad básica.

---

### 21. Ability Selected - Epic
**Nombre**: `sfx_ability_epic.mp3` / `sfx_ability_epic.ogg`
**Duración**: 1.2 - 1.8 segundos
**Descripción**: Se selecciona habilidad épica

**Características**:
- Más impresionante que basic
- Acordes/arpegios
- Color púrpura en audio (tonos medios)
- Más capas de sonido

**Implementación**: Se reproduce cuando la ruleta selecciona una habilidad épica.

---

### 22. Ability Selected - Legendary
**Nombre**: `sfx_ability_legendary.mp3` / `sfx_ability_legendary.ogg`
**Duración**: 1.5 - 2.5 segundos
**Descripción**: Se selecciona habilidad legendaria

**Características**:
- Épico y espectacular
- Orquesta/coro (opcional)
- Bass profundo + highs brillantes
- Color dorado en audio (tonos cálidos y brillantes)
- Máxima satisfacción auditiva
- Puede incluir "whoosh" reverberante

**Implementación**: Se reproduce cuando la ruleta selecciona una habilidad legendaria (raro).

---

## ⚠️ EFECTOS DE SONIDO - FEEDBACK Y ALERTAS

### 23. Player Hit/Damage
**Nombre**: `sfx_player_hit.mp3` / `sfx_player_hit.ogg`
**Duración**: 0.3 - 0.5 segundos
**Descripción**: Jugador recibe daño

**Características**:
- Impacto + dolor
- Puede incluir efecto de "shield break" si tiene vidas
- Alarmante

**Implementación**: Se reproduce cuando un cop toca al jugador.

---

### 24. Player Death
**Nombre**: `sfx_player_death.mp3` / `sfx_player_death.ogg`
**Duración**: 1.0 - 1.5 segundos
**Descripción**: Jugador muere (game over)

**Características**:
- Dramático
- Caída + impacto
- Puede incluir efecto de "slow down" o distorsión
- Transiciona bien a `music_gameover`

**Implementación**: Se reproduce al perder la última vida.

---

### 25. Invisibility Activate
**Nombre**: `sfx_invisibility_on.mp3` / `sfx_invisibility_on.ogg`
**Duración**: 0.5 - 0.8 segundos
**Descripción**: Activar invisibilidad

**Características**:
- Mágico/fantasmal
- Pitch descendente con reverb
- "Whoosh" suave
- Stereo spread

**Implementación**: Se reproduce al activar la habilidad Ghost Mode.

---

### 26. Invisibility Deactivate
**Nombre**: `sfx_invisibility_off.mp3` / `sfx_invisibility_off.ogg`
**Duración**: 0.3 - 0.5 segundos
**Descripción**: Desactivar invisibilidad

**Características**:
- "Pop" o "fizzle"
- Pitch ascendente
- Indica que el efecto terminó

**Implementación**: Se reproduce cuando termina el efecto de invisibilidad (3 segundos después).

---

### 27. Extra Life
**Nombre**: `sfx_extra_life.mp3` / `sfx_extra_life.ogg`
**Duración**: 1.0 - 1.5 segundos
**Descripción**: Ganar vida extra

**Características**:
- Positivo y heroico
- Fanfarria corta
- Armonía mayor
- Sensación de "power up"

**Implementación**: Se reproduce al obtener la habilidad Extra Life.

---

## 🎯 EFECTOS DE SONIDO - AMBIENTE Y UI

### 28. Wave Start
**Nombre**: `sfx_wave_start.mp3` / `sfx_wave_start.ogg`
**Duración**: 0.5 - 1.0 segundos
**Descripción**: Inicia nueva wave de enemigos

**Características**:
- Alarma o sirena
- Indica escalada de dificultad
- Puede incluir voz sintetizada "Wave X" (opcional)

**Implementación**: Se reproduce cada 8 segundos al iniciar nueva wave.

---

### 29. UI Click
**Nombre**: `sfx_ui_click.mp3` / `sfx_ui_click.ogg`
**Duración**: 0.05 - 0.1 segundos
**Descripción**: Click en botones de UI

**Características**:
- Click limpio y corto
- Synthwave aesthetic
- Satisfactorio pero no invasivo

**Implementación**: Se reproduce al hacer click en cualquier botón (Play, Leaderboard, etc.).

---

### 30. UI Hover
**Nombre**: `sfx_ui_hover.mp3` / `sfx_ui_hover.ogg`
**Duración**: 0.03 - 0.08 segundos
**Descripción**: Hover sobre botones

**Características**:
- Sutil "blip" o "beep"
- Muy suave (volumen bajo)
- Feedback sin molestar

**Implementación**: Se reproduce al pasar el mouse sobre botones interactivos.

---

### 31. Countdown Tick
**Nombre**: `sfx_countdown_tick.mp3` / `sfx_countdown_tick.ogg`
**Duración**: 0.1 - 0.2 segundos
**Descripción**: Tick del contador principal (opcional)

**Características**:
- Reloj digital
- Beep electrónico
- Muy sutil
- Cada segundo

**Implementación**: Reproducir cada segundo en el countdown principal (opcional, puede ser molesto).

---

## 📦 ESTRUCTURA DE CARPETAS RECOMENDADA

```
/sounds
  /music
    - music_menu.mp3
    - music_menu.ogg
    - music_game.mp3
    - music_game.ogg
    - music_gameover.mp3
    - music_gameover.ogg
  /sfx
    /player
      - sfx_footstep_01.mp3
      - sfx_footstep_02.mp3
      - sfx_footstep_03.mp3
      - sfx_footstep_04.mp3
      - sfx_shoot.mp3
      - sfx_multishot.mp3
      - sfx_player_hit.mp3
      - sfx_player_death.mp3
      (+ versiones .ogg de todo)
    /enemies
      - sfx_cop_spawn.mp3
      - sfx_cop_alert.mp3
      - sfx_cop_death_01.mp3
      - sfx_cop_death_02.mp3
      - sfx_cop_death_03.mp3
      - sfx_boss_spawn.mp3
      - sfx_boss_hurt.mp3
      - sfx_boss_death.mp3
      (+ versiones .ogg de todo)
    /weapons
      - sfx_bomb_place.mp3
      - sfx_bomb_tick.mp3
      - sfx_bomb_explosion.mp3
      (+ versiones .ogg)
    /powerups
      - sfx_powerup_appear.mp3
      - sfx_powerup_collect.mp3
      - sfx_ability_basic.mp3
      - sfx_ability_epic.mp3
      - sfx_ability_legendary.mp3
      - sfx_roulette_tick.mp3
      - sfx_invisibility_on.mp3
      - sfx_invisibility_off.mp3
      - sfx_extra_life.mp3
      (+ versiones .ogg de todo)
    /ui
      - sfx_ui_click.mp3
      - sfx_ui_hover.mp3
      - sfx_robbery.mp3
      - sfx_wave_start.mp3
      (+ versiones .ogg de todo)
```

---

## 🎚️ NIVELES DE VOLUMEN RECOMENDADOS

**Música**:
- Menu music: -15dB a -12dB
- Game music: -18dB a -15dB (para no tapar SFX)
- Game Over music: -12dB a -10dB

**SFX - Alto volumen** (destacarse):
- Shoot: -6dB a -3dB
- Explosions: -3dB a 0dB
- Ability selections: -6dB a -3dB
- Boss spawn: -6dB a -3dB

**SFX - Volumen medio**:
- Cop deaths: -12dB a -9dB
- Power-up collect: -12dB a -9dB
- Player hit: -9dB a -6dB
- Robbery: -9dB a -6dB

**SFX - Bajo volumen** (ambiente/feedback):
- Footsteps: -24dB a -20dB
- UI clicks: -18dB a -15dB
- UI hover: -24dB a -21dB
- Bomb tick: -15dB a -12dB

---

## 🎯 PRIORIDADES

### Alta Prioridad (esenciales para gameplay):
1. music_game
2. sfx_shoot
3. sfx_cop_death
4. sfx_boss_spawn
5. sfx_boss_death
6. sfx_powerup_collect
7. sfx_ability_basic/epic/legendary
8. sfx_player_death
9. sfx_bomb_explosion

### Media Prioridad (mejoran experiencia):
10. music_menu
11. music_gameover
12. sfx_robbery
13. sfx_bomb_place/tick
14. sfx_cop_spawn
15. sfx_player_hit
16. sfx_ui_click
17. sfx_wave_start

### Baja Prioridad (polish):
18. sfx_footsteps
19. sfx_ui_hover
20. sfx_invisibility on/off
21. sfx_roulette_tick
22. Variaciones de sonidos

---

## 🛠️ HERRAMIENTAS RECOMENDADAS

**Para crear sonidos**:
- **Bfxr/Cfxr**: Generador de SFX retro (gratis)
- **ChipTone**: Generador de sonidos 8-bit (gratis)
- **Audacity**: Edición y efectos (gratis)
- **FL Studio / Ableton**: Música completa
- **Vital / Serum**: Sintetizadores (para synthwave)
- **Freesound.org**: Biblioteca de sonidos (gratis, con licencia)

**Para convertir formatos**:
- **FFmpeg**: Conversión MP3 ↔ OGG
- **Audacity**: Exportar en múltiples formatos

**Para normalizar**:
- **Audacity** (Effect → Normalize)
- **FFmpeg loudnorm filter**

---

## 📐 ESPECIFICACIONES TÉCNICAS DE EXPORTACIÓN

### MP3:
```
- Codec: LAME MP3
- Sample rate: 44100 Hz
- Bitrate: 128-192 kbps (CBR o VBR)
- Channels: Stereo (2)
- Quality: High/Very High
```

### OGG:
```
- Codec: Vorbis
- Sample rate: 44100 Hz
- Quality: 5-7 (Audacity) / ~160 kbps
- Channels: Stereo (2)
```

### Normalización:
```bash
# Usando FFmpeg para normalizar a -3dB
ffmpeg -i input.mp3 -af "loudnorm=I=-3:TP=-1.5:LRA=11" output.mp3
```

### Conversión MP3 → OGG:
```bash
ffmpeg -i sound.mp3 -c:a libvorbis -q:a 6 sound.ogg
```

---

## ✅ CHECKLIST DE ENTREGA

Al entregar los sonidos, asegúrate de:

- [ ] Todos los archivos en MP3 **Y** OGG
- [ ] Sample rate 44.1 kHz
- [ ] Bitrate adecuado (128-192 kbps para MP3)
- [ ] Stereo (2 canales)
- [ ] Normalizados correctamente (sin clipping)
- [ ] Loops perfectos (sin clicks) en música
- [ ] Fade in/out en loops
- [ ] Nombres de archivo según convención
- [ ] Organizados en carpetas según estructura
- [ ] Duraciones dentro de los rangos especificados
- [ ] Probados en navegador web

---

## 🎵 REFERENCIAS DE ESTILO MUSICAL

**Synthwave/Outrun**:
- Kavinsky
- Miami Nights 1984
- Perturbator
- Carpenter Brut
- Mitch Murder
- Lazerhawk
- FM-84

**Video Games**:
- Hotline Miami OST
- GTA Vice City Radio Stations
- Cyberpunk 2077 Radio
- Far Cry 3: Blood Dragon OST

**Atmosfera**:
- Blade Runner soundtrack (Vangelis)
- Drive soundtrack
- Stranger Things OST

---

## 💡 TIPS Y CONSEJOS

1. **Loops musicales**: Asegúrate de que el inicio y final tengan el mismo volumen/frecuencia para evitar clicks
2. **Variaciones**: Tener 2-3 variaciones de sonidos frecuentes (disparos, deaths) evita fatiga auditiva
3. **Ducking**: La música debe bajar automáticamente cuando hay SFX importantes (implementar en código)
4. **Stereo positioning**: Algunos sonidos (cops, explosiones) pueden tener posición stereo según ubicación en pantalla
5. **Mobile**: Los sonidos deben sonar bien tanto en speakers de móvil como en auriculares
6. **Compresión**: Usar compresión dinámica en música para que suene uniforme
7. **Reverb**: Un poco de reverb en explosiones/habilidades legendarias las hace más épicas
8. **Test en bucle**: Escucha los sonidos frecuentes (disparos) en loop para asegurar que no molestan

---

## 📞 NOTAS FINALES

- Si usas samples de internet, asegúrate de que tengan licencia comercial/Creative Commons
- Mantén consistencia de estética synthwave/neon en todos los sonidos
- Los sonidos deben funcionar bien juntos (no competir por frecuencias)
- Prioriza claridad sobre complejidad en SFX de gameplay
- La música no debe tapar efectos de sonido importantes
- Considera crear un "sound theme" unificado (usar los mismos sintetizadores/samples)

**Total de archivos**: ~60-70 archivos (30-35 sonidos × 2 formatos)
**Tamaño total aproximado**: 15-30 MB
**Tiempo estimado de creación**: 10-15 horas

---

¡Buena suerte con la creación de los assets de sonido! 🎵🔊
