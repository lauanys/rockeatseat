class Atleta {
  peso;
  categoria;

  constructor(peso){
      this.peso = peso
   
  }
  
  definirCategoria(){
      if(this.peso <= 50){
          this.categoria = 'Infantil'

      } else if (this.peso <= 65){
          this.categoria = 'Juvenil'

      } else {
          this.categoria = 'Adulto'
      }
    
  }
}

let peso = new Atleta(50)
console.log(peso)