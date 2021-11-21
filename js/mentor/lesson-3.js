/*
 * Вам дан массив. Значения в массиве будут либо числами, либо строками, 
  либо их комбинацией. Ваша задача - вернуть массив, 
  в котором будут идти сначала числа, отсортированные в порядке возрастания, 
  а затем строки, отсортированные в алфавитном порядке.
  Значения должны сохранить свой исходный тип. 
  Если на входе была строка, то и вернуться должна строка, если число - число.
 */

// Пример кода:
// example([6, 2, 3, 4, 5]) = > [2, 3, 4, 5, 6]
// example([14, 32, 3, 5, 5]) = > [3, 5, 5, 14, 32]
// example([1, 2, 3, 4, 5]) = > [1, 2, 3, 4, 5]
// example(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]) = > [0, 2, 2, 'Apple', 'Banana', 'Mango', 'Orange']



function sortArray (array) {
  let newArrayNum = [];
  let newArrayStr = [];
  
  array.forEach(elem => {
    if(typeof elem === "number"){
    newArrayNum.push(elem);
  } else { newArrayStr.unshift(elem)}
  }
               
               )
  return newArray.sort((a, b) => {
    if(typeof a === "number" && typeof b === "number") {
      a - b; } else { a.localeCompare(b)}
  });
};

console.log(sortArray(['Banana', 'Orange', 'Apple', 'Mango', 0, 2, 2]));

--------



// * Как найти сумму элементов массива, если вложенность массива неизвестна?

arraySum([[1, 2, [3, 4]], [9], [10, 12]])



---------
  
  
  
  
// const arr = [
//     12,
//     [34, [2, [33]]],
//     34,
//     [23],
//     'hello',
//     ['five', ['some arr', ['last arr'], { name: 'John' }]],
// ];