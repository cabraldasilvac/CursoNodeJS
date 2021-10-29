let readlineSync = require('readline-sync');

//let a = readlineSync.question("Digite o valor 1: ");
//let b = readlineSync.question("Digite o valor 2: ");
//let op = readlineSync.question("Digite uma opção: ");

let a = parseInt(readlineSync.question("Digite o valor 1: "));
let b = parseInt(readlineSync.question("Digite o valor 2: "));
let cal = readlineSync.question("Digite uma opção: ");


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
            console.log("Opção inválida")

}