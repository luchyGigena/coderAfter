# coderAfter
After de consultas- express avanzado


Realizamos los ejercicios correspondientes a las clases de Express avanzado - Router /multer


Crear un servidor que permita manejar una lista de mascotas y personas. Debe poseer dos rutas principales: '/mascotas' y '/personas', las cuales deben incluir métodos para listar y para agregar recursos:
GET: devolverá la lista requerida en formato objeto.
POST: permitirá guardar una persona ó mascota en arrays propios en memoria, con el siguiente formato: 
Persona -> { "nombre": ..., "apellido": ..., "edad":... }
Mascota -> { "nombre":..., "raza":..., "edad":... }


- Utilizar el Router de express para definir las rutas base, implementando las subrutas en los métodos correspondientes.
- Probar la funcionalidad con Postman.
- El servidor escuchará peticiones en el puerto 8080 y mostrará en la consola un mensaje de conexión que muestre dicho puerto, junto a los mensajes de error si ocurriesen.
--------------parte 2- --------------------------------------------

Partiendo del ejercicio anterior, generar una carpeta pública 'public' en el servidor, la cual tendrá un archivo index.html. 
En ese archivo se encontrarán dos formularios: uno que permita ingresar mascotas y otro personas utilizando el método post
Probar el ingreso de datos mediante los formularios y con Postman
Verificar los datos cargados en cada caso.
