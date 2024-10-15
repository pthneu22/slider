const arrowLeft = document.querySelector(".arrow-left");
const arrowRight = document.querySelector(".arrow-right");
const slides = document.querySelectorAll(".slider-image");
const bottom = document.getElementById("bottom");
const counter = document.getElementById("counter");
let currentCounter = 1;

let currentSlideIndex = 0;
const paginationCircles = [];

function createPaginationCircle() {
    const div = document.createElement("div");
    div.className = "pagination-circle";
    bottom.appendChild(div);
    paginationCircles.push(div);
}

function addPagination() {
    slides.forEach(createPaginationCircle);
    paginationCircles[0].classList.add("active");
    paginationCircles.forEach((circle, index) => {
        circle.addEventListener("click", () => changeSlide(index));
    });
}

function addActiveClass() {
    paginationCircles[currentSlideIndex].classList.add("active");
}

function removeActiveClass() {
    paginationCircles[currentSlideIndex].classList.remove("active");
}

function showSlide() {
    slides[currentSlideIndex].classList.add("block");
}

function hideSlide() {
    slides[currentSlideIndex].classList.remove("block");
}

function changeSlide(slideIndex) {
    hideSlide();
    removeActiveClass();
    currentSlideIndex = slideIndex;
    addActiveClass();
    showSlide();
    counterSlide();
}

function nextSlide() {
    let newSlideIndex = currentSlideIndex + 1;
    currentCounter++;
    if(newSlideIndex > slides.length - 1) {
        newSlideIndex = 0;
        currentCounter = 1;
    }
    changeSlide(newSlideIndex);
}

function previousSlide() {
    let newSlideIndex = currentSlideIndex - 1;
    currentCounter--;
    if(newSlideIndex < 0) {
        newSlideIndex = slides.length - 1;
        currentCounter = slides.length
    }
    changeSlide(newSlideIndex);
}

function counterSlide() {
    const cntSlides = slides.length
    counter.innerText = `${currentCounter} из ${cntSlides}`
}

addPagination();
counterSlide();
arrowLeft.addEventListener("click", previousSlide);
arrowRight.addEventListener("click", nextSlide);