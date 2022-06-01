//escrever algo


const questions = [
    'O que aprendi hoje ? ', 
    'O que me deixou triste?E o que eu poderia fazer para melhorar? ',
    'O que me deixou feliz hoje? ',
    'Quantas pessoas ajudei hoje? ',
]
    const ask = ( index = 0) => {
      process.stdout.write(questions[index]+ ' > ' )
    }

    ask()

    const answers = []
    process.stdin.on('data', data =>{
      answers.push(data.toString().trim())
      if(answers.length < questions.length){

        ask(answers.length)
      } else{
        process.exist()
      }
    })

    process.on('exit', () =>{
      console.log(
      'Lauany:  O que você aprendeu hoje foi: '
      + answers[0] +
      ' O que te deixou triste foi,E o que eu poderia ter feito de melhor foi '
      + answers[1] +
      ' O que te deixou feliz foi: '
      + answers[2] +
     ' você ajudou '
      + answers[3] +
     ' hoje '
      )

    })
