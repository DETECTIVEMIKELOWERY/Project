
function myFunction() {

    var w = document.getElementById("fromselect").selectedIndex;
    let fromselected = fromselect.options[w].value;
        
document.getElementById("ibe").innerText = w;

document.getElementById("ice").innerText = fromselected;


var x = document.getElementById("mySelect").selectedIndex;
let toselected = mySelect.options[x].value;

document.getElementById("ide").innerText = x;

}




function converter(){
    var w = document.getElementById("fromselect").selectedIndex;
    let fromselected = fromselect.options[w].value;    


var x = document.getElementById("mySelect").selectedIndex;
let toselected = mySelect.options[x].value;

let inp = document.getElementById("input").value;

let output = 0
    if (toselected =="Fahrenheit")
    {      
        if(fromselected=="Celcius")
    {        output = ((inp*9/5)+32)

    }
        if(fromselected=="Kelvin")
    {        output = (((inp-273.15)*9/5)+32)
    }
document.getElementById("result").innerText = output +" Fahrenheit"
    }
    


    if (toselected =="Kelvin")
    {       
        if(fromselected=="Celcius")
    {        output = (inp+273.15)

    }
        if(fromselected=="Fahrenheit")
    {        output = (((inp-32)*5/9)+273.15)
    }
document.getElementById("result").innerText = output +" Kelvin"
    }



    if (toselected =="Celcius")
    {      
        if(fromselected=="Kelvin")
    {       output = (inp-273.15)

    }
        if(fromselected=="Fahrenheit")
    {        output = (inp-32)*5/9
    }
document.getElementById("result").innerText = output +" Celcius"
    }



}