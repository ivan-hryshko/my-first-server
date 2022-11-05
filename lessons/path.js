const path = require('path')

// console.log(path.join(__filename, 'first', 'second'))

// const fullpath = path.resolve(__dirname, 'first', 'second', 'third.js')
// console.log(path.parse(fullpath));

const siteURL = 'http://localhost:8080/users?id=5123'

const url = new URL(siteURL)
console.log(url);