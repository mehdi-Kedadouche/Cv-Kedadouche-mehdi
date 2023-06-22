
  function changeBody() {
    let body = document.querySelector('body');
    let cvContainer = document.querySelector('.cv-container');

    body.classList.toggle('bodySombre');
    cvContainer.classList.toggle('cv-container--dark-Mode')
 
 }
 function clickBody(){
 
    let button = document.querySelector('.slider');

 
    button.addEventListener('click', changeBody )
 
 }
 
 clickBody();

 


