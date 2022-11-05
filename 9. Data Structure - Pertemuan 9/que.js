class Queue{
    #container =[];

    enqueue(element){
        this.#container.push(element)
    }

    dequeue(){
        this.#container.shift()
    }

    getContainer(){
        return this.#container
    }
}

let nQue = new Queue()
nQue.enqueue("A")
nQue.enqueue("B")
nQue.enqueue("C")
nQue.dequeue()
console.log(nQue.getContainer())
