# Introducción a JavaScript

JavaScript es un lenguaje de programación interpretado y de tipado dinámico que se usa ampliamente en el desarrollo web, tanto en el frontend como en el backend (con Node.js). Este tutorial te ayudará a comprender desde conceptos básicos como variables y tipos de datos, hasta temas más avanzados como programación asíncrona y modularización.

## 1. Tu Primer Programa: Hello World

Empezaremos con el clásico ejemplo "Hello World", que nos ayudará a familiarizarnos con la sintaxis básica y la función para imprimir mensajes.

### Declaración de una constante

```js
const greetingMessage = 'Hello world'
```

Aquí usamos `const` para definir una variable cuyo valor no cambiará durante la ejecución del programa. Es una práctica común usar `const` cuando sabemos que el valor será fijo.

### Imprimir el mensaje

```js
console.log(greetingMessage)
```

La función `console.log()` se utiliza para mostrar mensajes en la consola. Esto es muy útil para depurar y verificar que nuestro código funciona correctamente.

---

## 2. Variables y Alcance

Existen dos formas principales de declarar variables en JavaScript: `let` y `const`.  
`let` permite que la variable se modifique, mientras que `const` impide que se reasigne.

### Declaración con `let`

```js
let x, y
x = 5
y = 6
```

Aquí declaramos dos variables sin asignarles un valor inicial y luego las asignamos. Las variables declaradas con `let` pueden cambiar su valor en cualquier momento.

### Uso de `const`

```js
const myName = 'Alejandro'
console.log(myName)
```

Usamos `const` para definir una variable de solo lectura. Una vez asignado el valor, no se puede modificar.

### Alcance de Bloque

```js
const xGlobal = 5

{
  const xGlobal = 6
  console.log("Dentro del bloque:", xGlobal) // Imprime 6
}

console.log("Fuera del bloque:", xGlobal)   // Imprime 5
```

Las variables definidas con `let` o `const` tienen alcance de bloque, lo que significa que solo son accesibles dentro de las llaves `{}` en las que se declararon. Esto ayuda a evitar conflictos de nombres y errores.

---

## 3. Tipos de Datos en JavaScript

JavaScript maneja diferentes tipos de datos, como números, cadenas, booleanos, objetos y arreglos.

### Tipos primitivos

```js
const size = 3
const height = 1.75
const message = 'Hello!'
const isEmpty = true
```

Aquí definimos variables de tipo numérico, cadena de texto y booleano. Estos son los bloques básicos para almacenar información.

### Objetos

```js
const person = {
  firstName: 'John',
  lastName: 'Doe'
}
```

Un objeto agrupa propiedades y, a menudo, funciones relacionadas. En este ejemplo, el objeto `person` tiene dos propiedades: `firstName` y `lastName`.

### Método dentro de un objeto

```js
person.fullName = function () {
  return this.firstName + ' ' + this.lastName
}
console.log(person.fullName())  // Imprime "John Doe"
```

Al definir una función dentro del objeto, usamos `this` para referirnos al propio objeto. Esto permite reutilizar la función con diferentes instancias.

### Arreglos

```js
const cars = ['Saab', 'Volvo', 'BMW']
console.log(cars[0])  // Imprime "Saab"
```

Un arreglo es una lista ordenada de elementos. En este caso, `cars` es un arreglo de marcas de automóviles. El índice comienza en 0.

---

## 4. Manipulación de Cadenas (Strings)

Las cadenas son esenciales para trabajar con texto. JavaScript proporciona métodos para obtener la longitud, extraer partes, reemplazar contenido y más.

### Longitud y búsqueda

```js
const str = 'Apple,Banana,Kiwi'
console.log(str.length)             // Imprime 17
console.log(str.indexOf('Banana'))  // Imprime 6
```

`length` devuelve el número de caracteres en la cadena. `indexOf()` busca una subcadena y devuelve la posición en la que se encuentra o -1 si no existe.

### Extracción de subcadenas

```js
const start = 6
const end = 12
console.log(str.slice(start, end))  // Imprime "Banana"
```

El método `slice()` extrae una parte de la cadena, desde el índice `start` hasta el índice `end` (sin incluir este último).

### Conversión y división de cadenas

```js
console.log(str.split(','))  // Imprime ['Apple', 'Banana', 'Kiwi']
console.log(str.replace('Kiwi', 'Orange'))  // Imprime "Apple,Banana,Orange"
```

`split()` divide la cadena en partes basadas en el separador dado (en este caso, la coma). `replace()` sustituye una parte de la cadena por otra.

### Concatenación y template literals

