var formSignin = document.querySelector('#signin')
var formSignup = document.querySelector('#signup')
var btnColor = document.querySelector('.btnColor')
var formTotal = document.querySelector('.container')

document.querySelector('#btnSignin')
  .addEventListener('click', () => {
    formSignin.style.left = "25px"
    formSignup.style.left = "450px"
    btnColor.style.left = "0px"
})

document.querySelector('#btnSignup')
  .addEventListener('click', () => {
    formSignin.style.left = "-450px"
    formSignup.style.left = "25px"
    btnColor.style.left = "110px"
})

document.querySelector('#hamburguer')
  .addEventListener('click', () => {
    if (formTotal.style.display === "none"){
      formTotal.style.display = "flex"
      return
    }
    formTotal.style.display = "none"
  })