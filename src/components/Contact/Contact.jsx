import { useDisclosure } from '@mantine/hooks';
import { Modal } from '@mantine/core';
import { MdMarkEmailRead } from 'react-icons/md';
import { BsPhoneFill, BsFillSendCheckFill } from 'react-icons/bs';
import { BiCurrentLocation } from 'react-icons/bi';
import './Contact.css';
import { Fade, Reveal } from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";

const Contact = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    event.target.reset();
    open()
    const formData = new FormData(event.target);

    formData.append("access_key", "90b41dfc-a287-4508-918f-2a62d6f88b2d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  const animateLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-10%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

  const animateRight = keyframes`
    from {
      opacity: 0;
      transform: translate3d(10%, 0, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  `;

  return ( 
    <>
      <section className="contact-section" id="contact">
        <Fade direction='up' duration={1300} delay={200} triggerOnce>
          <h2 id="get">Get <strong className="font-bold">In Touch</strong></h2>
        </Fade>
        <div className="contact-form">
          <Reveal keyframes={animateLeft} duration={1500} delay={500} triggerOnce>
            <form id="cont" onSubmit={onSubmit}>
              <h3>Get In Touch</h3>
              <label htmlFor="name"></label>
              <input type="text" id="first" name="name" placeholder="Your name...." required />
              <label htmlFor="email"></label>
              <input type="email" id="email" name="email" placeholder="Your email...." required />
              <label htmlFor="ques"></label>
              <input type="textarea" id="message" name="message" placeholder="Write a message...." required />
              <button type="submit">Send Message</button>
            </form>
          </Reveal>
          <div>
            <Reveal keyframes={animateRight} duration={1000} triggerOnce>
              <h3 id="det" className="detail">My Contact Details</h3>
            </Reveal>
            <Reveal keyframes={animateRight} cascade triggerOnce>
              <div id="det1" className="detail">
                <h4 className="font-bold"><i><MdMarkEmailRead className="inline mr-1 text-sm" /></i>Email</h4>
                <p>ukemdi@gmail.com</p>
              </div>
              <div id="det2" className="detail">
                <h4 className="font-bold"><i><BsPhoneFill className="inline mr-1 text-sm" /></i>Phone</h4>
                <p>+234 902 911 9162</p>
              </div>
              <div id="det3" className="detail">
                <h4 className="font-bold"><i><BiCurrentLocation className="inline mr-1 text-sm" /></i>Location</h4>
                <p>Lagos, Nigeria</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <Modal opened={opened} onClose={close} centered>
        <div className='text-center px-5 py-6'>
          <BsFillSendCheckFill className='inline text-8xl text-[#87d185] mb-5' />
          <h2 className='font-[800] text-[#262c5f] text-xl mb-2'>Thank you!</h2>
          <p className='text-sm'>Your email has been well received. Please expect a response within 5 working days. In the meantime, please take a look at my featured projects and if you like what you see, connect with me on the social links below </p>
        </div>
      </Modal>
    </>
  );
}
 
export default Contact;