import Typewriter from 'typewriter-effect';
import { ImArrowDown2 } from 'react-icons/im';
import './Headline.css'

const Headline = () => {
  return ( 
    <section className="hero-section">
      <h2 className="hello">Hello, I&apos;m</h2>
      <h1><strong>Okemdi Udeh</strong></h1>
      <h2 id="soft">I am a <Typewriter options={{
            strings: ['Software Engineer.', 'Student.', 'Traveler.', 'Remote Professional.', 'Micronaut.', 'Full-stack Developer.'],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>
      <a href="#about"><i><ImArrowDown2 className="inline text-xl mt-10 animate-bounce" /></i></a>
    </section>
  );
}
 
export default Headline;