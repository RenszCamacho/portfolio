import { ComponentType } from 'react';
import { NavigationDots, SocialMedia } from '../../components';

const AppWrap = (
  Component: ComponentType,
  idName: string,
  heading: string,
  classNames?: string
) => function HOC() {
  return (
    <section id={idName} className={`app__container ${classNames}`}>
      <h2 className="sr-only">{heading}</h2>

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
    </section>
  );
};

export default AppWrap;
