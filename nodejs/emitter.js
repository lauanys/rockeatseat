const {EventEmitter} = require('events')

const ev = new EventEmitter() 
//unica vez
ev.once('saySomething', (message)  =>{
    console.log('Eu ouvi você: ', message)
})

/*ev.on('saySomething', (message)  =>{
    console.log('Eu ouvi você: ', message)
})*/

ev.emit('saySomething', 'mensagem')
ev.emit('saySomething')

