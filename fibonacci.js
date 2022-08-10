function findFibo(arr){

  for (let i=2; i<=10; i++){
    myarr[i]=myarr[i-1]+myarr[i-2];
  }
  return myarr;
}
const myarr =[0,1];
const fb = findFibo(myarr);
console.log(fb);