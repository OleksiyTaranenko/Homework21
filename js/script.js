let ship = document.getElementById('ship');
let seaZone = document.getElementById('wrapper');


function allowDrop(event) {
    event.preventDefault();
};

seaZone.ondragover = allowDrop;


ship.ondragstart = function() {
    return false;
};


ship.onmousedown = function(event) {    

    let shiftX = event.clientX - ship.getBoundingClientRect().left;
    let shiftY = event.clientY - ship.getBoundingClientRect().top;
    
  
    moveAt(event.pageX, event.pageY);  

    function moveAt(pageX, pageY) {
      ship.style.left = pageX - shiftX + 'px';
      ship.style.top = pageY - shiftY + 'px';
    }

  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }  
    
    document.addEventListener('mousemove', onMouseMove);
  
    
    ship.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      ship.onmouseup = null;
    };  
};