(function (){

  const ANIMATION_NAMES_ARR = ['rotate-right', 'fade', 'rotate-left'];

  function toggleNavIcon (iconElement){
    iconElement.addEventListener('click', ()=>{
      const children = iconElement.children;
      for(let i=0; i< children.length ; i++) {
        const isNone = getComputedStyle(children[i]).animationName === 'none';
        children[i].style.animationName = (isNone) ? ANIMATION_NAMES_ARR[i]: 'none';
      };
    });
  }
  document.addEventListener('DOMContentLoaded', () => {
    toggleNavIcon(document.getElementById('icon'));
    
  });
})();

