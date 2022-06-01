const elements = document.querySelector('body')

elements.style.backgroundColor = 'black'
console.log(elements.style.backgroundColor)

//classList
const element = document.querySelector('h1')
element.classList.add('active')
console.log(element.classList)
element.classList.remove('active')
element.classList.toggle('active') //alternar
