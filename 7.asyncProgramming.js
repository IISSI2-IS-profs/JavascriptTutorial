const customer1 = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'customer1@customer.com',
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

const greetCustomer = (customer) => {
  console.log(`Welcome1 ${customer.fullName()}`)
}
console.log('Before timeout1')
// Params to be passed to the callback function:
// 1. callback function,
// 2. time in milliseconds,
// 3+. optional params to be passed to the callback f.
setTimeout(greetCustomer, 3000, customer1)
console.log('After timeout1')

console.log('Before timeout2')
// Passing an arrow anonymous function
setTimeout(customer => console.log(`Welcome2 ${customer.fullName()}`), 5000, customer1)
console.log('After timeout2')

import fs from 'fs'

// Block I/O.
const data = fs.readFileSync('file.txt') // blocks here until file is read
console.log(data)
console.log('After blocking I/O. This will run AFTER reading file')

// Async I/O (non blocking)
fs.readFile('file.txt', (err, data) => {
  if (err) throw err
  console.log(data)
})
console.log('After async I/O. This will run BEFORE reading file')

// Promises
const promiseOfEvenInteger = new Promise((resolve, reject) => {
  const n = Math.floor(Math.random() * 10)
  console.log(n)
  if (n % 2 === 0) {
    resolve(`Even number found: ${n}`)
  } else {
    reject(new Error(`Odd number found: ${n}`))
  }
})

promiseOfEvenInteger
  .then(message => console.log('Then: ' + message))
  .catch(error => console.error('Catch: ' + error))

// Async/await solution
async function noPromise () {
  // This code is easier to read.
  try {
    const message = await promiseOfEvenInteger
    console.log(message)
  } catch (err) {
    console.log('Catch: ' + err)
  }
}

noPromise()

// Other example
import axios from 'axios'
const usersEndpointUrl = 'https://jsonplaceholder.typicode.com/users'

// First version with promises
axios.get(usersEndpointUrl)
  .then(response => {
    console.log(response) // Prints whole response object
  })
  .catch(error => {
    console.log(error)
  })

// Second version with chaining promises
axios.get(usersEndpointUrl)
  .then(response => {
    return JSON.stringify(response.data)
  })
  .then(data => {
    console.log('Users:' + data)
  })
  .catch(error => {
    console.log(error)
  })

// async/await solution
async function processUsers (url) {
  try {
    const response = await axios.get(url)
    // Notice this is not a promise (no await needed)
    const usersJsonString = JSON.stringify(response.data)
    console.log(`Users: ${usersJsonString}`)
  } catch (error) {
    console.log(error)
  }
}

processUsers(usersEndpointUrl)
