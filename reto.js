let nombre;
let apellido;
let edad;
let teGustaProgramar;
let sueldoActual;

persona = {
    nombre: "Juan",
    apellido: "Álvaro",
    edad: 43,
    teGustaProgramar: true,
    sueldoActual: null
}

persona2 = {
    nombre: "María",
    apellido: "González",
    edad: 30,
    teGustaProgramar: false,
    sueldoActual: 1000
}

let intereses = ["programación", "música", "fútbol"];
let intereses2 = ["dibujo", "natación", "cine"];

function mostrarInfo(persona) {
    console.log(persona, intereses)
}

function mostrarInfo2(persona2) {
    console.log(persona2, intereses2)
}

mostrarInfo(persona);
mostrarInfo2(persona2);