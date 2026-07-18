# CreaHistoria Studio

Sitio de portfolio y contacto de CreaHistoria Studio, construido con Nuxt 4 y Vue 3.

## Requisitos

- Docker
- Docker Compose

Los comandos del proyecto se ejecutan dentro del servicio `node`; no hace falta instalar Node.js ni pnpm en el host.

## Desarrollo

Instala las dependencias exactas del lockfile:

```bash
docker compose run --rm node pnpm install --frozen-lockfile
```

Inicia el servidor en [http://localhost:3000](http://localhost:3000):

```bash
docker compose run --rm --service-ports node pnpm dev --host 0.0.0.0
```

## Variables de entorno

Copia `.env.example` a `.env` y configura las credenciales SMTP usadas por el formulario de contacto:

- `NUXT_SMTP_HOST`
- `NUXT_SMTP_USER`
- `NUXT_SMTP_PASSWORD`
- `NUXT_SMTP_TO`
- `NUXT_PUBLIC_SITE_URL`

`NUXT_SMTP_PORT` es opcional y usa `465` por defecto.

## Validación

Genera el build de producción:

```bash
docker compose run --rm node pnpm build
```

Sirve el build localmente:

```bash
docker compose run --rm --service-ports node pnpm preview --host 0.0.0.0
```

Valida el chart de Kubernetes:

```bash
helm lint --strict helm
```

## Estructura

- `app/pages/`: rutas.
- `app/components/`: componentes Vue.
- `app/assets/scss/`: estilos globales y variables.
- `server/api/`: endpoints Nitro.
- `public/`: imágenes y archivos estáticos.
- `docker/`: imágenes de desarrollo y producción.
- `helm/`: despliegue en Kubernetes.
