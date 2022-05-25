import { useEffect } from 'react';

import { fireGsap } from '../../utility';
import logo from '../../assets/gio.svg';

import './loading.scss';

export default function Loading() {
  useEffect(() => {
    fireGsap();
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-screen__container">
        <img
          className="container__logo"
          src={logo}
          alt="logo"
        />

        <div className="container__divider" />

        <div className="container__mask" />

        <div className="container__intro">
          Front-end
          {' '}
          <span>Developer</span>
          <br />
          <span>Gio&apos;s</span>
          {' '}
          Portfolio
        </div>
      </div>
    </div>
  );
}
