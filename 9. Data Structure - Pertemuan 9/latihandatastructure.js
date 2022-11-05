class Animal{
    #container = [];

    push(element){
       
            if(this.#container.includes(element)){
                console.log("Data Sudah Ada")
            }else{
                this.#container.push(element)
            }
        
    }

    pop(){
        this.#container.pop()
    }

    getAnimal(){
        return this.#container
    }
}

let newAnimal = new Animal()
newAnimal.push("Kambing")
newAnimal.push("Anjing")
newAnimal.push("Kucing")
newAnimal.push("Sapi")
newAnimal.push("Anjing")
newAnimal.push("Kucing")
console.log(newAnimal.getAnimal())