
const formulario = document.getElementById('formulario');
const listaMoneda = document.getElementById('moneda');
const listaCambio = document.getElementById('criptomoneda');
const alerta = document.getElementById('principal');
const cantidadDeDinero = document.getElementById('idCantidadDinero'); //Captura el valor vacío de la etiqueta input de la cantidad de dinero que la persona ingresa en la aplicación, pero no captura su valor, porque todavía no se ha llamado el evento, por lo que no tiene valor.
let valorCantidadDinero = 0; // Esta es una variable para asignarle el valor a la variable cantidadDeDinero. En el escuchador del evento se le va a asignar el .value
let resultado = 0;

const fragmento = document.createDocumentFragment();
const fragmento2 = document.createDocumentFragment();

//Vector Moneda
var moneda = ['Elige tu Moneda', 'Dolar', 'Peso Mexicano', 'Peso Colombiano', 'Euros', 'Bolivar'];
var cambio = ['Elige moneda de cambio', 'Dolar', 'Peso Mexicano', 'Peso Colombiano', 'Euros', 'Bolivar'];

//Vector Moneda destino
moneda.forEach((data, index) => {
     const item = document.createElement('option');
     item.setAttribute('value', index)
     item.textContent = data;
     fragmento.appendChild(item)
})

//Vector Cambio
cambio.forEach((data, index) => {
     const item = document.createElement('option');
     item.setAttribute('value', index)
     item.textContent = data;
     fragmento2.appendChild(item)
})

listaMoneda.appendChild(fragmento);
listaCambio.appendChild(fragmento2);
//Recorrer vector para insertar la informacion de la lista

