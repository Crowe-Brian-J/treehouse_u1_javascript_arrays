const middle = ['lettuce', 'cheese', 'patty']
const burger = ['top bun', ...middle, 'bottom bun']
//cannot add an array within an array without creating a two-dimensional array
//spread operator (...) adds full contents of an array into another array

const brass = ['trumpet', 'trombone', 'french horn', 'baritone', 'tuba']
const woodwind = ['flute', 'oboe', 'clarinet', 'saxophone', 'bassoon']
//to add both arrays' contents together, two spread operators are necessary
const instruments = [...brass, ...woodwind]

//because this is executed after const instruments, it will not be added to instruments array
brass.push('flugelhorn')

console.log(burger)
console.log(instruments)

const numbers = [10, 20, 30, 40]
console.log(Math.max(numbers)) //returns NaN because numbers is an array
console.log(Math.max(...numbers)) //returns 40 because spread
console.log(Math.min(...numbers)) //returns 10    ''    ''
