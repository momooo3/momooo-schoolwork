let enterEventCount = 0;
let leaveEventCount = 0;
const ren = document.getElementById('ren');
const qizi = document.getElementById('qizi');

qizi.addEventListener('mouseenter', (e) => {
    ren.style.left = '960px';
    enterEventCount++;
    
  });
  
  qizi.addEventListener('mouseleave', (e) => {
      ren.style.left = '-140px';
    leaveEventCount++;
    
  });