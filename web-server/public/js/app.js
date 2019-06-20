const messageOne   = document.querySelector('#messageOne')
const messageTwo     = document.querySelector('#messageTwo')
const weatherForm = document.querySelector('#searchForm')
const search      = document.querySelector('input')


weatherForm.addEventListener('submit', e => {
  e.preventDefault()
  const location = search.value

  messageOne.textConent = 'Loaing...'
  messageTwo.textContent = ''

  fetch(`/weather?address=${location}`)
  .then(res => {res.json().then(data => {
    if(data.error){
      messageOne.textContent = data.error
    }else {
      messageOne.textContent = data.forecast
      messageTwo.textContent = data.location
    }
  })})
})