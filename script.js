const sliderContainer = document.querySelector(".slider-container");
const slideElements = document.querySelectorAll(".slide");
const buttonLeft = document.getElementById("left");
const buttonRight = document.getElementById("right");
const body = document.body;


let activeSlide = 0;

buttonRight.addEventListener("click",() => {
    activeSlide++;

    if(activeSlide > slideElements.length - 1)
    {
        activeSlide = 0;
    }

    setBgToBody();
    setActiveSlides()
})

buttonLeft.addEventListener("click",() => {
    activeSlide--;

    if(activeSlide <0)
    {
        activeSlide = slideElements.length - 1;
    }

    setBgToBody();
    setActiveSlides()
})

setBgToBody()

function setBgToBody()
{
    body.style.backgroundImage  = slideElements[activeSlide].style.backgroundImage;
}

function setActiveSlides()
{
    slideElements.forEach((slide) =>{
        slide.classList.remove("active");
    })
    slideElements[activeSlide].classList.add("active");
}

buttonRight.addEventListener("click",() =>{

    slideElements.forEach((slide) => {

        
    })

})