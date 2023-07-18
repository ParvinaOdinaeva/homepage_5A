
// button toggling the background
{
  const backgroundColorToggling = () => {
    const body = document.querySelector(".js-body");
    body.classList.toggle("bodyBackgdoundColor");
  }

  const init = () => {
    const button = document.querySelector(".js-bodyBackgdound");
    button.addEventListener("click", backgroundColorToggling);
  }

  init();
}


// button hiding and showing an advertisement with a change of the word in the button
{

  const box = document.querySelector(".js-advertisingBox");
  const showHideWord = document.querySelector(".js-advertisingWord"); 

  const advertisementButton = () => {    
      if (box.classList.toggle("js-advertisingBox")) {
        (showHideWord.innerText = "Pokaz");
      } else {
        (showHideWord.innerText = "Ukryj");
      } 
  }

  const init = () => {
    const button = document.querySelector(".js-advertisingButton");
    button.addEventListener("click", advertisementButton);
  }

  init();
}