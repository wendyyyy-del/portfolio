console.log("Hello world");

let fruits=["Banana", "Mango", "Kiwi", "Pears", "Avocado"]

console.log(fruits.length)

console.log(fruits[3])

//unshift
fruits.unshift("Watermelon")

console.log(fruits)

//push

fruits.push("lemon")
console.log(fruits)

//shift
fruits.shift()
console.log("fruits")

//pop
fruits.pop()
    console.log(fruits)

//spread operator(...)
//let new fruits =[...fruits, "Apple", "Pineapple"]
//console.log(new fruits)
//console.log(fruits)
//let new fruits arr =["Orange", "Blackberry", ...fruits.]
//console.log(new fruits arr)

//objects
let person = {
    name:'John',
    gender :'Male',
    age: 34,
    isActive:true,
    friends: ["Brenda", "Elvis", "Collins", "Alice"]
}


console.log(person.friends[2])


