function findLowest(numbers){
  let lowest = numbers[0];
  for (let i =0; i<numbers.length; i++){
    const index = i;
    const element = numbers[index]
    console.log(element);

    if (element < lowest){
      lowest =element;
      
    }
    
  }
  return lowest;
 
}
const height =[5,6,7,8,];
const low = findLowest(height);
console.log("Lowest number is:",low);