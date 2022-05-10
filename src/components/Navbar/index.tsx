import images from '../../constants';
import './navbar.scss';

const route = [
  'home', 'about', 'work', 'skills', 'contact'
];

export default function Navbar() {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.gio} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        { route.map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div>
              <a href={`#${item}`}>{item}</a>
            </div>
          </li>
        )) }
      </ul>
    </nav>
  );
}
