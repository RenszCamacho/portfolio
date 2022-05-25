import gsap from 'gsap';

const fireGsap = () => {
  const tl = gsap.timeline({
    defaults: {
      ease: 'power2.inOut'
    }
  });

  const loadingScreen = () => {
    tl.to(
      '.container__divider',
      { height: '8rem', duration: 1 }
    );

    tl.to(
      '.container__logo',
      { left: '30%', duration: 1 },
      '-=.6'
    );

    tl.to(
      '.container__intro',
      { opacity: '1', left: '55%', duration: 1 },
      '-=1'
    );

    // tl.to(
    //   '.container__logo',
    //   { left: '51%', duration: 1, delay: 1 }
    // );

    // tl.to(
    //   '.container__intro',
    //   { opacity: '0', duration: 1 },
    //   '-=1'
    // );

    // tl.to(
    //   '.container__divider',
    //   { height: '0', duration: 0.5 }
    // );

    // tl.to(
    //   '.loading-screen',
    //   { opacity: '0', duration: 0.5, delay: 0.25 }
    // );

    // tl.to(
    //   '.loading-screen',
    //   { display: 'none' }
    // );

    // tl.to(
    //   '.app',
    //   { overflow: 'visible' }
    // );
  };

  loadingScreen();
};

export default fireGsap;
