import { Navbar, Footer } from './components';
import {
  Header, About, Contact, Skills, Work
} from './pages';

import './App.scss';

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Contact />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
}
