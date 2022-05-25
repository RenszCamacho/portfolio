import { Loading, Navbar } from './components';
import {
  Header, About, Contact, Skills, Work
} from './pages';

import './App.scss';

export default function App() {
  return (
    <>
      { window.innerWidth >= 768 && <Loading /> }

      <div className="app">
        <Navbar />
        <main>
          <Header />
          <About />
          <Work />
          <Skills />
          <Contact />
        </main>
      </div>
    </>
  );
}
