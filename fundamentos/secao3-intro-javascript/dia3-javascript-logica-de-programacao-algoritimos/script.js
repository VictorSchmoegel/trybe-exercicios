let fruits = [3, 4, 10, 1, 12];
let result = 0;

for (let index = 0; index < fruits.length; index +=1) {
    result += fruits[index];    
}
if (result >=15) {
    console.log(result);
} else {
    console.log("valor menor que 16");
}

let number = [];
let sum = 0;
let sub = 5;

for (let index = 1; index <= 100; index += 1){
    number.push(index);
}
console.log(number);

for (let index = 0; index < number.length; index += 1) {
    sum += number[index];
}

console.log(sum);
