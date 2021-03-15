'use strict'

const ipfs = require('../../src')('178.62.228.107', 5001)

ipfs.files.ls('/folder1', function (err, res) {
  if (err) {
    return console.log('got an error', err)
  }
  if (res.readable) {
    res.pipe(process.stdout)
  } else {
    console.log(res)
  }
})
