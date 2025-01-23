import logo from './logo.svg';
import './App.css';
import Main from './Main';
import SubCards from './SubCards';
import AboutUs from './AboutUs';
import DiscountSection from './DiscountSection';
import Blog from './Blog';

import Footer from './Footer';
import Testimonial from './Testimonial';

function App() {
  return (
    <div className="App">
      <Main/>
      <SubCards/>
      <AboutUs/>
      <DiscountSection/>
      <Blog/>
      {/* here is footer */}
      <Footer/>
    </div>
  );
}

export default App;
