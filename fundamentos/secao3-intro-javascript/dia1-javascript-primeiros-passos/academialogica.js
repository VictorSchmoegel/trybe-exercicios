let marina = 27;
let silvia = 18;
let iza = 63;

if (marina < silvia && marina < iza) {
    console.log("marina");
} else if (silvia < marina && silvia < iza) {
    console.log("silvia");
} else if (iza < silvia && iza < marina) {
    console.log("iza")
} else {
    console.log("pelo menos duas tem a menor idade");
}


let age = 26;
let sex = "M";
let weight = 70;
let height = 173;

if (sex === "M") {
    console.log("TMB = " + ((height * 6.25) + (weight * 9.99) - (age * 4.92 + 5)) );
} else if (sex === "F") {
    console.log("TMB = " + ((height * 6.25) + (weight * 9.99) - (age * 4.92 - 161)) );
} else {
    console.log("erro")
}

let opcao = 1

if (opcao === 1) {
    console.log("Trybe Lanche Feliz");
} else if (opcao === 2) {
    console.log("2 - McTrybe");
} else if (opcao === 3) {
    console.log("3 - TrybeWooper");
} else if (opcao === 4) {
    console.log("4 - X-Trybe");
} else if (opcao === 5) {
    console.log("5 - Triplo Trybe com JS");
} else {
    console.log("Ainda não possuímos esta opção :(");
}