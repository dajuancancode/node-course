const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('This is an error')
  }, 2000)
})

doWorkPromise
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })