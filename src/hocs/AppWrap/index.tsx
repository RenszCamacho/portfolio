/* eslint-disable no-undef */
import { ComponentType } from 'react';
import { NavigationDots, SocialMedia } from '../../components';

const AppWrap = (
  Component: ComponentType,
  idName: string,
  classNames: string
) => function HOC() {
  return (
    <div id={idName} className={`app__container ${classNames}`}>
      <SocialMedia />
      <div className="app__wrapper app__flex">
        <Component />

        <div className="copyright">
          <p className="p-text">
            @
            {new Date().getFullYear()}
            {' '}
            Gio
          </p>
          <p className="p-text">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;