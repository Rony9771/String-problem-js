function findReverse (text){
  let reversed =" ";
  for (let i=text.length-1; i >=0; i--){
    const element=text[i];
    reversed= reversed+element;
    console.log(element)
    

  }
  
  return reversed;
}

const sentence = "I am a bad boy"
const rev = findReverse(sentence);
console.log(rev);

