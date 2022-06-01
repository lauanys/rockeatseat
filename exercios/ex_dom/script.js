const openModel = document.getElementById('openModel')
const element = document.querySelector('div')


openModel.onclick = function(){
    element.classList.remove('dis')
    
} 

document.addEventListener('keydown',  function(event) {
    const isEscKey = event.Key === 'Escape'

    if(isEscKey){
        element.classList.add('dis') 
        console.log(isEscKey)
    }
})