```js
const firstName = 'John'
const lastName = 'Doe'
console.log('Welcome ' + firstName + ', ' + lastName + '!')
console.log(`Welcome ${firstName}, ${lastName}!`)
```

Los template literals (usando comillas invertidas) permiten insertar variables directamente en la cadena mediante la sintaxis `${variable}`.

---

## 5. Arreglos y Métodos Comunes

Los arreglos son fundamentales para manejar colecciones de datos.

### Acceso y modificación

```js
const cars = ['Saab', 'Volvo', 'BMW']
console.log(cars[0])  // Imprime "Saab"

cars[0] = 'Mercedes'
console.log(cars)  // Ahora imprime ['Mercedes', 'Volvo', 'BMW']
```

Podemos acceder a cada elemento del arreglo por su índice y, aunque el arreglo se haya declarado con `const`, sus elementos pueden modificarse.

### Agregar y eliminar elementos

```js
cars.push('Honda')
console.log(cars)

const poppedCar = cars.pop()
console.log('Elemento removido:', poppedCar)
console.log(cars)
```

`push()` agrega un elemento al final del arreglo, mientras que `pop()` elimina y devuelve el último elemento.

### Métodos de transformación y filtrado

```js
cars.forEach(car => console.log(car))

const longNamedBrands = cars.filter(brand => brand.length > 4)
console.log(longNamedBrands)

const doubledNumbers = [1, 2, 3].map(n => n * 2)
console.log(doubledNumbers)
```

- `forEach()` recorre cada elemento del arreglo y ejecuta una función para cada uno.  
- `filter()` crea un nuevo arreglo con los elementos que cumplen la condición.  
- `map()` transforma cada elemento y devuelve un nuevo arreglo.

---

## 6. Programación Estructurada: Objetos, Funciones y Condicionales

Agrupar datos y funciones en objetos es esencial para escribir código organizado. Veamos cómo trabajar con ellos.

### Creación de un objeto con propiedades

```js
const customer = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'customer@example.com'
}
```

Un objeto en JavaScript se define con llaves `{}` y almacena pares clave-valor. En este caso, `customer` tiene tres propiedades.

### Añadir un método para obtener el nombre completo

```js
customer.fullName = function () {
  return this.firstName + ' ' + this.lastName
}

console.log(customer.fullName()) // Imprime "John Doe"
```

Los métodos dentro de un objeto son funciones que operan sobre sus propiedades. Usamos `this` para acceder a los valores del objeto.

### Función para calcular la edad

```js
customer.birthDate = new Date('1990-09-15')

customer.age = function () {
  const diffMs = Date.now() - this.birthDate.getTime()
  const ageDate = new Date(diffMs)
  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

console.log("Edad:", customer.age())
```

Aquí agregamos una propiedad `birthDate` y una función `age()` que calcula la edad restando la fecha actual menos la fecha de nacimiento.

### Uso de condicionales

```js
if (customer.age() > 18) {
  console.log('Adulto')
} else {
  console.log('Menor de edad')
}
```

Los condicionales `if-else` permiten tomar decisiones en el código según una condición.

---

## 7. Programación Asíncrona: Callbacks, Promesas y Async/Await

JavaScript ejecuta código de forma asíncrona en muchas situaciones, como leer archivos o hacer llamadas a una API.

### Uso de `setTimeout` con un callback

```js
const greetCustomer = customer => {
  console.log(`¡Bienvenido ${customer.fullName()}!`)
}

console.log('Antes del timeout')
setTimeout(greetCustomer, 3000, customer)
console.log('Después del timeout')
```

`setTimeout` ejecuta una función después de un tiempo determinado (en milisegundos). Aquí pasamos `customer` como argumento.

### Lectura de archivos (Sincrónica vs. Asincrónica)

```js
import fs from 'fs'

const dataSync = fs.readFileSync('file.txt')
console.log('Datos (sincrónicos):', dataSync)
```

Este código bloquea la ejecución hasta que se lee el archivo.

```js
fs.readFile('file.txt', (err, dataAsync) => {
  if (err) throw err
  console.log('Datos (asíncronos):', dataAsync)
})
console.log('Después de iniciar la lectura asíncrona')
```

Aquí `readFile` lee el archivo sin bloquear la ejecución, llamando a una función cuando termina.

### Uso de Promesas y Async/Await

```js
const promiseExample = new Promise((resolve, reject) => {
  const n = Math.floor(Math.random() * 10)
  if (n % 2 === 0) {
    resolve(`Número par encontrado: ${n}`)
  } else {
    reject(new Error(`Número impar encontrado: ${n}`))
  }
})
```

