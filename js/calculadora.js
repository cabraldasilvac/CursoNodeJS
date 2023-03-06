var readlineSync = require('readline-sync');

var a = parseInt(readlineSync.question("Digite o 1° valor: "));
var b = parseInt(readlineSync.question("Digite o 2° valor: "));
var cal = readlineSync.question("Digite uma opção 【" + ", " - ", " / ", " * "】: ");

switch (cal) {
    case "+":
        res = a + b;
        console.log(res);
        break;

    case "-":
        res = a - b;
        console.log(res);
        break;

    case "/":
        res = a / b;
        console.log(res);
        break;

    case "*":
        res = a * b;
        console.log(res);
        break;

        defaut:
            console.log("A Opção escolhida é inválida")
}