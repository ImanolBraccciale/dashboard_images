
  
 # Proyecto Dashboard y Login Modal
## Tabla de Contenidos

1. [Descripción](#descripción)
2. [Estructura del Proyecto](#estructura-del-proyecto)
3. [Componentes](#Componentes)
4. [Imágenes](#Imágenes)
5. [Mobile](#Mobile)
6. [Instrucciones para Ejecutar el Frontend](#instrucciones-para-ejecutar-el-frontend)
6. [Instrucciones para Construir y Ejecutar el Frontend con Docker](#Instrucciones-para-Construir-y-Ejecutar-el-Frontend-con-Docker)
 
## Descripción
Este proyecto consiste en una aplicación React que incluye:

- **Dashboard**: Un componente que proporciona una vista principal con una barra lateral y un área principal para la visualización de contenido. Incluye también un modal para subir imágenes.
- **LoginModal**: Un modal para que los usuarios inicien sesión en la aplicación. Incluye campos para el correo electrónico y la contraseña, con opciones para recordar al usuario y recuperar la contraseña.

La aplicación utiliza hooks personalizados y un enrutamiento básico para la navegación.




## Estructura del Proyecto
```
/app
    /assets
    /components
        /Dashboard
            -CardActions.tsx
            -CaseSummary
            -EditResultModal
            -LoadingState
            -QuickActions.tsx
            -ResultItemCard.tsx
            -ResultItemCard.tsx
            -Sidebar.tsx
            -UploadImageModal.tsx
        /ErrorMessage
            -ErrorMessage.tsx
        /Skeleton
            -Skeleton.tsx
        -LoginModal.tsx
    /Hooks 
        /Dashboard
            -Hooks.tsx
        -useDashboard.tsx
    /pages
        /Dashboard
            -page.tsx
    /utils
        -ImageMagnifier.tsx
- layout.tsx
- page.tsx

```

## Componentes

 ### 1. Dashboard

**Implementación:**

- **Sidebar**: Se encuentra en el lado izquierdo de la pantalla y maneja la navegación entre diferentes secciones del Dashboard.
- **UploadImageModal**: Modal que permite la carga de imágenes, visible o invisible en función del estado `isModalOpen`.
- **useDashboard Hook**: Hook personalizado que gestiona el estado del modal, maneja eventos en la barra lateral y renderiza el contenido principal.

**Funciones Principales del Hook `useDashboard`:**

- `fetchResults`: Obtiene resultados desde un archivo simulado y maneja errores y estado de carga.
- `handleOpenModal / handleCloseModal`: Controla la apertura y cierre del modal.
- `handleUploadSuccess`: Actualiza los resultados con datos nuevos y cierra el modal.
- `handleSidebarItemClick`: Cambia el estado según el elemento seleccionado en la barra lateral.
- `handleDeleteResult`: Elimina un resultado por ID.
- `handleUpdateResult`: Actualiza un resultado existente.
- `handleToggleVisibility`: Alterna la visibilidad de un resultado por ID.
- `renderMainContent`: Renderiza el contenido principal según el elemento seleccionado.

**Estados:**

- `isModalOpen`: Controla la visibilidad del modal.
- `results`: Almacena los resultados obtenidos.
- `uniqueResults`: Almacena resultados únicos para mostrar.
- `selectedItem`: Elemento actualmente seleccionado en la barra lateral.
- `loading`: Indica si se está cargando datos.
- `error`: Almacena mensajes de error.

### 2. LoginModal

**Implementación:**

- **Estado del Modal**: Utiliza `useState` para controlar la visibilidad del modal.
- **Formulario de Inicio de Sesión**: Incluye campos para correo electrónico y contraseña, y maneja la autenticación básica.
- **Navegación**: Redirige al usuario al Dashboard si las credenciales son correctas.

## Componentes del Dashboard

### CardActions

**Descripción:** Proporciona botones para eliminar y actualizar acciones de una tarjeta.

**Props:**

- `onDelete`: Función a ejecutar al hacer clic en "Eliminar".
- `onUpdate`: Función a ejecutar al hacer clic en "Actualizar".

### CaseSummary

**Descripción:** Muestra un resumen de los resultados con imágenes y datos de la IA.

**Props:**

- `result`: Objeto con datos del resultado.

### ResultsSummary

**Descripción:** Muestra un resumen de los resultados de la IA. Permite editar y ocultar resultados, y maneja un estado de carga mientras se obtienen los datos.

**Props:**

- `visible`: Booleano que indica si los resultados deben mostrarse o no (por defecto es `true`).
- `results`: Array de objetos `ResultItem` que contienen los datos de los resultados.
- `loading`: Booleano que indica si se está cargando la información.

**Estado Interno:**

- `filteredResults`: Array de resultados filtrados según el estado de visibilidad.
- `selectedResult`: Resultado actualmente seleccionado para edición.
- `isModalOpen`: Booleano que indica si el modal de edición está abierto.
- `showError`: Booleano que indica si se debe mostrar un mensaje de error durante el estado de carga.

**Métodos Internos:**

- `handleEditClick(result: ResultItem)`: Abre el modal de edición con el resultado seleccionado.
- `handleUpdate(updatedResult: ResultItem)`: Actualiza un resultado existente con los datos modificados.
- `handleRequestClose()`: Cierra el modal de edición y resetea el resultado seleccionado.
- `handleHideClick(id: string)`: Alterna la visibilidad de un resultado específico.

**Comportamiento:**

- Cuando `loading` es `true`, se muestra el componente `LoadingState`.
- Si no hay resultados y no se está cargando, se muestra un mensaje de error.
- Los resultados se muestran en tarjetas (`ResultItemCard`), y cada tarjeta permite editar o ocultar el resultado.
- El modal de edición (`EditResultModal`) se muestra para modificar los detalles del resultado seleccionado.


### EditResultModal

**Descripción:** Modal para editar resultados, incluyendo campos para "Wrong Total Cells", "Wrong Positive Cells", "Wrong Negative Cells" y una casilla para marcar como eliminado.

**Props:**

- `result`: Objeto con datos del resultado a editar.
- `isOpen`: Booleano que indica si el modal está abierto.
- `onRequestClose`: Función para cerrar el modal.
- `onUpdate`: Función para actualizar el resultado.

### LoadingState

**Descripción:** Muestra un estado de carga basado en si hay un error o no, usando `Skeleton` para el estado de carga y `ErrorMessage` para el mensaje de error.

**Props:**

- `showError`: Booleano que indica si se debe mostrar un mensaje de error.

### ErrorMessage

**Descripción:** Muestra un mensaje de error con una opción para recargar la página.

### Skeleton

**Descripción:** Muestra un esqueleto de carga con un diseño de tarjetas, simulando encabezados, imágenes y detalles de texto.

### QuickActions

**Descripción:** Proporciona un área para realizar acciones rápidas, como cargar una imagen.

**Props:**

- `onOpenModal`: Función de callback que se llama cuando se hace clic en el botón de "Cargar Imagen".

### ResultItemCard

**Descripción:** Muestra una tarjeta con los detalles de un resultado, incluyendo imágenes y estadísticas relacionadas. Incluye botones para editar y ocultar el resultado.

**Props:**

- `result`: Objeto que contiene la información del resultado.
- `onEditClick`: Función de callback que se llama cuando se hace clic en el botón "Editar".
- `onHideClick`: Función de callback que se llama cuando se hace clic en el botón "Ocultar".

## Componente Sidebar

**Descripción:** El componente Sidebar representa una barra lateral de navegación para un dashboard, con enlaces a diferentes secciones y menús desplegables para categorías específicas relacionadas con resultados médicos.

**Propiedades:**

- `onItemSelect (función)`: Se llama cuando el usuario selecciona un ítem de navegación. Recibe el identificador del ítem seleccionado como argumento.

**Estructura:**

- **Título:** "Dashboard"
- **Enlaces principales:** Inicio, Perfil, Resultados, Resultados Eliminados.
- **Categorías de cáncer:** Menús desplegables para "Cáncer de Próstata" y "Cáncer de Mama".

**Características:**

- **Menú de navegación:** Utiliza enlaces para navegar entre diferentes páginas del dashboard.
- **Menú desplegable:** Permite expandir o contraer secciones para mostrar opciones adicionales.

## Componente UploadImageModal

**Descripción:** El componente UploadImageModal es un modal que permite a los usuarios cargar imágenes. Incluye opciones para seleccionar un ítem asociado con la imagen, mostrar una vista previa de la imagen y simular el proceso de carga.

**Propiedades:**

- `isOpen (booleano)`: Indica si el modal está abierto o cerrado.
- `onRequestClose (función)`: Se llama cuando el usuario desea cerrar el modal.
- `onUploadSuccess (función)`: Se llama cuando la imagen se carga exitosamente. Recibe el resultado de la carga como argumento.

**Estado Interno:**

- `selectedItem (string)`: El ítem seleccionado para asociar con la imagen.
- `image (File | null)`: El archivo de imagen cargado.
- `imageUrl (string | null)`: La URL de la vista previa de la imagen.
- `openOptions (booleano)`: Indica si el menú de selección de ítem está abierto.
- `isLoading (booleano)`: Indica si la imagen se está cargando.

**Características:**

- **Selección de imagen:** Permite al usuario seleccionar un archivo de imagen desde su dispositivo.
- **Vista previa de imagen:** Muestra una vista previa de la imagen seleccionada.
- **Simulación de carga:** Simula el proceso de carga de la imagen y muestra los resultados después de un retraso.

Aquí hay algunas capturas de pantalla que muestran diferentes componentes y vistas de la aplicación:


### Imágenes

### Login Modal

![Login Modal](/public/login.png)

### Dashboard

![Dashboard](/public/DASH.png)

### Resultados

![Resultados](/public/results.png)

### Resultados Eliminados

![Resultados Eliminados](/public/resulDel.png)

### Acción Rápida

![Acción Rápida](/public/2.png)

### Modal Edit

![Modal Edit](/public/edit.png)

### Panel

![Panel](/public/3.png)

### Caso Her2

![Caso Her2](/public/case.png)

### Zoom

![Zoom](/public/z.png)

### Skeleton

![Skeleton](/public/skel.png)

### Error

![Error](/public/error.png)

## Mobile 
![Mobile Panel](/public/mpanes.png)
![Mobile Menu](/public/mmenu.png)
![Mobile Results](/public/mresults.png)
![Mobile Upload](/public/mupload.png)

## **Instrucciones para Ejecutar el Frontend**

   1. **Clona el repositorio**:
      ```bash
         https://github.com/ImanolBraccciale/dashboard_images.git
      ```

   2. **Navega al directorio del proyecto**:
      ```bash
      cd dashboard_images
      ```

   3. **Instala las dependencias**:
      Asegúrate de tener [Node.js](https://nodejs.org/) instalado. Luego, ejecuta:
      ```bash
      npm install
      ```
      o si usas Yarn:
      ```bash
      yarn install
      ```

   4. **Inicia el servidor de desarrollo**:
      Ejecuta el siguiente comando para iniciar la aplicación en modo desarrollo:
      ```bash
      npm run dev
      ```
      o si usas Yarn:
      ```bash
      yarn dev
      ```

   5. **Accede a la aplicación**:
      Abre tu navegador y visita [http://localhost:3000](http://localhost:3000) para ver la aplicación en ejecución.

   6. **Construye la aplicación para producción**:
      Para crear una versión optimizada para producción, ejecuta:
      ```bash
      npm run build
      ```
      o si usas Yarn:
      ```bash
      yarn build
      ```

   7. **Ejecuta la aplicación en modo producción**:
      Una vez construida, puedes ejecutar la aplicación en modo producción con:
      ```bash
      npm start
      ```
      o si usas Yarn:
      ```bash
      yarn start
      ```
   8. **Entrar a la dashboard**:
        Puedes usar el usuario y contraseña que se encuentra en el Hooks/Dashboard/hooks.tsx
      ```bash
        usuario = test@example.com
        contraseña = 1234
      ```
      o entrar directamente pegando la url :
      ```bash
            http://localhost:3000/pages/DashBoard

      ```

      **EXTRA**

 ## **Instrucciones para Construir y Ejecutar el Frontend con Docker**

   1. **Instala Docker**:
      Asegúrate de tener [Docker](https://www.docker.com/get-started) instalado en tu máquina.

   2. **Construye la imagen Docker**:
      Navega al directorio del proyecto y ejecuta el siguiente comando para construir la imagen Docker:
      ```bash
      docker build -t dashboard_images.
      ```

   3. **Ejecuta el contenedor Docker**:
      Una vez que la imagen se haya construido, ejecuta el contenedor con el siguiente comando:
      ```bash
      docker run -p 3000:3000 dashboard_images
      ```

   4. **Accede a la aplicación**:
      Abre tu navegador y visita [http://localhost](http://localhost) para ver la aplicación en ejecución dentro del contenedor Docker.

   5. **Opcional: Ejecuta en modo desarrollo**:
      Si necesitas ejecutar la aplicación en modo desarrollo dentro de un contenedor Docker, puedes modificar el `Dockerfile` para utilizar `npm run dev` en lugar de `npm run build`, y luego construir y ejecutar el contenedor de manera similar.

