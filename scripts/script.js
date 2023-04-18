const menuItems = document.querySelectorAll('.header__select > li');

menuItems.forEach(item => {
  const submenu = item.querySelector('.submenu');
  const flecha = item.querySelector('.flecha');
  item.addEventListener('mouseenter', () => {
    submenu.style.display = 'block';
    
    flecha.style.backgroundImage = "url('../assets/images/icon-arrow-up.svg')";
  });

  item.addEventListener('mouseleave', () => {
    submenu.style.display = 'none';
    flecha.style.backgroundImage = "url('../assets/images/icon-arrow-down.svg')";
  });

  
});
