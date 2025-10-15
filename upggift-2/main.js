// target the hamburger - returns the first element that matches
const hamburger = document.querySelector('.hamburger');
// target the nav links - returns the first element that matches
const nav = document.querySelector('.menu');
// set the varibel to false (ie the menu is hidden)

// eventlistner for hamburger and nav toggle
hamburger.addEventListener('click', () => {  
     nav.classList.toggle('nav--open');
     hamburger.classList.toggle('hamburger--open')
}); 



//  target all the slides (there are 5 slide divs for all the movies - returns nodeList with elements that match) 
const slides = document.querySelectorAll('.slide');
// to target the slider-nav div - returns the first element that matches
const sliderNav = document.querySelector('.slider-nav');
// to target the slider div
const slider = document.querySelector('.slider')
// to target the slider-arrow prev div
const prevBtn = document.querySelector('.prev')
// to target the slider-arrow next div
const nextBtn = document.querySelector('.next')
 

// variabel to keep track of current slide
let currentSlide = 0;    
//vairabel to keep slide count
let slideCount = slides.length;
  
// loop through each of the slides, create nav dots for each slide 
slides.forEach((_, index) => {
    // variabel to keep created div elements
    const dot = document.createElement('div');
    // to add nav-dov class to dot
    dot.classList.add('nav-dot');

    // when the index is 0 add the extra class active to it
    if(index === 0)dot.classList.add('active');

    //create an eventlistner for each dot
     dot.addEventListener('click', () => {
        gotToSlide(index);
     }) 
     sliderNav.appendChild(dot);
});
 
//reference the dots
const dots = document.querySelectorAll('.nav-dot');

// to update the dot according to the current slide
function updateDots () {
    dots.forEach ((dot, index) => {
        dot.classList.toggle('active', index === currentSlide);
    });
} 
function gotToSlide(index) {
    // make sure index is not greater than the nr of slides
    currentSlide = (index + slideCount) % slideCount;
    // target slider, negative value to move to the left * 100 to move for each slide for the next/prev
    slider.style.transform = `translateX(-${currentSlide * 100}%)`; 
    
    resetAnimation(slides[currentSlide]);

    // call the function updateDots 
    updateDots(); 
}  

//function to reset the animation by 
function resetAnimation(slide) {
     const content = slide.querySelector('.slide-content');
     // check if available 
     if (content) {
         const clone = content.cloneNode(true)
         content.parentNode.replaceChild(clone, content);
     }
}

// function to go to the next slide
function handleNextSlide () {
    gotToSlide(currentSlide + 1);
}

// function to go to the ptrv slide
function handlePrevSlide () {
    gotToSlide(currentSlide - 1);
}

//evetlistners for the Btns
prevBtn.addEventListener('click', handlePrevSlide);
nextBtn.addEventListener('click', handleNextSlide);