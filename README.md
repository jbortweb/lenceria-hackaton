# Hackathon Project - Tienda de Ropa y Complementos

Este proyecto es una tienda en línea que ofrece una amplia variedad de ropa íntima, calcetines, tops, camisetas y más. Está diseñado para proporcionar una experiencia de usuario fluida y moderna, utilizando tecnologías como Nuxt.js y Clerk para la autenticación.

## Descripción del Proyecto

La tienda permite a los usuarios explorar diferentes categorías de productos, ver detalles de cada artículo y gestionar su cuenta de usuario. Clerk se ha integrado para manejar la autenticación de usuarios, proporcionando un inicio de sesión seguro y una experiencia personalizada.

### Características principales:

- Navegación por categorías y subcategorías.
- Detalles de productos con imágenes y descripciones.
- Autenticación de usuarios con Clerk.
- Diseño responsivo y moderno.

## Demo

Puedes acceder a la demo del proyecto en el siguiente enlace:

[Demo del Proyecto](https://demo-tienda-hackathon.com)

## Capturas de Pantalla

### Página Principal

![Página Principal](https://via.placeholder.com/800x400?text=Captura+de+Pantalla+1)

### Detalles del Producto

![Detalles del Producto](https://via.placeholder.com/800x400?text=Captura+de+Pantalla+2)

### Inicio de Sesión con Clerk

![Inicio de Sesión](https://via.placeholder.com/800x400?text=Captura+de+Pantalla+3)

## Uso de Clerk

Clerk se ha utilizado para gestionar la autenticación de usuarios en este proyecto. Las principales funcionalidades implementadas con Clerk incluyen:

- **Inicio de sesión y registro**: Los usuarios pueden registrarse o iniciar sesión utilizando su correo electrónico o número de teléfono.
- **Gestión de sesiones**: Clerk asegura que las sesiones de los usuarios sean seguras y persistentes.
- **Protección de rutas**: Se han protegido rutas específicas, como las páginas de administración, para que solo los usuarios autenticados puedan acceder a ellas.
- **Localización**: Clerk se ha configurado para mostrar mensajes y formularios en español.

### Configuración de Clerk

En el archivo `.env`, se han configurado las claves necesarias para Clerk:

```env
NUXT_PUBLIC_CLERK_PUBLISHABLE_KEY=tu_clave_publica
NUXT_CLERK_SECRET_KEY=tu_clave_secreta
```

En el middleware `clerk.ts`, se ha integrado Clerk para proteger rutas específicas:

```typescript
// filepath: /home/vant/Escritorio/proyectos/hackaton/hackaton/server/middleware/clerk.ts
import { clerkMiddleware } from '@clerk/nuxt/server'

export default clerkMiddleware((event) => {
  const { userId } = event.context.auth()
  const isAdminRoute = event.path.startsWith('/admin')

  if (!userId && isAdminRoute) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized: User not signed in',
    })
  }
})
```

## Instalación y Configuración

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/hackathon-tienda.git
   cd hackathon-tienda
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura las claves de Clerk en un archivo `.env` como se muestra anteriormente.

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Accede a la aplicación en `http://localhost:3000`.

## Contribuciones

Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request. ¡Toda ayuda es bienvenida!

## Licencia

Este proyecto está bajo la licencia MIT.
