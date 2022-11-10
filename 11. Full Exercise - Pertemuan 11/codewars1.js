let kata = "is2 Thi1s T4est 3a"
let arr = kata.split(" ")
arr.sort()
console.log(arr)



let sum = 0;
   if(a == b){
     return a
   }else if(a < 0){
     for (let i = a; i <= b; i++) {
      sum += i
   }
     return sum
      
   }else if(b < 0){
     for (let i = b; i <= a; i++) {
      sum += i
   }
     return sum
   }else{
     return a+b
   }