formulario.addEventListener('submit', (e) => {
    console.log(`${e} Antes`) 
    e.preventDefault();
     console.log(`${e} Después`)
     valorCantidadDinero = cantidadDeDinero.value; //Agregarle valor a la variable

     // leer la moneda seleccionada
     const monedaSelect = document.getElementById('moneda');
     const monedaSeleccionada = monedaSelect.options[monedaSelect.selectedIndex].value;

     // leer la criptomoneda seleccionada
     const criptoMonedaSelect = document.getElementById('criptomoneda');
     const criptoMonedaSeleccionada = criptoMonedaSelect.options[criptoMonedaSelect.selectedIndex].value;

     const divMensaje = document.createElement('div');
     divMensaje.classList.add('text-center', 'alert');

     // Validar que las dos monedas sean diferentes.
     if (monedaSeleccionada === criptoMonedaSeleccionada) {
          divMensaje.classList.add('alert-danger');
          divMensaje.appendChild(document.createTextNode('Debes seleccionar dos monedas diferentes.'));
          alerta.appendChild(divMensaje);
     } else {
          // comprobar que ambos campos tengan algo seleccionado
          if (monedaSeleccionada == 0 || criptoMonedaSeleccionada == 0) {
               divMensaje.classList.add('alert-danger');
               divMensaje.appendChild(document.createTextNode('Es requisito escoger las monedas.'));
               alerta.appendChild(divMensaje)
          } else {
               // Validación información del campo cantidad de dinero 
               if (isNaN(valorCantidadDinero)) {
                    divMensaje.classList.add('alert-danger');
                    divMensaje.appendChild(document.createTextNode('Ingresa sólo números.'));
                    alerta.appendChild(divMensaje);
               } else {
                    valorCantidadDinero = Number(valorCantidadDinero);
                    if (valorCantidadDinero <= 0) {
                         divMensaje.classList.add('alert-danger');
                         divMensaje.appendChild(document.createTextNode('El valor debe ser mayor que 0.'));
                         alerta.appendChild(divMensaje);
                    } else {
                         divMensaje.classList.add('alert-success');
                         divMensaje.appendChild(document.createTextNode('Tu cambio ha sido exitoso.'));
                         alerta.appendChild(divMensaje)
                    }
               }
          }
     }
     setTimeout(function () {
          document.querySelector('#principal .alert').remove();
          formulario.reset();
     }, 3000);

     // Conversión de monedas:

    switch(monedaSeleccionada) {
        case '1':
            switch(criptoMonedaSeleccionada) {
                case '2':
                    console.log('Pasar de dolar a peso mexicano');
                    resultado = valorCantidadDinero * 20.13;
                    document.getElementById("resultado").innerHTML = `${valorCantidadDinero} Dolares son: ${resultado.toFixed(2)} Pesos Mexicanos`
                    break;
                case '3':
                    console.log('Pasar de dolar a Peso Colombiano');
                    resultado = valorCantidadDinero * 3438.10;
                    document.getElementById("resultado").innerHTML = `${valorCantidadDinero} Dolares son: ${resultado.toFixed(2)} Pesos Colombianos`
                    break;
                case '4':
                    console.log('Pasar de dolar a Euros');
                    resultado = valorCantidadDinero * 0.83;
                    document.getElementById("resultado").innerHTML = `${valorCantidadDinero} Dolares son: ${resultado.toFixed(2)} Euros`
                    break;
                case '5':
                    console.log('Pasar de dolar a Bolivar');
                    resultado = valorCantidadDinero * 1102064;
                    document.getElementById("resultado").innerHTML = `${valorCantidadDinero} Dolares son: ${resultado.toFixed(2)} Bolivares`                    
                    break;
            }
            break;
        case '2':
            switch(criptoMonedaSeleccionada) {
                case '1':
                    console.log('Pasar de Pesos mexicanos a Dolares');
                    resultado = valorCantidadDinero * 0.050;
                    document.getElementById("resultado").innerHTML = `${valorCantidadDinero} Pesos mexicanos son: ${resultado.toFixed(2)} Dolares`
                    break;
                case '3':
                    console.log('Pasar de Pesos mexicanos a Peso Colombiano');
                    resultado = valorCantidadDinero * 170.78;
                    document.getElementById("resultado").innerHTML = `${valorCantidadDinero} Pesos mexicanos son: ${resultado.toFixed(2)} Pesos Colombianos`
                    break;
                case '4':
                    console.log('Pasar de Pesos mexicanos a Euros');
                    resultado = valorCantidadDinero * 0.041;
                    document.getElementById("resultado").innerHTML = `${valorCantidadDinero} Pesos mexicanos son: ${resultado.toFixed(2)} Euros`
                    break;
                case '5':
                    console.log('Pasar de Pesos mexicanos a Bolivar');
                    resultado = valorCantidadDinero * 20;
                    document.getElementById("resultado").innerHTML = `${valorCantidadDinero} Pesos mexicanos son: ${resultado.toFixed(2)} Bolivares`                    
                    break;
            }
            break;
        case '3':
            switch(criptoMonedaSeleccionada) {
                case '1':
                    console.log('Pasar de Pesos colombianos a Dolares');
                    resultado = valorCantidadDinero * 0.00029;
                    document.getElementById("resultado").innerHTML = `${valorCantidadDinero} Pesos colombianos son: ${resultado.toFixed(2)} Dolares`
                    break;
                case '2':
                    console.log('Pasar de Pesos colombianos a Pesos mexicanos');
                    resultado = valorCantidadDinero * 0.0059;
                    document.getElementById("resultado").innerHTML = `${valorCantidadDinero} Pesos colombianos son: ${resultado.toFixed(2)} Pesos mexicanos`
                    break;
                case '4':
                    console.log('Pasar de Pesos colombianos a Euros');
                    resultado = valorCantidadDinero * 0.00024;
                    document.getElementById("resultado").innerHTML = `${valorCantidadDinero} Pesos colombianos son: ${resultado.toFixed(2)} Euros`
                    break;
                case '5':
                    console.log('Pasar de Pesos colombianos a Bolivares');
                    resultado = valorCantidadDinero * 321.97;
                    document.getElementById("resultado").innerHTML = `${valorCantidadDinero} Pesos colombianos son: ${resultado.toFixed(2)} Bolivares`                    
                break;
            }            
            break;
        case '4':
            switch(criptoMonedaSeleccionada) {
                case '1':
                    console.log('Pasar de Euros a Dolares');
                    resultado = valorCantidadDinero * 1.21;
                    document.getElementById("resultado").innerHTML = `${valorCantidadDinero} Euros son: ${resultado.toFixed(2)} Dolares`
                    break;
                case '2':
                    console.log('Pasar de Euros a Pesos mexicanos');
                    resultado = valorCantidadDinero * 24.40;
                    document.getElementById("resultado").innerHTML = `${valorCantidadDinero} Euros son: ${resultado.toFixed(2)} Pesos mexicanos`
                    break;
                case '3':
                    console.log('Pasar de Euros a Pesos colombianos');
                    resultado = valorCantidadDinero * 4165.09;
                    document.getElementById("resultado").innerHTML = `${valorCantidadDinero} Euros son: ${resultado.toFixed(2)} Pesos colombianos`
                    break;
                case '5':
                    console.log('Pasar de Euros a Bolivares');
                    resultado = valorCantidadDinero * 1334775.83;
                    document.getElementById("resultado").innerHTML = `${valorCantidadDinero} Euros son: ${resultado.toFixed(2)} Bolivares`                    
                break;
            }
            break;
        case '5':
            switch(criptoMonedaSeleccionada) {
                case '1':
                    console.log('Pasar de Bolivares a Dolares');
                    resultado = valorCantidadDinero * 0.0000016;
                    document.getElementById("resultado").innerHTML = `${valorCantidadDinero} Bolivares son: ${resultado.toFixed(2)} Dolares`
                    break;
                case '2':
                    console.log('Pasar de Bolivares a Pesos mexicanos');
                    resultado = valorCantidadDinero * 0.000034;
                    document.getElementById("resultado").innerHTML = `${valorCantidadDinero} Bolivares son: ${resultado.toFixed(2)} Pesos mexicanos`
                    break;
                case '3':
                    console.log('Pasar de Bolivares a Pesos colombianos');
                    resultado = valorCantidadDinero * 0.0060;
                    document.getElementById("resultado").innerHTML = `${valorCantidadDinero} Bolivares son: ${resultado.toFixed(2)} Pesos colombianos`
                    break;
                case '4':
                    console.log('Pasar de Bolivares a Euros');
                    resultado = valorCantidadDinero * 0.00000075;
                    document.getElementById("resultado").innerHTML = `${valorCantidadDinero} Bolivares son: ${resultado.toFixed(2)} Euros`                    
                break;
            }            
            break;
    }
})



