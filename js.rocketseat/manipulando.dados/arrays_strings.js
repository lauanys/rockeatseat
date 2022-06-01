/*texto que contem espaços, em uma array onde cada palavra é uma posição do array
let phrase = 'Eu quero viver o Amor!'
let myArray = phrase.split(' ')
console.log(myArray)
*/

//transforme o array em um texto e onde eram espaços, coloque underscore= _
//join=vai juntar o array
let phrase = 'Eu quero viver o Amor!'
let myArray = phrase.split(' ')
let phraseWithUnderscore = myArray.join('_')
console.log(phraseWithUnderscore)


