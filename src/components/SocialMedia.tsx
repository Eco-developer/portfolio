import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div>
      <a href='' target="_blank" rel="noreferrer">
        <BsGithub/>
      </a>
    </div>
    <div>
      <a href='' target="_blank" rel="noreferrer">
        <BsLinkedin/>
      </a>
    </div>
  </div>
);

export default SocialMedia;
