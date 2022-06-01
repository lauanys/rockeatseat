function transformeEnGraus(degree){
    const celsiusExite = degree.includes('C')
    const fahrenheitExiste = degree.includes('F')

        if(!celsiusExite && !fahrenheitExiste){
            throw new Error('Grau não identificado')
        }
        let updateDegree = (degree.toUpperCase().replace('F', ''));
        let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
        let degreeSign = 'C'

        if(celsiusExite){
        updateDegree = Number(degree.toUpperCase().replace('C', ''));
         formula = celsius => celsius * 9/5 * 32
        degreeSign = 'F'

        }

        return formula(updateDegree) + degreeSign
}
try{
    console.log(transformeEnGraus('50C'))
    console.log(transformeEnGraus('50F'))
   
} catch(error){
    console.log(error)
}