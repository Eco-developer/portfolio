import { 
  About, 
  Footer, 
  Header, 
  Skills, 
  Work,
  Experience,
} from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => (
  <div className="app">
    <Navbar />
    <Header />
    <About />
    <Experience />
    <Skills />
    <Work />
    <Footer />
  </div>
);

export default App;
