# Shopeame

## Concepto principal

Pequeña aplicación de una tienda de productos realizada en Angular y utilizando TypeScript. 

Incluye lazy routing, servicios, endpoints, componentes, modelos, peticiones CRUD a una API externa y funcionalidad total.

## Descripción general

### Header

Elemento fijo en todos los endpoints del proyecto.

Incluye el título de la página junto con su logo y un pequeño nav abajo con los diferentes endpoints de la página, cambiando cada botón de color dependiendo de la página en la página en la que te encuentres.

### Body

Aquí se imprimirá el contenido de cada endpoint.

#### Home

Sirve de introducción a la página, unos párrafos con texto aleatorio y unos headings.

#### Products

Aquí se pueden encontrar todos los productos disponibles en la API remota. Cada producto consta de:

- Imágen de tamaño fijo.
- Título.
- Precio en €.
- Descripción del producto.
- Rating en estrellas, entre 0 y 5.

También se incluyen dos botones, uno de editar y otro de eliminar.

##### Editar

Te redirige a la página de gestión y allí podrás editar todos los campos que quieras, y volver a enviar el producto habiendo pasado las validaciones pertinentes. Dichos cambiós se guardarán en la API y se volverán a mostrar los productos con dichas modificaciones.

##### Eliminar

Elimina directamente el producto seleccionado, y muestra automaticamente los productos resultantes.

#### Gestión

Aquí disponemos de un formulario y una vista previa del objeto, que nos sirve tanto para la creación como la edición de productos.

##### Crear producto

Simplemente introduces los campos pertinentes, bajo ciertas condiciones (todos los campos son requeridos, el precio ha de ser numérico y el rating ha de estar comprendido entre 0 y 5 estrellas). Una vez creado el producto, este se añade a la API y se te redireccionará a la página de productos, donde puedes ves la lista actualizada de productos.

### Footer

Elemento fijo en todos los endpoints del proyecto.

Muestra unos enlaces a ciertas RRSS de interés, junto al copyright, el nombre de la página y el año (dinámico). Tiene un tamaño fijo, y si los elementos del body no son demasiado grandes siempre aparecerá anclado abajo del todo, como por ejemplo si eliminamos unos pocos productos.
