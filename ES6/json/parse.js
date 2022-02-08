let str = '{"name":"John", "age":30, "city":"New York"}'

// convert string to obj
const obj = JSON.parse(str)
console.log(obj['name'])

// convert obj to string
obj['name'] ='Ryan'
str = JSON.stringify(obj)
console.log(str)
