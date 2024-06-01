document.getElementById('convert').addEventListener('click', function() {
    const input = parseFloat(document.getElementById('x').value);
    const fromUnit = document.getElementById('unit1').value;
    const toUnit = document.getElementById('unit2').value;
    let result;

    if (isNaN(input)) {
        alert('Please enter a valid number');
        return;
    }

    if (fromUnit === "" || toUnit === "") {
        alert('Please select both units');
        return;
    }

    // Temperature conversion logic
    switch (fromUnit) {
        case 'celsius':
            if (toUnit === 'fahrenheit') {
                result = (input * 9/5) + 32;
            } else if (toUnit === 'kelvin') {
                result = input + 273.15;
            } else if (toUnit === 'rankine') {
                result = (input + 273.15) * 9/5;
            } else {
                result = input;
            }
            break;
        case 'fahrenheit':
            if (toUnit === 'celsius') {
                result = (input - 32) * 5/9;
            } else if (toUnit === 'kelvin') {
                result = (input - 32) * 5/9 + 273.15;
            } else if (toUnit === 'rankine') {
                result = input + 459.67;
            } else {
                result = input;
            }
            break;
        case 'kelvin':
            if (toUnit === 'celsius') {
                result = input - 273.15;
            } else if (toUnit === 'fahrenheit') {
                result = (input - 273.15) * 9/5 + 32;
            } else if (toUnit === 'rankine') {
                result = input * 9/5;
            } else {
                result = input;
            }
            break;
        case 'rankine':
            if (toUnit === 'celsius') {
                result = (input - 491.67) * 5/9;
            } else if (toUnit === 'fahrenheit') {
                result = input - 459.67;
            } else if (toUnit === 'kelvin') {
                result = input * 5/9;
            } else {
                result = input;
            }
            break;
        default:
            result = input;
    }

    document.getElementById('result').textContent = `Result: ${result} ${toUnit === 'celsius' ? '°C' : toUnit === 'fahrenheit' ? '°F' : toUnit === 'kelvin' ? 'K' : '°R'}`;
});
