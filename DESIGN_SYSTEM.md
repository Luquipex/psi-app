# Psi.app - Design System Documentation

## Color Palette (Human Tech)

### Primary Colors
| Token | HEX | Tailwind Class | Uso |
|-------|-----|----------------|-----|
| Behavioral Orange | `#F97316` | `brand-primary` | CTAs principales, botones de acción |
| Behavioral Orange (Hover) | `#EA580C` | `brand-hover` | Estado hover de CTAs |
| Warm Canvas | `#FAFAF9` | `bg-primary` | Fondo principal (60% de la pantalla) |
| Obsidian Tech | `#1C1917` | `text-primary` | Texto principal, títulos |
| Logic Slate | `#475569` | `text-secondary` / `ui-secondary` | Texto secundario, bordes, íconos |
| Insight Amber | `#FBBF24` | `ui-accent` | Alertas, badges, highlights |

## Reglas de Uso (60-30-10)

### 60% - Espacio Negativo
- Usar `bg-primary` (#FAFAF9) como fondo principal
- Evitar bloques de color grandes innecesarios
- El espacio en blanco es parte del diseño

### 30% - Contenido
- Texto principal: `text-primary` (#1C1917)
- Texto secundario: `text-secondary` (#475569)
- Tarjetas y contenedores: fondo blanco con bordes `border-ui-secondary/20`

### 10% - Acción
- **Un botón principal por pantalla** debe usar `bg-brand-primary`
- Usar con moderación para mantener el impacto visual
- Siempre con texto blanco para contraste WCAG AA

## Sombras Cálidas

Las sombras usan Obsidian (#1C1917) al 5-10% de opacidad:

```javascript
shadow-warm-sm   // Sombra sutil
shadow-warm      // Sombra estándar
shadow-warm-md   // Sombra media
shadow-warm-lg   // Sombra grande
shadow-warm-xl   // Sombra extra grande
```

**Nunca usar** sombras negras puras (`shadow-lg`, `shadow-xl`) - ensucian el diseño.

## Estados Interactivos

### Hover
- Botones principales: `hover:bg-brand-hover` (oscurecer 10%)
- Botones secundarios: `hover:bg-white/50`
- Texto: `hover:text-text-primary`

### Disabled
- Usar `ui-secondary` con `opacity-30`
- **Nunca** bajar opacidad del naranja (se ve sucio)

### Focus
- Inputs: `focus:ring-2 focus:ring-brand-primary`
- Mantener outline para accesibilidad

## Componentes Implementados

✅ Layout (Header con logo naranja)
✅ LandingPage (CTA naranja, gradiente naranja-hover)
✅ QuizCard (Hover naranja en opciones)
✅ QuizPage (Barra de progreso naranja)
✅ ResultCard (Badges, pasos numerados, botones)
✅ LockOverlay (Formulario con foco naranja)
✅ WaitlistCard (Fondo oscuro con acentos amber)
✅ ResultPage (Sombras cálidas)

## Accesibilidad (WCAG AA)

### ✅ Combinaciones Aprobadas
- Texto blanco sobre `brand-primary` (#F97316)
- `text-primary` sobre `bg-primary`
- `text-secondary` sobre `bg-primary`

### ❌ Combinaciones Prohibidas
- `text-secondary` sobre `brand-primary` (contraste insuficiente)
- Texto blanco sobre `ui-accent` (#FBBF24) (invisible)

## Próximos Pasos (Opcional)

- [ ] Configurar fuentes personalizadas (Google Fonts)
- [ ] Implementar Dark Mode (invertir base: fondo #1C1917, texto #FAFAF9)
- [ ] Añadir animaciones con Framer Motion (ya configurado)
- [ ] Crear componentes UI base (Button, Input, Card) reutilizables
