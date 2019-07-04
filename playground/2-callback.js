const doWorkCallback = (callback) => {
  setTimeout(() => {
    //callback('Error', undefined)
    callback(undefined, [2, 3, 4])
  }, 2000)
}

doWorkCallback((err, res) => {
  return err ? console.log(err) : console.log(res)
})