

function convertToCelcius() {
    let fah = document.querySelector('fah1').value;
    if (fah != '') {
        let number = parseFloat(fah);
        document.querySelector('.cel1').value = (number - 32) / 1.8 + '\xB0C';
    } else {
        alert('enter a value 🎲');
    }
}

function convertToFahrenheit() {
    let celcius2 = document.querySelector('celcius2').value;
    if (celcius2 != '') {
        let number = parseFloat(celcius2);
        document.querySelector('fah2').value = (number * 9) / 5 + 32 + '\xB0F';
    } else {
        alert('enter a value 🎲');
    }
}

