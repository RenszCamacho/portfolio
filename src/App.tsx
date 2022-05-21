import { Navbar } from './components';
import {
  Header, About, Contact, Skills, Work
} from './pages';

import './App.scss';

export default function App() {
  return (
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
  );
}
