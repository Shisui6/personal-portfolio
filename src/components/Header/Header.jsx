import { useEffect } from 'react';
import './Header.css'

const Header = () => {

  useEffect(() => {
    window.onscroll = () => {
      scrollFunction();
      highlightLink();
    };
  }, []);

  const scrollFunction = () => {
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

    const isScrolled = document.body.scrollTop > 100 || document.documentElement.scrollTop > 100;
  
    header.style.backgroundColor = isScrolled ? 'rgb(255, 255, 255, 0.95)' : 'rgba(0, 0, 0, 0)';
    header.style.height = isScrolled ? '60px' : '80px';
    header.style.boxShadow = isScrolled ? '0 4px 8px 0 rgba(80,113,105,0.2)' : '';
    nav.style.marginTop = isScrolled ? '10px' : '35px';
  
    const elem = document.getElementsByClassName('nav-link');
    for (let i = 0; i < elem.length; i += 1) {
      elem[i].style.color = isScrolled ? '#000' : '#fff';
      elem[i].style.fontWeight = isScrolled ? 'normal' : '';
      elem[i].onmouseover = hover;
      elem[i].onmouseout = hoverOut;
    }
  };

  const highlightLink = () => {
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

  return ( 
    <header>
    <nav>
      <ul>
        <li><a href="/#" className="nav-link">Home</a></li>
        <li><a href="/#about" className="nav-link about">About</a></li>
        <li><a href="/#portfolio" className="nav-link portfolio">Projects</a></li>
        <li><a href="/#contact" className="nav-link contact">Contact</a></li>
      </ul>
    </nav>
  </header>
  );
}
 
export default Header;