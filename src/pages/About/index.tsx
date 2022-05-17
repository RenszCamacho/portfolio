/* eslint-disable react/no-array-index-key */
import { motion } from 'framer-motion';

import { about } from '../../constants';
import './about.scss';

export default function About() {
  return (
    <>
      <h2 className="head-text">
        I know that
        {' '}
        <span>Good Product</span>
        <br />
        means
        {' '}
        <span>Good Bussiness</span>
      </h2>
      <div id="about" className="app__profile">
        {about.map(({ title, description, imgUrl }, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={`#${title}-${index}`}
          >
            <img src={imgUrl} alt={title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
