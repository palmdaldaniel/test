// Array-methods are used to manipulate datatypes


// forEach - much more efficient than a for loop
// destructive method och read only - changes the original array. Does not return value

const names = [
    'Daniel',
    'Fredrik',
    'Johan',
    'Martin',
    'Adam',
    'Eva'
]

names.forEach(name => {
    console.log('Name:', name)
} )


//filter. filterar och returnerar en ny array från en callback som följer ett villkor(if och else med true och false)- function. Den gamla arrayen är oförändrad.
// % = modulus
 let numA = [
     3,4,12,5,10,12
 ]

 let evenNumbers = numA.filter(number => {
     if(number % 2 === 0) {
        return true
     } else {
         return false
     }
 })
 console.log(evenNumbers)


 // shorter version of filter.
 evenNumbers = numA.filter(number => number % 2 === 0)
 console.log(evenNumbers)

// map  - modifies array med en callback

const pets = [
    'cat',
    'dog',
    'sheep',
    'bird',
    'snake'
]

const petWithUppercase = pets.map(pet => pet.toUpperCase()) 
console.log(petWithUppercase)


//reduce - puts all values into one and in a new array
// tar emot ett start värde på accumalotorn  - i fallet nedanför är det 20.

let numbers = [
    1,
    2,
    3,
    4,
    5
]

let sum = numbers.reduce( (acc, number) => {
    return acc + number;
},20)
console.log(sum)


// sort() - destructive method and sorts lists - affects orginal array

let cars = [
    'BMW',
    'Audi',
    'Volvo',
    'Tesla'
]

cars.sort()
console.log(cars)


let newNumbers = [1, 14, 10, 2, 300]

newNumbers.sort() // Som tom metod sortera den efter värde. typ 1 kommer innan 2 - då kommer 10  och 14 komma före 2
console.log(newNumbers)


/* newNumbers.sort((a,b) => {
    return a-b // resultatet av denna subtraktion är negativt, sorterar talen från minst till störst. "-(a-b)" ger störst till minst  
})
console.log(newNumbers)
 */

// sort persons in an object array after age. 
let persons = [
    {name: 'Daniel',
    age: 10},
    {name: 'Fredrik',
    age: 3},
    {name: 'Johan',
    age: 6},
    {name: 'Anna',
    age: 80},
    {name: 'Tomas',
    age: 30},
]

persons.sort((a,b) => {
    return a.age-b.age
})

console.log(persons)

