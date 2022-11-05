let kata = "katak"
let kataBaru = ""
for(let i = kata.length-1; 0 <= i; i--){
  kataBaru += kata[i]
  
}if (kata == kataBaru){
  console.log("Palindrome")
}else{
  console.log("Not Palindrome")
}


// Exercise 
let jwbn = "acdab"
let kuncijwbn = "abdac"
let poin = 0
for(let u = 0; u <= jwbn.length-1;u++){
    if(jwbn[u]=== kuncijwbn[u] ){
        poin += 10
    }else{
        poin -= 5
    }
} console.log(poin) 
    

// Exercise 
// Buatlah sebuah program untuk menghitung jumlah huruf vokal pada suatu kata
// Ex. Input = "Purwadhika"
// Output = 4

// Ex input = "Hello"
// Output = 2

let e = "helikopter"
let v = "aiueo"
let pointVokal = 0
for(let y = 0; y <= e.length-1;y++){
    for(let z = 0; z <= v.length-1;z++){
        if(e[y] === v[z]){
        pointVokal += 1
        }
    }
} console.log(pointVokal)