function getvalue(val){
    var input = document.getElementById("inputField")
    input.value += val;
}

function clrAll(){
    var input = document.getElementById("inputField")
    input.value = "";
}

function squareName(){
    var input = document.getElementById("inputField")
    var inputvalue = parseFloat(input.value);
    input.value = inputvalue*inputvalue
}

function deletechar(){
    var input = document.getElementById("inputField")
    input.value = input.value.slice(0,-1)
}
// function calc() {
    // var input = document.getElementById("inputField");
    // input.value = eval(input.value);
// }
function calc() {
    var input = document.getElementById("inputField").value;
    var result = Function('"use strict";return (' + input + ')')();
    document.getElementById("inputField").value = result;
}
