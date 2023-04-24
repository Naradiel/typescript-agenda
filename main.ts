// Importamos las clases para poder crear la agenda con todos los campos que hemos definido previamente
import { Persona } from "./persona";
import { Direccion } from "./direccion";
import { Telefono } from "./telefono";
import { Mail } from "./mail";

// Creamos un array vacío para introducir los datos luego
let arrayPersonas: Array<Persona> = [];

// Creamos 3 registros de Persona diferentes
let persona1 = new Persona (
    'Pedro',
    'García',
    42,
    '32453685F',
    "1979-05-12",
    'verde',
    'hombre',
    new Direccion('Calle Mayor', 34, 1, 'C', 28042, 'Madrid', 'Madrid'),
    new Mail('personal', 'pedro_garcia@gmail.com'),
    new Telefono('móvil', 654987321),
    ''
    );

let persona2 = new Persona (
    'Laura',
    'Hernández',
    25,
    '72685412L',
    "1996-10-18",
    'morado',
    'mujer',
    new Direccion('Avenida de los Menceyes', 8, 2, 'B', 38201, 'San Cristóbal de La Laguna', 'Tenerife'),
    new Mail('personal', 'laura_hernandez96@gmail.com'),
    new Telefono('móvil', 622345678),
    'Tener en cuenta la hora menos en Canarias'
    );

let persona3 = new Persona (
    'Javier',
    'Vargas',
    39,
    '62986431G',
    "1984-03-04",
    'gris',
    'hombre',
    new Direccion('Rúa de San Francisco', 23, 4, 'A', 15701, 'Santiago de Compostela', 'Galicia'),
    new Mail('personal', 'javier_vargas@gmail.com'),
    new Telefono('móvil', 635789123),
    ''
    );

// Guardamos los registros de persona en arrayPersona
arrayPersonas.push(persona1);
arrayPersonas.push(persona2);
arrayPersonas.push(persona3);

// Mostramos en la consola los registros que hemos creado
console.log('Listado de personas en la agenda: ');
arrayPersonas.forEach(persona => {
  console.log('Nombre:', persona.nombre);
  console.log('Apellido:', persona.apellidos);
  console.log('Edad:', persona.edad);
  console.log('DNI:', persona.dni);
  console.log('Fecha de nacimiento:', persona.cumpleanos);
  console.log('Color favorito:', persona.colorfav);
  console.log('Género:', persona.sexo);

  persona.direcciones.forEach(direccion => {
    console.log('Calle:', direccion.calle);
    console.log('Número:', direccion.numero);
    console.log('Piso:', direccion.piso);
    console.log('Letra:', direccion.letra);
    console.log('Código postal:', direccion.codigoPostal);
    console.log('Población:', direccion.poblacion);
    console.log('Provincia:', direccion.provincia);
  });

  persona.mails.forEach(mail => {
    console.log('Tipo de correo electrónico:', mail.tipo);
    console.log('Dirección de correo electrónico:', mail.direccion);
  });

  persona.telefonos.forEach(telefono => {
    console.log('Tipo de teléfono:', telefono.tipo);
    console.log('Número de teléfono:', telefono.numero);
  });

  console.log('Notas adicionales:', persona.notas);
  console.log('--------------------------------------');
});

// Buscamos dentro del array aquella persona que tenga un valor dado de DNI
let personaEncontrada = arrayPersonas.find(persona => persona.dni === '32453685F');

if (personaEncontrada) {
    console.log('La persona encontrada es:', personaEncontrada);

    // Accedemos al array de direcciones, emails y teléfono de la persona encontrada y lo modificamos
    personaEncontrada.direcciones[0].calle = 'Gran Vía';
    personaEncontrada.direcciones[0].numero = 56;
    personaEncontrada.direcciones[0].piso = 7;
    personaEncontrada.direcciones[0].letra = 'D';
    personaEncontrada.direcciones[0].codigoPostal = 28044;
    personaEncontrada.direcciones[0].poblacion = 'Madrid';
    personaEncontrada.direcciones[0].provincia = 'Madrid';

    personaEncontrada.mails[0].tipo = 'trabajo';
    personaEncontrada.mails[0].direccion = 'pgarcia@unelco.com';

    personaEncontrada.telefonos[0].tipo = 'trabajo';
    personaEncontrada.telefonos[0].numero = 912345678;

    console.log('La dirección, email y teléfono de la persona encontrada han sido modificados:', personaEncontrada);
} else {
    console.log('No se ha encontrado ninguna persona con ese DNI');
}

// Volvemos a mostrar el array de personas pero ahora aparecerá con los cambios que indicamos anteriormente
console.log('Listado de personas en la agenda: ');
arrayPersonas.forEach(persona => {
  console.log('Nombre:', persona.nombre);
  console.log('Apellido:', persona.apellidos);
  console.log('Edad:', persona.edad);
  console.log('DNI:', persona.dni);
  console.log('Fecha de nacimiento:', persona.cumpleanos);
  console.log('Color favorito:', persona.colorfav);
  console.log('Género:', persona.sexo);

  persona.direcciones.forEach(direccion => {
    console.log('Calle:', direccion.calle);
    console.log('Número:', direccion.numero);
    console.log('Piso:', direccion.piso);
    console.log('Letra:', direccion.letra);
    console.log('Código postal:', direccion.codigoPostal);
    console.log('Población:', direccion.poblacion);
    console.log('Provincia:', direccion.provincia);
  });

  persona.mails.forEach(mail => {
    console.log('Tipo de correo electrónico:', mail.tipo);
    console.log('Dirección de correo electrónico:', mail.direccion);
  });

  persona.telefonos.forEach(telefono => {
    console.log('Tipo de teléfono:', telefono.tipo);
    console.log('Número de teléfono:', telefono.numero);
  });

  console.log('Notas adicionales:', persona.notas);
  console.log('--------------------------------------');
});
