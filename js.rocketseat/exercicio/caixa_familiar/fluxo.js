let familia = {
    receitas: [599, 200, 3532, 311.67],
    despesas: [55, 33, 358.88, 927]
} 

function soma(array){
    let total = 0;

    for(let value of array){
        total += value
    }
    return total
}

function calculo(){
    const calculoreceitas = soma(familia.receitas)
    const calculodespesas = soma(familia.despesas)

    const total = calculoreceitas - calculodespesas
    const lucro = total >=0
   
    let msg = ' negativo '

    if(lucro){
       
        msg = ' positivo '
    }
    console.log('Seu saldo e ' +msg+ 'R$'+total.toFixed(2))
}

calculo()