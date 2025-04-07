// Se añade un evento al botón con id 'generate', que se ejecutará al hacer clic
document.getElementById('generate').addEventListener('click', () => {
    // Se obtiene el valor ingresado en el input con id 'count' y se convierte a número entero
    const count = parseInt(document.getElementById('count').value);
    
    // Se obtiene el contenedor donde se agregarán los campos de entrada
    const numberFields = document.getElementById('numberFields');

    // Se limpian los campos anteriores para evitar duplicados
    numberFields.innerHTML = '';

    // Se crea la cantidad de campos de entrada especificada por el usuario
    for (let i = 0; i < count; i++) {
        // Se crea un input de tipo número con un placeholder correspondiente y se añade al contenedor
        numberFields.appendChild(Object.assign(
            document.createElement('input'),
            { type: 'number', placeholder: `Número ${i + 1}` }
        ));
    }

    // Se muestra el botón de calcular, en caso de que estuviera oculto
    document.getElementById('calculate').style.display = 'block';
});

// Se añade un evento al botón con id 'calculate' para realizar la suma al hacer clic
document.getElementById('calculate').addEventListener('click', () => {
    // Se obtienen todos los inputs dentro del contenedor 'numberFields' y se suman sus valores
    const sum = Array.from(document.querySelectorAll('#numberFields input'))
                      .reduce((total, input) => total + (parseFloat(input.value) || 0), 0);

    // Se muestra el resultado de la suma en el elemento con id 'result'
    document.getElementById('result').textContent = `La suma es: ${sum}`;
    
    // Se asegura que el resultado esté visible
    document.getElementById('result').style.display = 'block';
});


//meli//