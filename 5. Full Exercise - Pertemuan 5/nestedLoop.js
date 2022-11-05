let Segitiga = (n) => {
    let string = "";
    for(let i=1;i <= n; i++){
        for(let j = 0;j < i; j++){
            string += "*";
        }
        string += "\n"
    }
    return string;
}

console.log(Segitiga(5))

let Bintang = (n) => {
    let star = "";
    for(let i=0;i < n; i++){
        for(let j = 0;j < n-i; j++){
            star += "*";
        }
        star += "\n"
    }
    return star;
}

console.log(Bintang(5))

let SegitigaSamaKaki = (n) => {
    let star = "";
    for(let i=n; 0<= i; i--){
        for(let j=0; j <= n+2;j++){
            if(j>= i && j <= (n+2)-i){
                star += "*"
            }else{
                star += "-"
            }

        }
        star += "\n"
    }
    return star
}

console.log(SegitigaSamaKaki(8))



let Triangle = (n) => {
    let string = "";
    let count = 1
    for(let i=1;i <= n; i++){
        for(let j = 1;j <= i; j++){
            string += count
            count ++
        }
        string += "\n"
    }
    console.log(string);
}


Triangle(4)