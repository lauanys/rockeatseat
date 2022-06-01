//estrutural
/*let altura = 190
let largura = 299

function calculo(){
  return  altura * largura
} 
console.log(calculo())*/

//orientada a object

class Poligno {
    constructor(altura, largura)
    { this.altura = altura
      this.largura = largura

    }
    get area(){
       return this.#caculodaarea() 
    }
    #caculodaarea(){
        return this.altura * this.largura
    }
}

let poligno = new Poligno(50, 60)
console.log(poligno.area)