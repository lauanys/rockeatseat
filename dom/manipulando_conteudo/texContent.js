const element = document.querySelector('h1')

element.textContent += ' Olá Mundo!'
console.log(element.textContent)


const inner= document.querySelector('h2')

inner.innerText = 'Olá'
console.log(inner.innerText)
//
const ht = document.querySelector('h3')
ht.innerHTML = 'Elemento <small>HTML</small>'
console.log(ht.innerHTML)


