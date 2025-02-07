const customer1 = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'customer1@customer.com',
  birthDate: new Date('9/15/1990'), // september 15th
  // No usamos arrow functions porque this no estaría disponible
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  },
  age: function () {
    const ageDifMs = Date.now() - this.birthDate.getTime()
    const ageDate = new Date(ageDifMs) // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
}

const age = customer1.age()
console.log(`${customer1.fullName()} is ${age} years old`)

if (age > 18) {
  console.log('Adult')
} else if (age > 13) {
  console.log('Teenager. Not a valid customer')
} else {
  console.log('Child. Not a valid customer')
}

function isCustomerValidV1 (customer) {
  const age = customer.age()
  if (age > 18) {
    return true
  } else {
    return false
  }
}
console.log(isCustomerValidV1(customer1))


const isCustomerValidV2 = (customer) => {
  return customer.age() > 18
}

console.log(isCustomerValidV2(customer1))

// console.log(isCustomerValidV2()) // Error: No argument

// This is a conditional ternary operator
// Here it is used for argument checking
const isCustomerValidV3 = (customer) => {
  return customer ? customer.age() > 18 : false 
} 

console.log(isCustomerValidV3(customer1)) // Prints true
console.log(isCustomerValidV3())          // Prints false



const customer2 = {
  firstName: 'Juan',
  lastName: 'García',
  email: 'customer2',
  birthDate: new Date('9/15/1990'), // september 15th
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  },
  age: function () {
    const ageDifMs = Date.now() - this.birthDate.getTime()
    const ageDate = new Date(ageDifMs) // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
}

function isCustomerEmailValidV1 (customer) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(customer.email.toLowerCase())
}
console.log(`${customer1.fullName()} email is ${customer1.email} and is valid = ${isCustomerEmailValidV1(customer1)}`)
console.log(`${customer2.fullName()} email is ${customer2.email} and is valid = ${isCustomerEmailValidV1(customer2)}`)

// console.log(`${customer1.fullName()} email is ${customer1.email} and is valid = ${isCustomerEmailValidV1()}`) //undefined

const isCustomerEmailValidV2 = (customer) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return customer ? re.test(customer.email.toLowerCase()) : false
}

console.log(`${customer2.fullName()} email is ${customer2.email} and is valid = ${isCustomerEmailValidV2()}`) // checks undefined

const customer3 = {
  firstName: 'Alan',
  lastName: 'Turing',
  id: 5567,
  // email: 'customer2', // email not define
  birthDate: new Date('6/23/1912'), // september 15th
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  },
  age: function () {
    const ageDifMs = Date.now() - this.birthDate.getTime()
    const ageDate = new Date(ageDifMs) // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
}

 //console.log(`${customer3.fullName()} email is ${customer3.email} and is valid = ${isCustomerEmailValidV2(customer3)}`) // email is undefined -> error

function isCustomerEmailValidV3 (customer) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return customer?.email ? re.test(customer.email.toLowerCase()) : false // operator '?' to check undefined. Notice that is diferent to ternary operator
}

console.log(`${customer3.fullName()} email is ${customer3.email} and is valid = ${isCustomerEmailValidV3(undefined)}`)

// Other ways of declaring functions

// assign a variable to a function
const isCustomerEmailValidv4 = function (customer) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return customer?.email ? re.test(customer.email.toLowerCase()) : false // operator '?' to check undefined. Notice that is diferent to ternary operator
}
console.log('Using variable: ' + isCustomerEmailValidv4(customer3))

// arrow functions
const isCustomerEmailValidv5 = (customer) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return customer?.email ? re.test(customer.email.toLowerCase()) : false // operator '?' to check undefined. Notice that is diferent to ternary operator
}
console.log('Using arrow function: ' + isCustomerEmailValidv5(customer3))

const isCustomerEmailValidv6 = customer => { // if there is only one parameter, parenthesis can be omitted
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return customer?.email ? re.test(customer.email.toLowerCase()) : false // operator '?' to check undefined. Notice that is diferent to ternary operator
}

console.log('Using arrow function no parenthesis: ' + isCustomerEmailValidv6(customer3))

const fullNamev2 = customer => customer.firstName + ' ' + customer.lastName // if there is only a return statement this syntax is valid.

console.log('Using function that only includes a return statement: ' + fullNamev2(customer3))

const customer4 = {
  firstName: 'Alan',
  lastName: 'Turing',
  id: 5567,
  fullName: function () {
    return this.firstName + ' ' + this.lastName
  },
}

const isCustomerIdValidV1 = (customer) => {
  const re = /^([0-9]{4})$/
  // operator '?' to check undefined. Notice that is diferent to ternary operator
  return customer?.id ? re.test(customer.id) : false 
}

console.log(`${customer4.fullName()} id is ${customer4.id} and'
  +' is valid = ${isCustomerIdValidV1(customer4)}`)
console.log(`${customer4.fullName()} id is ${customer4.id} and' 
  + ' is valid = ${isCustomerIdValidV1()}`)

// Other ways of declaring functions
// Assign a variable to a function
const isCustomerIsValidV2 = function (customer) {
  const re = /^([0-9]{4})$/
  return customer?.id ? re.test(customer.id) : false 
}
console.log('Using variable: ' +  isCustomerIsValidV2(customer4))

// Using arrow functions
const isCustomerIdValidV3 = (customer) => {
  const re = /^([0-9]{4})$/
  return customer?.id ? re.test(customer.id) : false 
}
console.log('Using arrow function: ' + isCustomerIdValidV3(customer4))

// Using arrow functions without parenthesis
// if there is only one parameter
const isCustomerIdValidV4 = customer => { 
  const re = /^([0-9]{4})$/
  return customer?.id ? re.test(customer.id) : false 
}
console.log('Using arrow function, no parenthesis: ' + isCustomerIdValidV4(customer4))

// if there is only a return statement this syntax is valid:
const fullNameV2 = customer => customer.firstName + ' ' + customer.lastName 

console.log('Using function that only includes a return statement: '
  + fullNameV2(customer4))

// Loops and iterations
/*const customer1 = {   }
const customer2 = {   }
const customer3 = {   }
const customers = [customer1, customer2, customer3]

// Classic
for (let index = 0, len = customers.length; index < len; ++index) {
  console.log(customers[index].fullName())
}
// Extended
for (const customer of customers) {
  console.log(customer.fullName())
}
// Functional
customers.forEach(customer => console.log(customer.fullName()))*/
