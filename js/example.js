function findLongestWord(string) {
  // Change code below this line
  const arrayString = string.split(" ");
  console.log(arrayString);
  let maxWord = arrayString[0]
  
  
  for (let i = 0; i < arrayString.length; i += 1) {
    const word = arrayString[i];
    
    maxWord = maxWord.length > word.length ? maxWord : word;
    console.log(maxWord);

  
  }
  
  return maxWord;
  // Change code above this line
  }

findLongestWord("The quick brown fox jumped over the lazy dog")
findLongestWord("Google do a roll")