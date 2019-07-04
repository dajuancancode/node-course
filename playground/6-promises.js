const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a+b)
    }, 2000)
  })
}

add(1, 2)
  .then(sum  => add(sum, 5))
  .then(sum2 => console.log(sum2))
  .catch(err => console.log(err))