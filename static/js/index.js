let i;
function dragElement(el){

  document.querySelectorAll(el).forEach((element) =>{
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    element.onmousedown = dragMouseDown;

  function dragElements(e) {
    pos1 = pos3 - e.clientX;  pos2 = pos4 - e.clientY;
    pos3 = e.clientX; pos4 = e.clientY;
    element.style.top = (element.offsetTop - pos2) + "px";
    element.style.left = (element.offsetLeft - pos1) + "px";
  }
  function cancelDragelements() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
  function dragMouseDown(e) {
    pos3 = e.clientX; pos4 = e.clientY;
    document.onmouseup = cancelDragelements;
    document.onmousemove = dragElements;
  }
  })
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min ;
}

dragElement(".desktopApp");
const apps = ['terminal', 'warning'];
for( i = 0; i < apps.length; i++){
  let j = i; 
  fetch("static/js/local.json").then(response => response.json()).then(data => {
    const apps = ['terminal', 'warning']; 
      document.querySelector('.' + apps[j] + 'Popup').style.display = 'none';
      document.querySelector('.' + apps[j] + 'Desktop').ondblclick = function()
        {
          var element = document.querySelector(`.${apps[j]}Popup`);
          element.style.display = 'block';
          getJSONelement = eval(`data.${apps[j]}`);
          
          //console.log(eval(fin));
          element.style.border = '3px solid #D4D3D2';
          element.style.borderStyle = 'outset';
          element.style.width = (getJSONelement.width) + 'rem'; 
          element.style.height = (getJSONelement.height) + 'rem'; 

          element.style.backgroundColor = getJSONelement.backgroundColor;
          element.style.top = (getRandomArbitrary(window.innerHeight * 0.25, window.innerHeight * 0.75)) + 'px';
          element.style.left = (getRandomArbitrary(window.innerWidth * 0.25, window.innerWidth * 0.75)) + 'px';
          element.innerHTML = 
            `<div 
              style = 'gap : .33rem; padding-left : .33rem; padding : .2rem; height : 1rem; background : linear-gradient(45deg, #7FA9C4, #2D536B)'
              class = 'display-flex-align-items-center'
              >
                <img src = 'assets/${apps[j]}.png' style = 'height : .8rem;'> ${apps[j]}
                <div class = 'w-100 display-flex-align-items-center' style = 'justify-content : right; padding-right : .33rem'>
                  <button class = '${apps[j]}Close' onclick = "document.querySelector('.${apps[j]}Popup').style.display = 'none';"> x </button>
                </div>
            </div>
            ${getJSONelement.content}`;
        };
    }
  );
}