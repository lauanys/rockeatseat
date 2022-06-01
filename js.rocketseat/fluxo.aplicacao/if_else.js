let temperature = 38.6

if (temperature <= 37 ){
    
    console.log('temperatura ideal')
} else {
    console.log('Você está com febre')
}



let tem = 38

if (tem >= 38){
    console.log("febre alta")
} else if(tem < 37.9 && tem >= 37) {
    console.log('febre')

} else {
    console.log('saudável')
}

let temperatura = 37
let altatemperatura = temperatura >= 38
let mediatemperatura = temperatura < 37.9 && temperatura  >=37

if (altatemperatura){
    console.log("febre alta")
} else if(mediatemperatura) {
    console.log('febre')

} else {
    console.log('saudável')
}