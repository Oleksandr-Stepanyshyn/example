// Напиши функцию filterArray(numbers, value),
// которая принимает массив чисел(параметр numbers) и возвращает новый массив,
// в котором будут только те элементы массива numbers,
// которые больше чем значение параметра value(число).

function filterArray(numbers, value) {
   // Change code below this line
    console.log(numbers);
    let newNumbers = [];    

    for (let i = 0; i < numbers.length; i += 1) {
        if (numbers[i] > value) {
            newNumbers.push(numbers[i]);
        }
        console.log(newNumbers);
        
    }
    return newNumbers;
  // Change code above this line
    }

    filterArray([1, 2, 3, 4, 5], 3);
    filterArray([12, 24, 8, 41, 76], 20); 