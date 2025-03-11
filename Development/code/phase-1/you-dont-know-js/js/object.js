//object destructuring

const person ={
first_name: 'JOHN',
Gender:'MALE',
Occupation:'Software Engineering',
address: {
    city:'Nairobi',
    zipCode: '00100',
},
age: 40,
Language: function(){console.log("I SPEAK FRENCH")},
friends: ['ALICE', 'BENSON', 'PHILLIP']
}

console.log(person.address.city)
console.log(person.friends[2])
person.Language()

const{Gender, first_name, age, Language, friends, address:{city,zipCode},} = person
console.log(Gender)
console.log(age)
person.Language()
console.log(zipCode)