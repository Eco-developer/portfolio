import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { 
  motion,
  AnimatePresence
} from 'framer-motion';

import { images } from '../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'work', 'skills', 'contact'].map((item: string) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <span>
          <HiMenuAlt4 onClick={() => setToggle(true)} />
        </span>
        <AnimatePresence>
          {toggle && (
            <motion.div
              whileInView={{ x: ["100%", "0%"] }}
              exit={{ x: [ "0%", "100%"]}}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/bgWhite.png)`}}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['home', 'about', 'skills', 'work', 'contact'].map((item: string) => (
                  <li key={item}>
                    <a href={`#${item}`} onClick={() => setToggle(false)}>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
