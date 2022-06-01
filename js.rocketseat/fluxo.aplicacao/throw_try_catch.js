//throw=lançar


function sayMyName(name= ''){
    if(name === ''){
        throw 'Nome é obrigatório'
    } 

}
//try=tentar..catch=pegar
try {
    sayMyName()
} catch(e){
    console.log(e)
}

console.log('após a função de erro')
