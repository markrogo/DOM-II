// Your code goes here

// click event, #1
let navEl = document.querySelector('.main-navigation');
navEl.addEventListener('click', () => {
  
        navEl.style.backgroundColor = 'dodgerblue';
    });

// mouseenter event, mouseleave event, #2-3
let busEl = document.querySelector('img');
busEl.addEventListener ('mouseenter', () => {
    busEl.style.transform = "scale(1.5)";
    busEl.style.transition = "transform 0.5s";

})

busEl.addEventListener ('mouseleave', () => {
    busEl.style.transform = "scale(1.0)";
    busEl.style.transition = "transform 0.2s";

})

// mousedown event, mouseup event #4-5
let footEl = document.querySelector('.footer');
footEl.addEventListener('mousedown', () => {
    footEl.style.backgroundColor = 'green';
}) ;

footEl.addEventListener('mouseup', () => {
    footEl.style.backgroundColor = 'pink';
}) ;

// dblclick event, #6

anchors = document.querySelector('h2');


anchors.addEventListener('dblclick', () => {
    anchors.style.fontWeight = 'bold';
    anchors.style.textShadow = '0px 2px 4px black';
    anchors.style.color = 'yellow';
})