import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { client, urlFor } from '../../client';
import { IAbouts } from '../../interfaces/IAbout';

import './about.scss';

export default function About() {
  const [abouts, setAbouts] = useState<IAbouts[]>([]);

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
        {
          abouts && abouts.map(({ title, imgUrl, description }) => (
            <motion.div
              whileInView={{ opacity: 1 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.5, type: 'tween' }}
              className="app__profile-item"
              key={title}
            >
              <img src={`${urlFor(imgUrl!)}`} alt={title} />
              <h2 className="bold-text" style={{ marginTop: 20 }}>{title}</h2>
              <p className="p-text" style={{ marginTop: 10 }}>{description}</p>
            </motion.div>
          ))
        }
      </div>
    </>
  );
}
