let person = {
    name: 'John',
    age:20,
    weight: 88.2
}
for(let property in person){
    console.log(property)
    console.log(person[property])
}