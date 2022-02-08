import User, {printName as printUserName, printAge} from './user.js'

const user = new User('Bob', 21)
printAge(user)
console.log(user)
