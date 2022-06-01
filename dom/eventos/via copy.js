const h1 = document.querySelector('h1');

//h1.onclick = print
//execulta apenas uma vez ^


h1.addEventListener('click',print)

function print(){
    console.log('print')
}

h1.addEventListener('click',function(){

    console.log('outro momento')
})