import { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { images, routes } from '../../constants';
import './navbar.scss';

export default function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle((event) => !event);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gio} alt="logo" />
      </div>

      <ul className="app__navbar-links">
        { routes.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        )) }
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={handleClick} />

        { toggle && (
          <motion.div
            whileInView={{ x: [280, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={handleClick} />

            <ul>
              { routes.map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={handleClick}
                  >
                    {item}
                  </a>
                </li>
              )) }
            </ul>
          </motion.div>
        ) }

      </div>
    </nav>
  );
}
