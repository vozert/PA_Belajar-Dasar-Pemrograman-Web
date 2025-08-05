document.addEventListener('DOMContentLoaded', () => {
  const burgerMenu = document.querySelector('.burger-menu');
  const mobileMenu = document.querySelector('.mobile-menu');

  burgerMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    burgerMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    const isClickInside = burgerMenu.contains(e.target) || mobileMenu.contains(e.target);
    
    if (!isClickInside && mobileMenu.classList.contains('active')) {
      burgerMenu.classList.remove('active');
      mobileMenu.classList.remove('active');
    }
  });

  mobileMenu.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  const dropdownToggle = document.querySelector('.dropdown-toggle');
  const dropdownMenu = document.querySelector('.dropdown-menu');

  dropdownToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    dropdownToggle.classList.toggle('active');
    dropdownMenu.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!dropdownToggle.contains(e.target)) {
      dropdownToggle.classList.remove('active');
      dropdownMenu.classList.remove('active');
    }
  });

  dropdownMenu.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      dropdownToggle.textContent = e.target.textContent;
      dropdownToggle.appendChild(document.createElement('span'))
        .className = 'arrow';
      dropdownToggle.querySelector('.arrow').textContent = '▼';
      dropdownMenu.classList.remove('active');
      dropdownToggle.classList.remove('active');
    }
  });
});
