
function hello({ name, age }) {
  console.log(name)
  console.log(age)
}

const obj = {name: 'JK', age: 19}

hello(obj)

const { name: myName } = obj
console.log('Name is ', myName)