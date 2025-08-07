function toCelsius(fahrenhei) 
{
    let value = (fahrenhei - 32) * 5 / 9
    return value.toFixed(2) + "C";
}

function tofahrenhei(Celdius) 
{
    let value = (Celsius * 9) / 5 + 32
    return value.toFixed(2) + "F";
}

function display(elementid, value) {
    document.getElementById(elementid).innerHTML = "<b>" +value+"</b>"
}


function tocelsiusprogram(value) 
{
    alert(toCelsius(value))
}

function fahrenheisprogram(value) 
{
       alert(tofahrenhei(value))
 }

    
