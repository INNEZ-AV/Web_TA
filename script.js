    // Dropdown Hover khusus desktop
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
    dropdownItems.forEach((dropdown) => {
      dropdown.addEventListener('mouseenter', () => {
        if (window.innerWidth > 991) {
          dropdown.classList.add('show');
          dropdown.querySelector('.dropdown-toggle')?.setAttribute('aria-expanded', 'true');
          dropdown.querySelector('.dropdown-menu')?.classList.add('show');
        }
      });
      dropdown.addEventListener('mouseleave', () => {
        if (window.innerWidth > 991) {
          dropdown.classList.remove('show');
          dropdown.querySelector('.dropdown-toggle')?.setAttribute('aria-expanded', 'false');
          dropdown.querySelector('.dropdown-menu')?.classList.remove('show');
        }
      });
    });  

  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = counter.getAttribute('data-target');
      const isLetter = isNaN(target);
      if (isLetter) {
        counter.innerText = target;
        return;
      }
      const count = +counter.innerText;
      const increment = +target / 100;
      if (count < +target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
