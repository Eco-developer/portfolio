import emailjs from '@emailjs/browser';
import { 
  ChangeEvent, 
  SyntheticEvent, 
  useRef, 
  useState 
} from 'react';
import { 
  AppWrap, 
  MotionWrap 
} from '../../wrapper';
import { 
  images, 
  credentials
} from '../../constants';

import './Footer.scss';

const Footer = () => {
  const [formData, setFormData] = useState({ from_name: '', user_email: '', message: '' });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const handleChangeInput = (e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  
  const handleSubmit = (e:SyntheticEvent) => {
    e.preventDefault();
    setLoading(true);
    emailjs.sendForm(credentials.serviceId, credentials.templateId, form.current || '', credentials.publicKey)
      .then((result) => {
        setLoading(false);
        setIsFormSubmitted(true);
      }, (error) => {
        setLoading(false);
        setIsFormSubmitted(true);
      });
  };

  return (
    <>
      <h2 className="head-text">Want to talk business?</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card ">
          <img src={images.email} alt="email" />
          <a href="mailto:josesk8mqc@gmail.com" className="p-text">josesk8mqc@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="phone" />
          <a href="tel:+584122120037" className="p-text">+58 4122120037</a>
        </div>
      </div>
      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <form ref={form} onSubmit={handleSubmit}>
            <div className="app__flex">
              <input className="p-text" type="text" placeholder="Your Name" name="from_name" value={formData.from_name} onChange={handleChangeInput} />
            </div>
            <div className="app__flex">
              <input className="p-text" type="email" placeholder="Your Email" name="user_email" value={formData.user_email} onChange={handleChangeInput} />
            </div>
            <div>
              <textarea
                className="p-text textarea"
                placeholder="Your Message"
                value={formData.message}
                name="message"
                onChange={handleChangeInput}
              />
            </div>
            <button type="button" className="p-text" onClick={handleSubmit}>{!loading ? 'Send Message' : 'Sending...'}</button>
          </form>
        </div>
      ) : (
        <div>
          <h3 className="head-text">
            Thank you for getting in touch!
          </h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg',
);
