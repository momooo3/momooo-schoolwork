console.log("My JS file is loading successfully!");

let enterEventCount = 0;
let leaveEventCount = 0;
const body = document.getElementById('body');
const hercake = document.getElementById('hercake');
const day = document.getElementById('day');
const whenan = document.getElementById('whenan');


hercake.addEventListener('mouseenter', (e) => {
  body.style.background = 'rgb(0, 200, 255)';
  enterEventCount++;
  
});

hercake.addEventListener('mouseleave', (e) => {
    body.style.background = 'white';
  leaveEventCount++;
  
});

day.addEventListener('mouseenter', (e) => {
    body.style.background = 'rgb(37, 224, 20)';
    enterEventCount++;
    
  });
  
  day.addEventListener('mouseleave', (e) => {
      body.style.background = 'white';
    leaveEventCount++;
    
  });

  whenan.addEventListener('mouseenter', (e) => {
    body.style.background = 'rgb(244, 244, 20)';
    enterEventCount++;
    
  });
  
  whenan.addEventListener('mouseleave', (e) => {
      body.style.background = 'white';
    leaveEventCount++;
    
  });

