//creatElement
const div = document.createElement('div');
div.innerText = 'Começo'

// append=depois/ultimo
// prepend=antes/primeiro
const bod = document.querySelector('body')
bod.prepend(div)

//insertbefore
const div2= document.createElement('div');
div2.innerText = 'meio'
const body = document.querySelector('body')

const script = body.querySelector('script')
body.insertBefore(div2, script )