/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../hocs';
import { urlFor, client } from '../../client';
import { ISkill } from '../../interfaces';

import './skills.scss';

function Skills() {
  const [skills, setSkills] = useState<ISkill[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const query = '*[_type == "experiences"]';
      const skillsQuery = '*[_type == "skills"]';

      const skillsData = await client.fetch(skillsQuery);

      setSkills(skillsData);
    };

    fetchData();
  }, []);

  return (
    <>
      <h2 className="head-text">Skills</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map(({ name, icon, bgColor }, index) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={`#${name}-${index}`}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: bgColor }}
              >
                <img src={`${urlFor(icon)}`} alt={name} />
              </div>
              <p className="p-text">{name}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </>
  );
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'skills',
  'Skills Section',
  'app__whitebg'
);
