const fs = require('fs')
const path = require('path')

console.log('start');

// fs.mkdir(path.resolve(__dirname, 'dir', 'dir2', 'dir3'), (err) => {
//   if(err) {
//     console.log(err);
//   }
//   console.log('Папка создана');
// })

const writeFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => fs.writeFile(path,data, (err) => {
      if(err) {
          return reject(err.message)
      }
      resolve()
  }))
}

const appendFileAsync = async (path, data) => {
  return new Promise((resolve, reject) => fs.appendFile(path, data, (err) => {
      if(err) {
          return reject(err.message)
      }
      resolve()
  }))
}

const readFileAsync = async (path) => {
  return new Promise((resolve, reject) => fs.readFile(path, {encoding: 'utf-8'}, (err, data) => {
      if(err) {
          return reject(err.message)
      }
      resolve(data)
  }))
}

const removeFileAsync = async (path) => {
  return new Promise((resolve, reject) => fs.rm(path, (err) => {
      if(err) {
          return reject(err.message)
      }
      resolve()
  }))
}

writeFileAsync(path.resolve(__dirname, 'test.txt'), 'my firsr created file')
    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'),' 123'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'),' 456'))
    .then(() => appendFileAsync(path.resolve(__dirname, 'test.txt'),' 578'))
    .then(() => readFileAsync(path.resolve(__dirname, 'test.txt')))
    .then(data => console.log(data))
    .catch(err => console.log(err))

console.log('end');