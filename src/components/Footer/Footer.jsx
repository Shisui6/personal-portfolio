import { BsTwitter, BsLinkedin, BsGithub } from 'react-icons/bs';
import './Footer.css';
import { Fade, Reveal } from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";

const Footer = () => {
  const animateBottom = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, 20%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

  return ( 
    <footer className="footer">
      <Fade duration={2000} triggerOnce>
      <p id="copyright">Copyright &copy; 2022 All rights reserved | A project by Okemdi Udeh</p>
      </Fade>
      <Reveal keyframes={animateBottom} duration={1300} cascade triggerOnce>
      <ul>
        <li className="tou" id="tou1"><a href="https://twitter.com/ukemdi007"><i className="foot-link"><BsTwitter className="text-2xl" /></i></a></li>
        <li className="tou" id="tou2"><a href="https://www.linkedin.com/in/okemdi-udeh/"><i className="foot-link"><BsLinkedin className="text-2xl" /></i></a></li>
        <li className="tou" id="tou3"><a href="https://github.com/Shisui6"><i className="foot-link"><BsGithub className="text-2xl" /></i></a></li>
      </ul>
      </Reveal>
    </footer>
  );
}
 
export default Footer;