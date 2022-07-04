const $form = document.querySelector('#carta-a-santa');

let nombre = $form.nombre.value;
let ciudad = $form.ciudad.value;
let comportamiento = $form.comportamiento.value;
let descripcionRegalo = $form['descripcion-regalo'].value;

function validarNombre(nombre) {

    if (nombre.length === 0){

        return 'Este campo tiene que tener mas de un caracter.';
    }
    
    if (nombre.length >= 50) {

        return 'Este campo no puede tener mas de cincuenta caracteres.';
    }
    return '';

}

function validarCiudad(ciudad) {

    if (ciudad === '') {
        return 'Debes elegir una ciudad.';
    }
    return '';
}

function validarComportamiento(comportamiento) {

    
}