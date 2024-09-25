
# Movies App


## Descripción

**Movies App** es una aplicación web que permite a los usuarios explorar películas, series y personas populares. Los usuarios pueden buscar contenido, ver detalles de películas, series y actores, y navegar a través de diferentes categorías como películas populares, próximas, o las series mejor valoradas.

La aplicación está construida con **React** y hace uso de la API de **The Movie Database (TMDb)** para obtener los datos.

## Características

- **Exploración de contenido**: Descubre películas y series en diferentes categorías (populares, mejor valoradas, en emisión, etc.).
- **Búsqueda**: Busca películas, series y personas en la base de datos de TMDb.
- **Detalles**: Ver detalles detallados de cada película, serie o persona.
- **Paginación dinámica**: Soporte para paginación en las listas de películas/series.
- **SPA (Single Page Application)**: Navegación fluida sin recargas de página.
- **Responsividad**: Diseño adaptado para dispositivos móviles y de escritorio.

## Tecnologías

- **Frontend**: React, CSS Grid, Flexbox
- **Routing**: React Router DOM
- **API**: The Movie Database (TMDb) API
- **Despliegue**: Netlify

## Instalación y ejecución

### Instalación

1. Clona el repositorio:

   ```bash
   git clone https://github.com/Creatlydev/movies-app.git
   ```

2. Entra en el directorio del proyecto:

   ```bash
   cd movies-app
   ```

3. Instala las dependencias del proyecto:

   ```bash
   npm install
   # o si prefieres Yarn
   yarn install
   ```

### Ejecución en local

1. Configura tu archivo \`.env\` en el directorio raíz del proyecto con tu clave de API de TMDb:

   ```env
   VITE_TMDB_API_KEY=tu_clave_de_tmdb
   ```

2. Inicia la aplicación en modo desarrollo:

   ```bash
   npm run dev
   ```

3. Abre tu navegador en \`http://localhost:3000\` para ver la aplicación en funcionamiento.

### Despliegue

La aplicación está configurada para ser desplegada fácilmente en **Netlify**. Si usas otro servicio de hosting, asegúrate de manejar las rutas de tu SPA adecuadamente.

Para Netlify, asegúrate de agregar un archivo \`_redirects\` en tu carpeta de distribución (\`/dist\` o \`/build\`):

```txt
/*    /index.html   200
```

## Uso

1. **Navegación**: Utiliza el menú de navegación para explorar las diferentes secciones de películas y series.
2. **Búsqueda**: Introduce el nombre de una película, serie o actor en la barra de búsqueda.
3. **Ver detalles**: Haz clic en cualquier película, serie o persona para ver sus detalles.

## Estructura del proyecto

```bash
src/
│
├── components/          # Componentes reutilizables (e.g., Movies, MovieCard, etc.)
├── hooks/               # Custom hooks (useDetails, useSearchMulti, etc.)
├── pages/               # Componentes principales de página (Home, MovieDetails, etc.)
├── services/            # Funciones para hacer fetch a la API de TMDb
├── styles/              # Estilos globales y específicos de componentes
└── App.js               # Componente principal de la aplicación
```

## API utilizada

Esta aplicación utiliza la API de **The Movie Database (TMDb)** para obtener información sobre películas, series y personas.

- Documentación oficial de TMDb: https://developers.themoviedb.org/3

## Licencia

Este proyecto está bajo la licencia MIT. Consulta el archivo \`LICENSE\` para más detalles.