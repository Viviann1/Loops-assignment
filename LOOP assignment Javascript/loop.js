const wordArr = [
   
    " deTTe",
    "er  ",
    " tekST ",
    "som",
    "må",
    "rydDES   ",
    "Opp",
    "   i   ", 
  ];
   
  const cleanedArr = [];
  

  
  function wordCleaner(str) {
    return str.trim().toLowerCase();
}

for (let i = 0; i < wordArr.length; i++) {
  cleanedArr.push(wordCleaner(wordArr[i]));
  
}

console.log(cleanedArr.join(" "));