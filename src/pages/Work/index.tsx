/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../hocs';
import { urlFor, client } from '../../client';
import { IWork, IAnimateCard } from '../../interfaces';

import './work.scss';

const worksItems = ['UI/UX', 'Web App', 'Mobile App', 'React JS', 'All'];

function Work() {
  const [works, setWorks] = useState<IWork[]>([]);
  const [filterWork, setFilterWork] = useState<IWork[]>([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState<IAnimateCard>({ y: 0, opacity: 1 });

  useEffect(() => {
    const query = '*[_type == "works"]';

    const fetchData = async () => {
      const data = await client.fetch(query);

      setWorks(data);
      setFilterWork(data);
    };

    fetchData();
  }, []);

  const handleWorkFilter = (item: string) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 });

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 });

      if (item === 'All') {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter(({ tags }) => tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <h2 className="head-text">
        My Creative
        {' '}
        <span>Portfolio</span>
        {' '}
        Section
      </h2>

      <div className="app__work-filter">
        {worksItems.map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={() => handleWorkFilter(item)}
            onKeyPress={() => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item && 'item-active'}`}
            style={{ border: 'none' }}
          >
            {item}
          </button>
        ))}
      </div>

      <motion.div
        animate={animateCard}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__work-portfolio"
      >
        {filterWork.map(({
          name, title, description, tags, codeLink, imgUrl, projectLink
        }, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div
              className="app__work-img app__flex"
            >
              <img src={`${urlFor(imgUrl)}`} alt={name} />

              <motion.div
                whileHover={{ opacity: [0, 1] }}
                transition={{ duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5 }}
                className="app__work-hover app__flex"
              >
                <a href={projectLink} target="_blank" rel="noreferrer">

                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{ scale: [0, 1] }}
                    whileHover={{ scale: [1, 0.90] }}
                    transition={{ duration: 0.25 }}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>

            <div className="app__work-content app__flex">
              <h4 className="bold-text">{title}</h4>
              <p className="p-text" style={{ marginTop: 10 }}>{description}</p>

              <div className="app__work-tag app__flex">
                <p className="p-text">{tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'work',
  'Work Section',
  'app__primarybg'
);
