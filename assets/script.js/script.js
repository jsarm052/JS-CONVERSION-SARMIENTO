
const firstValue = document.getElementById ("num1");
const secondValue = document.getElementById ("num2");



function watts (x, y) {
    console.log(x, y);
    return parseFloat (x) * parseFloat(y);
}

function amps (x, y) {
    console.log(x, y);
    return parseFloat (x) / parseFloat (y);
}

function volts (x, y) {
    console.log(x, y);
    return parseFloat (x) / parseFloat (y);
}
function masterReset() {
    num1.value="";
    num2.value="";
    displayAns.value="";
    location.href="index.html"
}

    
function convertVoltage() {

    if (firstValue.value != "" && secondValue.value != "" ) {

        console.log(firstValue.value,secondValue.value);
        document.getElementById("displayAns").innerHTML = volts 
        (firstValue.value, secondValue.value) + " Voltage";
    }
}

function convertWatts() {

    if (firstValue.value != "" && secondValue.value != "" ) {

        console.log(firstValue.value,secondValue.value);
        document.getElementById("displayAns").innerHTML = watts 
        (firstValue.value, secondValue.value) + " Wattage";
    }

}


function convertAmpere() {

    if (firstValue.value != "" && secondValue.value != "" ) {

        console.log(firstValue.value, secondValue.value);
        document.getElementById("displayAns").innerHTML = amps 
        (firstValue.value, secondValue.value) + "  Ampere";
    }


}
