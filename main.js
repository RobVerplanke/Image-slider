const navArrowLeft = document.querySelector('#nav-arrow-left');
const navArrowRight = document.querySelector('#nav-arrow-right');

const styleSheet = document.styleSheets[0];
const ruleIndex = Array.from(styleSheet.cssRules).findIndex(rule => rule.selectorText === '#slide-holder');
const cssRule = styleSheet.cssRules[ruleIndex];

const navDots = document.querySelectorAll('.nav-dot');

let transformValue = 0;


// Add event listeners to navigation arrows

// move slide holder to right
navArrowLeft.addEventListener('click', () => {
    if (transformValue != 0){
        transformValue += 100;
        cssRule.style.transform = 'translate(' + transformValue + 'px)';
        resetDots();
        navDots[transformValue / -100].innerHTML = '&#x2022;';
    }
});

// move slide holder to left
navArrowRight.addEventListener('click', () => {
    if (transformValue != -500){
        transformValue -= 100;
        cssRule.style.transform = 'translate(' + transformValue + 'px)';
        resetDots();
        navDots[transformValue / -100].innerHTML = '&#x2022;';
    }
});


// Use navigation dots to move slide holder to corresponding slide

navDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        const translateValue = index * -100;
        resetDots();
        cssRule.style.transform = 'translate(' + translateValue + 'px)';
        transformValue = translateValue;
        fillDot(dot);
    })
})


// Fill dot after selection

function fillDot(dot){
    dot.innerHTML = '&#x2022;';
}

function resetDots(){
    navDots.forEach((dot) => {
        dot.innerHTML = '&#x26AC;';
    })
}

// Auto scroll after 5 seconds