// slider

let slideIndex = 1, //current slide index (default = 1)
    slides = document.querySelectorAll('.slider-item'),  //all our slides
    prev = document.querySelector('.prev'), //arrow left
    next = document.querySelector('.next'), //arrow right
    dotsWrap = document.querySelector('slider-dots'), //our dots (if we have dots)
    dots = document.querySelectorAll('dot'); //dot-item

function showSlides(n) {

    //for out buttons
    if(n > slides.lenght) {
        slideIndex = 1;
    } else if (n < 1) {
        slideIndex = slides.lenght;
    }

    slides.forEach((item) => item.style.display = 'none');
    // for(let i = 0; i < slides.lenght;i++) {
    //    slides[i].style.display = 'none';   
    // }
    dots.forEach((item) => item.classList.remove('dot-active'));
    //showing what is active
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('dot-active');
}

function plusSlider(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

prev.addEventListener('click', function() {
    plusSlider(-1);
});
next.addEventListener('click', function() {
    plusSlider(1);
});

dotsWrap.addEventListener('click' function(event) {
    for(let i = 0; i < dots.lenght+1; i++) {
        if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
            currentSlide(i);
        } 
    }
});

