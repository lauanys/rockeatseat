function teste(){
    let nome =document.getElementById('nome').value;
   let idade=document.getElementById('idade').value;
    let teste= document.getElementById("aqui");

    if(nome == ''){
        alert("coloque um nome")
    }
    if(idade<0){
        alert('idade nao valida')
    }
    if(nome == 'lauany' ){
        alert("nao pode esse nome")
    }else{
        teste.textContent = 'O nome é :' + nome + ', e a idade é : '+ idade;
    }
    
}



