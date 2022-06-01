//fifo= first in first out
// o primeiro a entrar na fila, é o primeiro a sair dela

class Queue  {
 constructor(){
     this.data = []
   
 }
 //adicionar um elemento ao final da fila
 enqueue(item) {
     this.data.push(item)
     console.log(item+ 'chegou na fila')
 }
 //remover  o primeiro elemento da fila
 dequeue() {
     const item = this.data.shift()
     console.log(item+ 'item saiu da fila')
 }
}
const fila = new Queue()

fila.enqueue('Mariana')
fila.enqueue('Jonas')
fila.dequeue()