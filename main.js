console.log("My JS file is loading successfully!");

let enterEventCount = 0;
let leaveEventCount = 0;
const body = document.getElementById('body');
const hercake = document.getElementById('hercake');
const day = document.getElementById('day');
const whenan = document.getElementById('whenan');
const intro1 = document.getElementById('intro1');
const intro2 = document.getElementById('intro2');
const intro3 = document.getElementById('intro3');
const ren = document.getElementById('ren');

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

  hercake.addEventListener('mouseenter', (e) => {
    intro1.style.display = 'block';
    enterEventCount++;
    
  });
  
  hercake.addEventListener('mouseleave', (e) => {
      intro1.style.display = 'none';
    leaveEventCount++;
    
  });

  day.addEventListener('mouseenter', (e) => {
    intro2.style.display = 'block';
    enterEventCount++;
    
  });
  
  day.addEventListener('mouseleave', (e) => {
      intro2.style.display = 'none';
    leaveEventCount++;
    
  });

  whenan.addEventListener('mouseenter', (e) => {
    intro3.style.display = 'block';
    enterEventCount++;
    
  });
  
  whenan.addEventListener('mouseleave', (e) => {
      intro3.style.display = 'none';
    leaveEventCount++;
    
  });

  whenan.addEventListener('mouseenter', (e) => {
    ren.style.left = '660px';
    enterEventCount++;
    
  });
  
  whenan.addEventListener('mouseleave', (e) => {
    ren.style.left = '-300px';
    leaveEventCount++;
    
  });

  day.addEventListener('mouseenter', (e) => {
    ren.style.left = '420px';
    enterEventCount++;
    
  });
  
  day.addEventListener('mouseleave', (e) => {
      ren.style.left = '-300px';
    leaveEventCount++;
    
  });
  
  hercake.addEventListener('mouseenter', (e) => {
    ren.style.left = '70px';
    enterEventCount++;
    
  });
  
  hercake.addEventListener('mouseleave', (e) => {
      ren.style.left = '-300px';
    leaveEventCount++;
    
  });
