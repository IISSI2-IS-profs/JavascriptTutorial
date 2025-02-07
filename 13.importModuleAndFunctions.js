import * as apiModule from './8.apiModule.js' // Importa un objeto que contiene todas las variables marcadas con export
import { getUsers, getUserById } from './9.exportFunctions.js' // Importa y desestructura el objeto que se exporta
import apiModuleObject from './10.exportDefault.js' // Importa el objeto que se exporta

console.log('apiModule object containing all exported function ')
console.log(apiModule)

console.log('ApiModule.getUsers(): ')
// Notice that this returns a promise!
// (how can we resolve it?
// => ApiModule.getUsers()
// .then(users => console.log(users))
// .catch(err => console.err(err))
console.log(apiModule.getUsers())

const processUsers1 = async () => {
  try {
    const users = await apiModule.getUsers()
    console.log(`Users: ${JSON.stringify(users)}`)
  } catch (error) {
    console.log(error)
  }
}

processUsers1()

console.log('Exported module object: ')
console.log(apiModuleObject)
console.log('Exported module object, function getUsers(): ')
console.log(apiModuleObject.getUsers())

const processUsers2 = async () => {
  try {
    const users = await apiModuleObject.getUsers()
    console.log(`Users: ${JSON.stringify(users)}`)
  } catch (error) {
    console.log(error)
  }
}

processUsers2()

console.log('getUsers(): ')
console.log(getUsers())

console.log('getUserById(1): ')
console.log(getUserById(1))

const processUsers3 = async () => {
  try {
    const users = await getUsers()
    console.log(`Users: ${JSON.stringify(users)}`)
  } catch (error) {
    console.log(error)
  }
}

processUsers3()
