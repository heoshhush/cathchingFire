const body = document.querySelector('body'),
      fireContainer = document.querySelector('.fireContainer')

function randomNumGen(){
    const randomNum = Math.floor(Math.random()*1000);
    return randomNum
}

function paintFire (){
    const image = new Image();
    image.src = "fire.png";
    image.classList.add('fireImg');
    fireContainer.appendChild(image)
    
    const randomPosition1 = randomNumGen();
    const randomPosition2 = randomNumGen();
    const randomPosition3 = randomNumGen();
    
    image.style.left = randomPosition1 * 1.4
    image.style.bottom = randomPosition2 * 0.6
    
    image.addEventListener('click', delClick);

}

function delClick(event){
    const clickTarget = event.target
    console.log(clickTarget);
    fireContainer.removeChild(clickTarget);
}

function init(){
setInterval(paintFire,500);

    
}

init();


/*
const body = document.querySelector("body");
const IMG_NUMBER = 5;


function paintImage(imgNumber){
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
    image.classList.add('bgImage')
  body.appendChild(image)


}


function genRandom(){
  const number  = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init(){
  const randomNumber = genRandom();
  paintImage(randomNumber)
}

init();

*/