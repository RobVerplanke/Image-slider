const navArrowLeft = document.querySelector('#nav-arrow-left');
const navArrowRight = document.querySelector('#nav-arrow-right');

const styleSheet = document.styleSheets[0];
const ruleIndex = Array.from(styleSheet.cssRules).findIndex(rule => rule.selectorText === '#slide-holder');
const cssRule = styleSheet.cssRules[ruleIndex];

const navDots = document.querySelectorAll('.nav-dot');

let intervalId;
let translateValue = 0;
const interval = 5000; // ms


// Start auto scroll
intervalId = setInterval(autoSlide, interval);


// Add event listeners to navigation

// move slide holder to right
navArrowLeft.addEventListener('click', () => {
    if (translateValue === 0) translateValue = -600;
    if (translateValue != 0) {
        moveSlide(+100);
        clearInterval(intervalId);  // Reset timer
        intervalId = setInterval(autoSlide, interval); // Start over autoscroll
    }
});

// move slide holder to left
navArrowRight.addEventListener('click', () => {
    if (translateValue === -500) translateValue = 100;
    if (translateValue != -500) {
        moveSlide(-100);
        clearInterval(intervalId);
        intervalId = setInterval(autoSlide, interval);
    }
});


// Use navigation dots to move slide holder to corresponding slide
navDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        const currentPos = index * -100;
        resetDots(); // Unfill all dots
        fillDot(dot); // Fill selected dot
        cssRule.style.transform = 'translate(' + currentPos + 'px)'; // Update translate value
        translateValue = currentPos; // Update slide holder position
        clearInterval(intervalId);
        intervalId = setInterval(autoSlide, interval);
    });
});


// Move slide holder to left/right (+ or - 100px)
function moveSlide(step){
    translateValue += step;

    // Set position boundries
    if (translateValue <= -600 || translateValue >= 0) translateValue = 0;
    
    // Update translate value
    cssRule.style.transform = 'translate(' + translateValue + 'px)';
    
    // Update navigation dots
    resetDots();
    navDots[translateValue / -100].innerHTML = '&#x2022;';
}

// Fill/unfill navigation dots

function fillDot(dot){
    dot.innerHTML = '&#x2022;';
}

function resetDots(){
    navDots.forEach((dot) => {
        dot.innerHTML = '&#x26AC;';
    })
}

// Auto scroll every 5 seconds

function autoSlide() {
    moveSlide(-100);
}
