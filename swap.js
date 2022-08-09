let num = 6;
let num2 = 7;

//Approch-1
let temp =num;
num =num2;
num2=temp;
console.log(num,num2);

//Approch 2
let a= 6;
let b= 7;
[a,b] = [b,a];
console.log(a);
console.log(b);

