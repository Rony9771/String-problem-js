function findTallest(numbers){
  let largest = numbers[0];
  for (let i =0; i<numbers.length; i++){
    const index = i;
    const element = numbers[index]
    console.log(element);

    if (element > largest){
      largest =element;
      
    }
    
  }
  return largest;
 
}
const height =[5,6,7,8,];
const tall = findTallest(height);
console.log("Taller person heigh is:",tall," feet");