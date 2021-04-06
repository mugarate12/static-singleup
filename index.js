const closeModal = document.getElementById('close_modal')
const modalDisplay = document.getElementById('modal_display')
const loginBTN = document.getElementById('login_btn')
const SigninBTN = document.getElementById('signin_btn')

loginBTN.addEventListener('click', () => {
  modalDisplay.style.display = 'flex'
})

SigninBTN.addEventListener('click', () => {
  modalDisplay.style.display = 'flex'
})

closeModal.addEventListener('click', () => {
  modalDisplay.style.display = 'none'
})