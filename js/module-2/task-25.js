function getCommonElements(array1, array2) {
  // Change code below this line
  let newArray = [];
  
    for (let i = 0; i < array1.length; i += 1) {
        console.log(array1[i]);
        if (array2.includes(array1[i])) {
            console.log(array2.includes(array1[i]));
            newArray.push(array1[i]);
            console.log(newArray);
        
    }
}
    
  return newArray;


 // Change code above this line
}


getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])