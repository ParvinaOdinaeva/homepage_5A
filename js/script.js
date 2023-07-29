{
  const backgroundColorToggling = () => {

    const body = document.querySelector(".js-body");
    body.classList.toggle("bodyBackgdoundColor");
  };


  const box = document.querySelector(".js-advertisingBox");
  const showHideWord = document.querySelector(".js-advertisingWord");

  const advertisementToggleBox = () => {

    box.classList.toggle("js-advertisingBox");
    showHideWord.innerText = box.classList.contains("js-advertisingBox") ? "Pokaż" : "Ukryj";
  };

  const init = () => {

    const backgdoundToggleButton = document.querySelector(".js-bodyBackgdound");
    backgdoundToggleButton.addEventListener("click", backgroundColorToggling);

    const advertisementToggleButton = document.querySelector(".js-advertisingButton");
    advertisementToggleButton.addEventListener("click", advertisementToggleBox);
  };

  init();
}