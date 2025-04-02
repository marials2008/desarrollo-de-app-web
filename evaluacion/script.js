document.getElementById('generate').addEventListener('click', function() {
    const count = parseInt(document.getElementById('count').value);
    const numberFields = document.getElementById('numberFields');
    numberFields.innerHTML = ''; // Limpiar campos anteriores

    for (let i = 0; i < count; i++) {
        const input = document.createElement('input');
        input.type = 'number';
        input.placeholder = `Número ${i + 1}`;
        numberFields.appendChild(input);
    }

    document.getElementById('calculate').style.display = 'block';
});

document.getElementById('calculate').addEventListener('click', function() {
    const inputs = document.querySelectorAll('#numberFields input');
    let sum = 0;

    inputs.forEach(input => {
        sum += parseFloat(input.value) || 0; // Sumar valores, manejando NaN
    });

    const result = document.getElementById('result');
    result.textContent = `La suma es: ${sum}`;
    result.style.display = 'block';
});