//Hamburger icon
const hamburger = document.getElementsByClassName('hamburger-link')[0];
const navBody = document.getElementsByClassName('mobile-nav-main')[0];
const ham = document.getElementsByClassName('ham')[0];


const mobileDropdown = document.getElementsByClassName('product')[0];

//dark arrow menu carot image thing
const darkArrow = document.getElementsByClassName('arrow-dark')[0];
const darkArrow2 = document.getElementsByClassName('arrow-dark2')[0];
const darkArrow3 = document.getElementsByClassName('arrow-dark3')[0];

//actual href of clickable link
const arrowLink = document.getElementsByClassName('arrow-link')[0];
const arrowLink2 = document.getElementsByClassName('arrow-link2')[0];
const arrowLink3 = document.getElementsByClassName('arrow-link3')[0];




hamburger.addEventListener('click', () => {
  navBody.classList.toggle('active')  
  ham.classList.toggle('close');
})



//toggle mobile dropdowns
arrowLink.addEventListener('click', () => {
  darkArrow.classList.toggle('arrowUp');
  mobileDropdown.classList.toggle('dropdownActive');
  
})

//arrowlink2
arrowLink2.addEventListener('click', ()=> {
  darkArrow2.classList.toggle('arrowUp');
  var mobileDropdown = document.getElementsByClassName('product')[1];
  mobileDropdown.classList.toggle('dropdownActive');
})

//arrowLink3 
arrowLink3.addEventListener('click', () => {
  darkArrow3.classList.toggle('arrowUp');
   var mobile = document.getElementsByClassName('product')[2];
  mobile.classList.toggle('dropdownActive');
  
})