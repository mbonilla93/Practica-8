

// Ejercicio 1
let tieneLicencia = true;
let tieneAuto = false;

if (tieneLicencia && tieneAuto) {
  console.log("Puede conducir");
} else {
  console.log("No puedes conducir");
}

// Ejercicio 2
let esEstudiante = true;
let tieneCarnet = true;
let descuento = esEstudiante && tieneCarnet;
console.log("¿Tiene descuento?:", descuento);

// Ejercicio 3
let llueve = true;
let tengoSombrilla = false;

if (llueve && !tengoSombrilla) {
  console.log("Te mojarás");
} else if (llueve && tengoSombrilla) {
  console.log("Estás protegido");
}

// Ejercicio for clasico while


// Ejercicio 1: for de 1 a 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// Ejercicio 2: while de 10 a 1
let j = 10;
while (j >= 1) {
  console.log(j);
  j--;
}

// Ejercicio 3: tabla de multiplicar
let numero = 7; 
for (let i = 1; i <= 10; i++) {
  console.log(`${numero} x ${i} = ${numero * i}`);
}
 // Vectores y arreglos

// Ejercicio 1
let colores = ["Rojo", "Azul", "Verde", "Amarillo", "Negro"];
for (let i = 0; i < colores.length; i++) {
  console.log("Color favorito:", colores[i]);
}

// Ejercicio 2
let numeros = [5, 10, 15];
let suma = 0;
for (let i = 0; i < numeros.length; i++) {
  suma += numeros[i];
}
console.log("Suma total:", suma);


// Funciones 

// Ejercicio 1
function saludar(nombre) {
  console.log("Hola,", nombre + "!");
}
saludar("Marco");

// Ejercicio 2
function esPar(num) {
  return num % 2 === 0;
}
console.log(esPar(4)); // true
console.log(esPar(7)); // false

// Ejercicio 3
function areaRectangulo(base, altura) {
  return base * altura;
}
console.log("Área:", areaRectangulo(5, 3));
console.log("Área:", areaRectangulo(10, 4));


// Objetos 

// Ejercicio 1
let libro = {
  titulo: "Cien Años de Soledad",
  autor: "Gabriel García Márquez",
  año: 1967
};
console.log(`El libro ${libro.titulo} fue escrito por ${libro.autor} en el año ${libro.año}.`);

// Ejercicio 2
let auto = {
  marca: "Toyota",
  modelo: "Corolla",
  año: 2020,
  encendido: true
};
console.log(`El auto está ${auto.encendido ? "encendido" : "apagado"}.`);

// Ejercicio 3
let usuario = {
  nombre: "Marco",
  edad: 28,
  ciudad: "Heredia"
};
usuario.correo = "marco@email.com";
console.log(usuario);
