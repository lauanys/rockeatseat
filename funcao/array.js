const pilotos = [
    'Senna', 'Prost', 'Schumacher'
]
console.log(pilotos[0])
//length = quantidade de elementod
console.log(pilotos.length)


//adiciona
pilotos.push('afonso')
//iterável for of
for(let piloto of pilotos){
    console.log(piloto)
}

console.log(pilotos[3])

//encontrar um elemento filnd=achar
const senna = pilotos.find(piloto => piloto === 'Senna')
console.log(senna)

//deletar 
pilotos.splice(0,1)
console.log(pilotos)