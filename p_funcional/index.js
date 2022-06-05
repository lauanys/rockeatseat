/*progamção imperativa=como é quando 
pogramação declarativa= oque vai fazr,não  como vai fazer
*/

// stateful function
let number = 2 ;

function square(){
    return number * number
}
number = square
//stateless function
const square = n => n * n;