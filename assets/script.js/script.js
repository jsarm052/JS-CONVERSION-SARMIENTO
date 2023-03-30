

function watts (x, y) {
    return parseFloat (x) * parseFloat(y);
}

function amps (x, y) {
    return parseFloat (x) / parseFloat (y);
}

function volts (x, y) {
    return parseFloat (x) / parseFloat (y);
}


function convertVoltage (){
    let firstValue = document.getElementById ("num1").value;
    let secondValue = document.getElementById ("num2").value;

    document.getElementById("displayAns").innerHTML = volts 
    (firstValue, secondValue) + " Voltage";


}

function convertWatts() {
    let firstValue = document.getElementById ("num1").value;
    let secondValue = document.getElementById ("num2").value;

    document.getElementById("displayAns").innerHTML = watts (firstValue, secondValue) + " Wattage";
}

function convertAmpere() {
    let firstValue = document.getElementById ("num1").value;
    let secondValue = document.getElementById ("num2").value;

    document.getElementById("displayAns").innerHTML = amps 
    (firstValue, secondValue) + " Ampere";

}