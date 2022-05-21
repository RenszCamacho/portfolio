/* eslint-disable react/no-array-index-key */
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

import './socialMedia.scss';

const socialIcons = [
  BsTwitter, BsInstagram, FaFacebook
];

export default function SocialMedia() {
  return (
    <div className="app__social">
      {socialIcons.map((Icon, index) => (
        <button type="button" key={index} className="app__social-button">
          <Icon />
        </button>
      ))}
    </div>
  );
}
