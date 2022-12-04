export const scrollFunction = () => {
  const header = document.querySelector('header');
  const nav = document.querySelector('nav');

  const hover = (e) => {
    if (e.target.style.color !== '#008cba') {
      e.target.style.color = '#008cba';
    }
  };

  const hoverOut = (e) => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      e.target.style.color = '#000';
    } else {
      e.target.style.color = '#fff';
    }
  };

  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    header.style.backgroundColor = 'rgb(255, 255, 255, 0.95)';
    header.style.height = '60px';
    header.style.boxShadow = '0 4px 8px 0 rgba(80,113,105,0.2)';
    nav.style.marginTop = '10px';
    const elem = document.getElementsByClassName('nav-link');
    for (let i = 0; i < elem.length; i += 1) {
      elem[i].style.color = '#000';
      elem[i].style.fontWeight = 'normal';
      elem[i].onmouseover = hover;
      elem[i].onmouseout = hoverOut;
    }
  } else {
    header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    header.style.height = '80px';
    header.style.boxShadow = '';
    nav.style.marginTop = '35px';
    const elem = document.getElementsByClassName('nav-link');
    for (let i = 0; i < elem.length; i += 1) {
      elem[i].style.color = '#fff';
    }
  }
};

// Highligh visible section of webpage on window scroll
export const highlightLink = () => {
  const sections = document.querySelectorAll('section');
  const navLi = document.getElementsByClassName('nav-link');
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (window.scrollY >= sectionTop - 200) {
      current = section.getAttribute('id');
    }
  });

  for (let i = 0; i < navLi.length; i += 1) {
    navLi[i].classList.remove('active');
    if (navLi[i].classList.contains(current)) {
      navLi[i].classList.add('active');
    }
  }
};