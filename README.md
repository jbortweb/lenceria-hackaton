# Hackathon Project - Tienda de Ropa y Complementos

Este proyecto es una tienda en línea que ofrece una amplia variedad de ropa íntima, calcetines, tops, camisetas y más. Está diseñado para proporcionar una experiencia de usuario fluida y moderna, utilizando tecnologías como Nuxt.js, Tailwind y Clerk para la autenticación.

## Descripción del Proyecto

La tienda permite a los usuarios explorar diferentes categorías de productos, ver detalles de cada artículo y poder elegir los productos para realizar un pedido. Clerk se ha integrado para manejar la autenticación de usuarios, proporcionando un inicio de sesión seguro y una experiencia personalizada.

### Características principales:

- Navegación por categorías y subcategorías.
- Detalles de productos con imágenes y descripciones.
- Autenticación de usuarios con Clerk.
- Diseño responsivo y moderno.

## Demo

Puedes acceder a la demo del proyecto en el siguiente enlace:

[Demo del Proyecto](https://lenceria-hackaton.netlify.app/)

## Capturas de Pantalla

### Categorías

![categorias](https://github.com/user-attachments/assets/2dc87f11-511c-4a3d-9944-815649df0869)

### Detalles del Producto

![producto](https://github.com/user-attachments/assets/f0fa19e8-2089-47a7-9d62-84caa136d163)

### Inicio de Sesión con Clerk

![login](https://github.com/user-attachments/assets/ef24dc76-eee1-4edb-a627-237da62865af)

### Carousel

![carousel](https://github.com/user-attachments/assets/7d535fea-80ee-4b22-a9a1-a9b472c26f94)

## Uso de Clerk

Clerk se ha utilizado para gestionar la autenticación de usuarios en este proyecto. Las principales funcionalidades implementadas con Clerk incluyen:

- **Inicio de sesión**: Los administradores puede iniciar sesión utilizando su correo electrónico o la cuenta de Google y Github.
- **Gestión de sesiones**: Clerk asegura que la sesion de los administradores sean seguras y persistentes.
- **Protección de rutas**: Se han protegido rutas específicas, como las páginas de administración, para que solo los usuarios autenticados puedan acceder a ellas.
- **Localización**: Clerk se ha configurado para mostrar mensajes y formularios en español.

## Instalación y Configuración

1. Clona este repositorio:

   ```bash
   git clone https://github.com/jbortweb/lenceria-hackaton.git
   cd hackathon-tienda
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Configura las claves de Clerk en un archivo `.env`.

4. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

5. Accede a la aplicación en `http://localhost:3000`.

## Contribuciones

Si deseas contribuir a este proyecto, por favor abre un issue o envía un pull request. ¡Toda ayuda es bienvenida!

## Licencia

Este proyecto está bajo la licencia MIT.
