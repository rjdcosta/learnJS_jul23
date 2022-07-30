let increment = 0;

//function somarIncrement() {
//    increment++;
//    return increment;
//}

function somarIncrement() {
    increment++;
    document.getElementById('textBox1').value = increment;
}

function descontarIncrement() {
    increment--;
    document.getElementById('textBox1').value = increment;
}


document.getElementById('somar').onclick = function() {
    somarIncrement()
};

document.getElementById('descontar').onclick = function() {
    descontarIncrement()
};