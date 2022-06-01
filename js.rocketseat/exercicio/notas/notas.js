
function getNota(nota){
let a = nota >= 90 && nota <=100
let b = nota >= 80 && nota <=89
let c = nota >= 70 && nota <= 79
let d = nota >= 60 && nota <= 69
let f = nota < 60 && nota > 0

let notafinal;

if(a){
    notafinal ='A'
} 
else if(b){
    notafinal ='B'
} 
else if(c){
    notafinal ='C'
} 
else if(d){
    notafinal ='D'
} 
else if(f) {
    notafinal ='F'
}
else{
    notafinal ='Nota inválida'
}
return notafinal
    }
console.log(getNota(192))
console.log(getNota(-92))
console.log(getNota(92))
console.log(getNota(52))