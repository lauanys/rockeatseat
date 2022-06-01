//expressão new
//criar um novo objeto
// thia keyword

function Person(name) {
 this.name = name
 this.walk = function() {
     return this.name + " está andando "
 }
}

const lauany = new Person(" lauany") 
const joão = new Person (" joão")
 
console.log(lauany.walk())
console.log(joão.walk())