(function (){

  document.addEventListener('DOMContentLoaded', () => {
    const iconElement = document.getElementById('icon');
    iconElement.addEventListener('click', ()=> {
      iconElement.classList.toggle('playing-animation');
    })
    
  });
})();

