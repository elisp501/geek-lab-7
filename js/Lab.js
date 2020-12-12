'use strict'

//Variables
let usuario;

function Capturar() {
class Persona{
    constructor(nombre, apellidos, edad, direccion, ciudad, telefono, correo){
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.direccion = direccion;
        this.ciudad = ciudad;
        this.telefono = telefono;
        this.correo = correo;
    }
}

let nombreRegistro = document.getElementById("nombre").value;
let apellidosRegistro = document.getElementById("apellidos").value;
let edadRegistro = document.getElementById("edad").value;
let direccionRegistro = document.getElementById("direccion").value;
let ciudadRegistro = document.getElementById("ciudad").value;
let telefonoRegistro = document.getElementById("telefono").value;
let correoRegistro = document.getElementById("correo").value;

usuario = new Persona(nombreRegistro, apellidosRegistro, edadRegistro, direccionRegistro, ciudadRegistro, telefonoRegistro, correoRegistro);
console.log(usuario)
RegistrarUsuario(usuario);
}

var Personas = [];

function RegistrarUsuario(usuario) {
    Personas.push(usuario)
    console.log(Personas);
    document.getElementById("tabla").innerHTML += 
    `<tbody>
        <tr>
            <td>${usuario.nombre}</td>
            <td>${usuario.apellidos}</td>
            <td>${usuario.edad}</td>
            <td>${usuario.direccion}</td>
            <td>${usuario.ciudad}</td>
            <td>${usuario.telefono}</td>
            <td>${usuario.correo}</td>
        </tr>
    </tbody>`
}