// Your code goes here

let dragged = null;

// click event, #1
let navEl = document.querySelector('.nav-container');
navEl.addEventListener('click', (e) => {
    console.log('clicked Nav');
      if (navEl.style.backgroundColor == 'dodgerblue') {
        navEl.style.backgroundColor = 'coral';
        
     } else {
        navEl.style.backgroundColor = 'dodgerblue';
        
     };
     e.stopPropagation(); // stops nav clicks from reaching body
     e.preventDefault() ; // because ??
    });

let anchors = document.querySelectorAll('.btn');
anchors.forEach ((el,index) => {
    el.addEventListener('click', (e) => {
        e.stopPropagation();
    });
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

firstH2 = document.querySelector('h2');
firstH2.addEventListener('dblclick', () => {
   if (firstH2.style.color != 'yellow') {
    firstH2.style.fontWeight = 'bold';

    firstH2.textContent = 'Welcome to the Fun Bus!'
    firstH2.style.textShadow = '0px 2px 4px black';
    firstH2.style.color = 'yellow';
    firstH2.style.transition = "color 0.5s"
   } else {
    firstH2.style.color = 'black';
    firstH2.textContent = 'Or is it the short bus?';         
   }
})

// resize event, #7

bodyEle=document.querySelector('body');
window.addEventListener('resize', () => {
    bodyEle.style.backgroundColor = 'lightyellow';
});

//bodyEle has click event (for stop prop, see header above)
bodyEle.addEventListener('click', () => {
    bodyEle.style.backgroundColor = 'white';
    console.log('clicked body');
})

//scroll event, #8
picsEl = document.querySelectorAll('img');
console.log(picsEl);
window.addEventListener('scroll', () => {
    if (bodyEle.style.backgroundColor != 'pink') {
        bodyEle.style.backgroundColor = 'pink'
    };

});

//drag and drop events #9 and 10

document.addEventListener("dragstart", (event) => {
    // store a ref. on the dragged elem
    dragged = event.target;
    console.log ('dragged this', dragged);
  }, false);

let dropZone = document.querySelector('.drop-zone');

dropZone.addEventListener("dragover", (event) => {
    event.preventDefault();
});


dropZone.addEventListener("drop", (event) => {
    const target = event.target;
    if ( target) {
        console.log('target acquired');
                event.preventDefault();
         // Get the id of the target and add the moved element to the target's DOM
         dragged.parentNode.removeChild(dragged);
        //  target.removeChild(target.childNodes[0]);
         target.insertBefore(dragged, target.childNodes[0]);
       
  }
});