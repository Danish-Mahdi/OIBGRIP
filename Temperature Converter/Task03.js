let Button=document.getElementById('btn');
Button.addEventListener('click',CTemp)

function CTemp(e){
    e.preventDefault();
    const inputTemp = document.getElementById('temp').value;
    // Selecting the select element
    const tempSelected = document.getElementById('select');
    // selecting the option of select element
    const valueTemp = select.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (valueTemp == 'C') {
        document.getElementById("output").innerHTML = celToFah(inputTemp) + "&#176; Fahrenheit";
    }
    else {
        document.getElementById("output").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
    }}













