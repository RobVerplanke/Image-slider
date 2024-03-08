const navArrowLeft = document.querySelector('#nav-arrow-left');
const navArrowRight = document.querySelector('#nav-arrow-right');

const image1 = document.querySelector('#nav-img-1');
const image2 = document.querySelector('#nav-img-2');
const image3 = document.querySelector('#nav-img-3');
const image4 = document.querySelector('#nav-img-4');
const image5 = document.querySelector('#nav-img-5');
const image6 = document.querySelector('#nav-img-6');

const styleSheet = document.styleSheets[0];
const ruleIndex = Array.from(styleSheet.cssRules).findIndex(rule => rule.selectorText === '#slide-holder');
const cssRule = styleSheet.cssRules[ruleIndex];

let transformValue = 0;


// Add event listeners to navigation arrows

// move slide holder to right
navArrowLeft.addEventListener('click', () => {
    if (transformValue != 0){
        transformValue += 100;
        cssRule.style.transform = 'translate(' + transformValue + 'px)';
    }
});

// move slide holder to left
navArrowRight.addEventListener('click', () => {
    if (transformValue != -500){
        transformValue -= 100;
        cssRule.style.transform = 'translate(' + transformValue + 'px)';
    }
});


// Use navigation dots to move slide holder to corresponding slide

image1.addEventListener('click', () => {
    cssRule.style.transform = 'translate(0px)';
});

image2.addEventListener('click', () => {
    cssRule.style.transform = 'translate(-100px)';
});

image3.addEventListener('click', () => {
    cssRule.style.transform = 'translate(-200px)';
});

image4.addEventListener('click', () => {
    cssRule.style.transform = 'translate(-300px)';
});

image5.addEventListener('click', () => {
    cssRule.style.transform = 'translate(-400px)';
});

image6.addEventListener('click', () => {
    cssRule.style.transform = 'translate(-500px)';
});


// Auto scroll after 5 seconds