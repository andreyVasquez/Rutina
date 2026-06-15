# Rutina de Entrenamiento — Hipertrofia + Striking

Migración a [Astro](https://astro.build) del documento `Rutina_Gym_V3.html`.

## Comandos

| Comando          | Acción                                     |
| ---------------- | ------------------------------------------ |
| `pnpm install`   | Instala dependencias                       |
| `pnpm dev`       | Servidor de desarrollo en `localhost:4321` |
| `pnpm build`     | Compila el sitio estático a `./dist/`      |
| `pnpm preview`   | Previsualiza el build local                |

## Estructura

```
src/
├── data/rutina.ts          # Días y ejercicios (fuente de datos)
├── layouts/Layout.astro    # <head>, fuentes, CSS global, script de reveal
├── styles/global.css       # Todos los estilos (migrados del <style> original)
├── components/
│   ├── IconSprite.astro    # Sprite SVG de pictogramas
│   ├── Nav.astro
│   ├── Hero.astro
│   ├── Changes.astro
│   ├── Rules.astro
│   ├── Day.astro           # Plantilla reutilizable de día (recibe props)
│   ├── Supplements.astro   # Pila de suplementos (prescriptiva)
│   └── Footer.astro
└── pages/index.astro       # Arma la página
```

## Notas de la sección Suplementos

Reescrita de "recomendaciones" a **pila prescriptiva** (qué tomar y cómo):

- **Vitamina D3** pasa a obligatoria a diario por baja exposición al sol.
- **Bandas de resistencia**: reformulado a "ya las tienes, úsalas así" (sin pitch de compra).
- **Proteína**: al acabarse el gainer, arrancar **whey limpia** (qué, cuánto y cómo).

El HTML original se conserva en `Rutina_Gym_V3.html` como referencia.

## PWA

Instalable en el teléfono (Añadir a pantalla de inicio):

- `public/manifest.webmanifest` — nombre, iconos, `display: standalone`, colores.
- `public/sw.js` — service worker (network-first en navegación, cache-first en assets). Se registra **solo en producción** desde `Layout.astro`.
- Iconos generados con `pnpm gen:icons` (desde `public/icon-source.svg` vía `sharp`):
  `pwa-192.png`, `pwa-512.png`, `apple-touch-icon.png`, `favicon-32.png`.
- Metas iOS (`apple-mobile-web-app-*`) + `theme-color` + `viewport-fit=cover` en el `<head>`.

> Al cambiar contenido/estilos, sube la versión del caché en `public/sw.js`
> (`rutina-cache-v1` → `-v2`…) para forzar actualización en dispositivos ya instalados.

### Cambiar el ícono

Edita `public/icon-source.svg` y corre `pnpm gen:icons`.

## Deploy en Vercel

Vercel autodetecta Astro (build `astro build`, salida `dist/`). Opciones:

```
# opción CLI
pnpm dlx vercel        # preview
pnpm dlx vercel --prod # producción
```

O conecta el repo en vercel.com. `vercel.json` ya fija los headers de `/sw.js`
(sin caché) y el `Content-Type` del manifest. Vercel sirve por HTTPS, requisito
de la PWA — ábrela en el teléfono y usa **Añadir a pantalla de inicio**.