Una promesa representa una operación asíncrona que puede completarse (`resolve`) o fallar (`reject`).

```js
promiseExample
  .then(message => console.log('Promesa resuelta:', message))
  .catch(error => console.error('Promesa rechazada:', error))
```

Manejamos el resultado con `.then()` para éxito y `.catch()` para errores.

```js
async function processPromise () {
  try {
    const message = await promiseExample
    console.log('Async/Await:', message)
  } catch (error) {
    console.error('Async/Await error:', error)
  }
}

processPromise()
```

Con `async/await` podemos escribir código asíncrono de manera secuencial, evitando el anidamiento de `then()`.

---

## 8. Módulos: Exportar e Importar Funciones

Organizar el código en módulos ayuda a mantenerlo limpio y reutilizable.

### Exportar funciones individualmente

```js
// apiModule.js
import axios from 'axios'
const baseUrl = 'https://jsonplaceholder.typicode.com'
const usersEndpoint = '/users'

export const getUsers = async () => {
  try {
    const response = await axios.get(`${baseUrl}${usersEndpoint}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
```

`export const` permite exportar una función para usarla en otros archivos.

### Exportar múltiples funciones juntas

```js
// exportFunctions.js
import axios from 'axios'
const baseUrl = 'https://jsonplaceholder.typicode.com'
const usersEndpoint = '/users'

const getUserById = async (id) => {
  try {
    const response = await axios.get(`${baseUrl}${usersEndpoint}\\${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export { getUsers, getUserById }
```

Aquí exportamos múltiples funciones juntas.

### Exportación por defecto

```js
// exportDefault.js
import axios from 'axios'
const baseUrl = 'https://jsonplaceholder.typicode.com'
const usersEndpoint = '/users'

const getUsers = async () => {
  // Lógica similar a la anterior
}

const getUserById = async (id) => {
  // Lógica similar a la anterior
}

const apiModuleObject = { getUsers, getUserById }
export default apiModuleObject
```

Usamos `export default` para exportar un objeto con funciones.

---

## 9. Refactorización y Código Limpio

Es importante estructurar el código para que sea más legible y mantenible.

### Código sin refactorizar

```js
const deliverOrder = async (orderId) => {
  const order = await Order.findByPk(orderId)
  if (!order) {
    throw new Error("Order not found")
  }
  order.deliveredAt = new Date()
  await order.save()
  // Cálculo del tiempo de servicio...
}
```

Este código mezcla la lógica de entrega de la orden y la actualización del tiempo de servicio.

### Código refactorizado

```js
const deliverOrder = async (orderId) => {
  try {
    const order = await Order.findByPk(orderId)
    if (!order) throw new Error("Order not found")
    order.deliveredAt = new Date()
    const updatedOrder = await order.save()
    updateRestaurantServiceTime(order.restaurantId)
    return updatedOrder
  } catch (err) {
    throw err
  }
}
```

Ahora la actualización del tiempo de servicio está separada en otra función.

```js
const updateRestaurantServiceTime = async (restaurantId) => {
  const restaurant = await Restaurant.findByPk(restaurantId)
  const averageTime = await restaurant.getAverageServiceTime()
  await Restaurant.update({ averageServiceMinutes: averageTime }, { where: { id: restaurantId } })
}
```

Esto mejora la legibilidad y permite reutilizar `updateRestaurantServiceTime()` en otros lugares.

---

## 10. Integración de Módulos

Finalmente, veamos cómo importar y utilizar módulos en otro archivo.

### Importación de todas las funciones exportadas

```js
// importModuleAndFunctions.js
import * as apiModule from './apiModule.js'
```

Con `import * as` importamos todas las exportaciones nombradas en un objeto llamado `apiModule`.

### Importar funciones específicas

```js
import { getUsers, getUserById } from './exportFunctions.js'
```

Con llaves `{}` importamos solo las funciones que necesitamos.

### Importación de una exportación por defecto

```js
import apiModuleObject from './exportDefault.js'
```

Las exportaciones por defecto se importan sin llaves.

### Uso de las funciones importadas

```js
const displayUsers = async () => {
  try {
    const users = await apiModule.getUsers()
    console.log('Usuarios:', JSON.stringify(users))
  } catch (error) {
    console.error(error)
  }
}

displayUsers()
```

Llamamos a `getUsers()` y mostramos los resultados en consola.

---

¡Felicidades! Ahora conoces los fundamentos de JavaScript, desde variables hasta programación asíncrona y modularización. La mejor forma de aprender es practicando, así que prueba cada fragmento de código y experimenta con tus propios ejemplos. ¡Feliz codificación!

