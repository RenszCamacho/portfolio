/* eslint-disable react/no-array-index-key */
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { client, urlFor } from '../../client';

import './about.scss';

export default function About() {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    const fetchData = async () => {
      const data = await client.fetch(query);
      setAbouts(data);
    };

    fetchData();
  }, []);

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
        {abouts.map(({ title, description, imgUrl }, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={`#${title}-${index}`}
          >
            <img src={urlFor(imgUrl)} alt="aoe" />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{description}</p>
          </motion.div>
        ))}
      </div>
    </>
  );
}
