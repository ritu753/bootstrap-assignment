let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
  loginForm.classList.toggle('active');
}

let sideNavbar =document.querySelector('.sidenavbar');

document.querySelector('#menu-btn').onclick = () =>{
  sideNavbar.classList.toggle('active');
}