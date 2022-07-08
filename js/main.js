const $form = document.querySelector('#carta-a-santa');
$form.onsubmit = validarFormulario;

function validarFormulario (event) {

    let nombre = $form.nombre.value;
    let ciudad = $form.ciudad.value;
    let descripcionRegalo = $form['descripcion-regalo'].value;

    const $errorNombre = validarNombre(nombre);
    const $errorCiudad = validarCiudad(ciudad);
    const $errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo)

    const $errores = {
        nombre: $errorNombre,
        ciudad: $errorCiudad,
        'descripcion-regalo': $errorDescripcionRegalo,
    } 
    
    console.log(manejarErrores($errores))

    event.preventDefault();

}

function manejarErrores ($errores) {

    let llaves = Object.keys($errores);
    llaves.forEach(function (llave) {

        const $error = $errores[llave];
        if ($error) {

            $form[llave].className = 'error';
        }else {
            $form[llave].className = '';
        }
    });
}

function validarNombre(nombre) {

    if (nombre.length === 0){

        return 'El nombre tiene que tener mas de un caracter.';
    }
    
    if (nombre.length >= 50) {

        return 'El nombre no puede tener mas de cincuenta caracteres.';
    }

    if (!/^[A-z]+$/.test(nombre)) {
        
        return 'El nombre solo puede tener letras.';
    }
    
    return '';

}

function validarCiudad(ciudad) {

    if (ciudad.length === 0) {
        return 'Debes elegir una ciudad.';
    }else {
        return '';
    }
}

function validarDescripcionRegalo(descripcionRegalo) {

    if (descripcionRegalo.length === 0) {

        return 'Agrega una descripcion del regalo.';
    }

    if (descripcionRegalo.length > 100) {
        return 'La descripcion del regalo no puede tener mas de 100 caracteres.';
    }

    if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
        return 'La descripcion del regalo solo puede tener letras y numeros.';
    }


    return '';
}