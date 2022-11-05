class Stack{
    #maxSize;
    #container = [];

    constructor(maxSize = 10){
        this.#maxSize = maxSize
    }

    push(element){
        if(this.#maxSize === this.#container.length){
            console.log("Data Full!")
        }else{
            this.#container.push(element)
        }
    }

    pop(){
        this.#container.pop()
    }

    get(){
        console.log(this.#container)
    }
}

let nStack = new Stack()
nStack.push("A") // Menambahkan Data di Paling Akhir 
nStack.push("B")
nStack.push("C")
nStack.push("C")
nStack.push("C")
nStack.push("C")
nStack.push("C")
nStack.push("C")
nStack.push("C")
nStack.push("C")
nStack.push("C")
nStack.push("C")
nStack.push("C")
nStack.push("C")
nStack.pop() // Menghapus Data di Paling Akhir 
nStack.get()