console.log("ok");
// boutton  Black

  let button = document.querySelector('.myButton')
  console.log(button);
  let cibleBody = document.querySelector('body');
  console.log(cibleBody);
  let cvContainer = document.querySelector('.cv-container')

  function darkBody() {

      cibleBody.classList.remove('bodyClair');
      cibleBody.classList.add('bodySombre');
      cvContainer.classList.remove('cv-container')
      cvContainer.classList.add('cv-container--dark-Mode')
      console.log(button);

  }

  button.addEventListener('click', darkBody);

  // Boutton Clair

  let whiteButton = document.querySelector(".whiteButton")
  console.log(whiteButton);

  function whiteBody() {

      cibleBody.classList.remove('bodySombre');
      cibleBody.classList.add('bodyClair');
      cvContainer.classList.add('cv-container')
      cvContainer.classList.remove('cv-container--dark-Mode')
      console.log(whiteButton);
  }

  whiteButton.addEventListener('click', whiteBody);
