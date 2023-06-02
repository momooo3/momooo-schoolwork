console.log("My JS file is loading successfully!");

let enterEventCount = 0;
let leaveEventCount = 0;
const body = document.getElementById('body');
const img18 = document.getElementById('img18');
const img19 = document.getElementById('img19');
const img110 = document.getElementById('img110');


img18.addEventListener('mouseenter', (e) => {
  body.style.background = 'rgb(0, 200, 255)';
  enterEventCount++;
  
});

img18.addEventListener('mouseleave', (e) => {
    body.style.background = 'white';
  leaveEventCount++;
  
});

img19.addEventListener('mouseenter', (e) => {
    body.style.background = 'rgb(37, 224, 20)';
    enterEventCount++;
    
  });
  
  img19.addEventListener('mouseleave', (e) => {
      body.style.background = 'white';
    leaveEventCount++;
    
  });

  img110.addEventListener('mouseenter', (e) => {
    body.style.background = 'rgb(235, 235, 11)';
    enterEventCount++;
    
  });
  
  img110.addEventListener('mouseleave', (e) => {
      body.style.background = 'white';
    leaveEventCount++;
    
  });

