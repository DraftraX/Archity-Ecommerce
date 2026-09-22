# Archity-Ecommerce

Frontend de e-commerce en **Astro + TypeScript**, listo para desplegar en Vercel.

> ⚠️ Proyecto **frontend-only**: pagos, pedidos y checkout son simulados. No existe backend real.

## Características

- Catálogo visual con 12+ productos mock tipados.
- Búsqueda, categorías, ordenamiento y carga progresiva.
- Estado vacío cuando no hay resultados.
- Detalle de producto por ruta dinámica (`/product/[slug]`).
- Carrito funcional con:
  - agregar/quitar productos
  - control de cantidades
  - subtotal, envío y total
  - cupón demo (`ARCHITY10`)
  - drawer responsive
- Favoritos persistentes con drawer dedicado.
- Persistencia de carrito/favoritos/cupón por `localStorage` solo cliente (sin romper SSR).
- Checkout simulado con formulario validado.
- Selección de entrega/pago simulado y pantalla de confirmación.
- Toast feedback, navegación móvil, hover/focus states, accesibilidad y responsive mobile-first.
- SEO básico (`title`, `description`, Open Graph, robots).

## Estructura

```text
.
├── astro.config.mjs
├── package.json
├── public/
│   └── placeholder.svg
├── src/
│   ├── components/
│   ├── data/
│   ├── layouts/
│   ├── lib/
│   ├── pages/
│   └── styles/
└── tsconfig.json
```

## Instalación

```bash
npm install
```

## Scripts

```bash
npm run dev      # desarrollo
npm run build    # build producción
npm run preview  # preview local del build
npm run check    # chequeo Astro/TypeScript
```

## Despliegue en Vercel

1. Importa el repositorio en Vercel.
2. Framework preset: **Astro**.
3. Build command: `npm run build`.
4. Output directory: `dist`.

No se necesitan variables de entorno para el flujo actual.

## Límites del enfoque frontend-only

- No hay autenticación real.
- No hay pagos reales.
- No hay gestión de inventario en servidor.
- La persistencia depende del navegador (`localStorage`) y se pierde al limpiar datos del sitio.
