let array1 = [9, 1, 2, 3, 9, 5, 7];
let array2 = [0, 4, 4, 4, 9, 2, 1];
let array3 = [0, 0, 0];

const highestCount = (array) => {
    let maior = math.max.apply(null, array);
    let frequencia = array.filter((m) => m === maior).length;
    console.log(frequencia);
}
highestCount(array3);