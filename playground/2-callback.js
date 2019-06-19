// setTimeout(() => {
//   console.log('Two seconds are up')
// }, 200)

// const names = [ 'DaJuan', 'Jen', 'Jess']
// const shortNames = names.filter((name) => name.length <= 4)

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     }

//     callback(data)
//   }, 2000)
// }

// geocode('Maimi', data => console.log(data))

const add = (a,b, callback) => {
  let sum = a+b
  setTimeout(() => callback(sum), 2000)
}


add(1, 4, sum => {
  console.log(sum) // print 5
})