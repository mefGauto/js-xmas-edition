function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'El nombre tiene que tener mas de un caracter.',
        'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      
      validarNombre(
        '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'El nombre no puede tener mas de cincuenta caracteres.',
        'Validar nombre no validó que el nombre sea menor a 50 caracteres'
  );

  console.assert(
      validarNombre('812938') === 'El nombre solo puede tener letras.',
        'Validar nombre no validó que el nombre solo contenga letras'

  )
 
  console.assert(
      
      validarNombre('Matias') === '',
        'Validar nombre no se ejecuto con un nombre válido'
  );
}

function probarValidarCiudad() {

    console.assert(
        
        validarCiudad('') === 'Debes elegir una ciudad.',
        'No se validó que el usuario haya elegido una ciudad'
    )

    console.assert(

      validarCiudad('Buenos Aires') === '',
        'Validar ciudad no se ejecutó con una ciudad válida'
    );
}

function probarValidarDescripcionRegalo() {

  console.assert(
    validarDescripcionRegalo('') === 'Agrega una descripcion del regalo.',
      'No se validó que la descripción del regalo no este vacia'
  )

  console.assert(

    validarDescripcionRegalo(
      'jksajdksadlksjakldjsakldjlkasjdkljaskldjlkasjdljdlksahksahjdfsajkldjksajdlksajdklasjdklasjdlkasjldkjasldjklajlkjaslkd')
      === 'La descripcion del regalo no puede tener mas de 100 caracteres.', 
      'No se validó que el usuario haya puesto menos de 100 caracteres en la descripción del regalo'

  );

  console.assert(
    validarDescripcionRegalo(',.,.,.,') === 'La descripcion del regalo solo puede tener letras y numeros.',
    'No se validó que el usuario solo haya usando letras y numeros en la descripción del regalo.'
  );
}


probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcionRegalo();