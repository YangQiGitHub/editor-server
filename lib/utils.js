const fs = require('fs');

const readFile = function (path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) return reject(err)
      resolve(data)
    })
  })
}

// getDataFromFile('../db/1.json').then((data) => {
//   console.log('data', data)
// }).catch((err) => {
//   console.log(err, 'err--------------')
// })

const writeFile = function (file, data) {
  return new Promise((resolve, reject) => {
    console.log('wurjj')
    fs.writeFile(file, data, 'utf8', (err) => {
      if (err) return reject(err)
      resolve()
    })
  })
}

// writeFile('a.json', '{"a": 2}u').then(() => {
//   console.log('succ')
// }).catch((err) => {
//   console.log('err', err)
// });

module.exports = { readFile, writeFile }
