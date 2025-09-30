(function (){

  document.addEventListener('DOMContentLoaded', () => {
    const iconElement = document.getElementById('icon');
    const mobileNav = document.getElementById('mobile-nav');
    iconElement.addEventListener('click', ()=> {
      iconElement.classList.toggle('playing-animation');
      mobileNav.classList.toggle('open-mobile-nav');
    })
    
  });
})();

