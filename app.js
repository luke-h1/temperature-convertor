let output1 = document.querySelector('output1')



// buttons 
const button = document.getElementById('btn-lg');
const button2 = document.getElementById('cel-to-fah-btn')

// first button event listener
button.addEventListener('click', function (e) {
    e.preventDefault();
    convertToCelcius();
});

// second button event listener
button2.addEventListener('click', function (e) {
    e.preventDefault();
    convertToFahrenheit();
});


// convert functions... 

function convertToCelcius() {
    let fah = document.querySelector('.fah1').value;
    if (fah != '') {
        let number = parseFloat(fah);
        document.querySelector('.output1').value =
            (number - 32) / 1.8 + '\xB0C';              
        console.log(document.querySelector('.output1').value);
    } else {
        alert('enter a value 🎲');
    }
}

function convertToFahrenheit() {
    let celcius2 = document.querySelector('.celcius2').value;
    if (celcius2 != '') {
        let number = parseFloat(celcius2);
        document.querySelector('.output2').value = (number * 9) / 5 + 32 + '\xB0F';
        console.log(document.querySelector('.output2').value);
    } else {
        alert('enter a value 🎲');
    }
}
