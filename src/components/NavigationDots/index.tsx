/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/control-has-associated-label */

import { routes } from '../../constants';

type IProps = {
    active: string;
}

export default function NavigationDots({ active }: IProps) {
  return (
    <div className="app__navigation">
      {routes.map((item) => (
        <a
          key={item}
          href={`#${item}`}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: '#313BAC' } : {}}
        />
      ))}
    </div>
  );
}
