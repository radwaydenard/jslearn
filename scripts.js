console.log("Скрипт подключен")

function plus(){
    let n1, n2, plus;
    n1 = document.getElementById("num1").value
    n2 = document.getElementById("num2").value

    plus = +n1 + +n2

    document.getElementById("out").innerHTML = plus
}

function minus(){
    let n1, n2, minus;
    n1 = document.getElementById("num1").value
    n2 = document.getElementById("num2").value

    minus = +n1 - +n2

    document.getElementById("out").innerHTML = minus
}

function devision(){
    let n1, n2, devision;
    n1 = document.getElementById("num1").value
    n2 = document.getElementById("num2").value

    devision = +n1 / +n2

    document.getElementById("out").innerHTML = devision
}

function multiply(){
    let n1, n2, multiply;
    n1 = document.getElementById("num1").value
    n2 = document.getElementById("num2").value

    multiply = +n1 * +n2

    document.getElementById("out").innerHTML = multiply
}

// Stopwatch

    let counter = 0;
    let interval = setInterval("func_1()",1000);
    function func_1() {
        counter++;
        document.getElementById("time__stopwatch").innerHTML = counter;
        if(counter == 3) clearInterval(interval)
    }