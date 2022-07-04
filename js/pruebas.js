function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo tiene que tener mas de un caracter.',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
        '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo no puede tener mas de cincuenta caracteres.',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );
}

probarValidarNombre();


function probarValidarCiudad() {

    console.assert(
        
        validarCiudad('') === 'Debes elegir una ciudad.',
        'Validar ciudad no valido que el usuario haya elegido una ciudad'
    )

}
probarValidarCiudad();