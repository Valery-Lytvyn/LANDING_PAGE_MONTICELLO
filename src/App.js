import { useState, createContext } from 'react';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import News from './components/news/News';
import Gallery from './components/gallery/Gallery';
import Footer from './components/footer/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export const BackgroundColorContext = createContext()

function App() {
  const backgroundColorArr = [
    {
      backgroundColor: `linear-gradient(45deg,hsla(205, 100%, 67%, 0.65)  0%, hsla(253, 100%, 67%, 0.65) 100%) no-repeat center center `
    },
    {
      backgroundColor: `linear-gradient(45deg,hsla(59, 100%, 67%, 0.65)  0%, hsla(135, 88%, 35%, 0.65) 100%) no-repeat center center `
    },
    {
      backgroundColor: `linear-gradient(45deg,hsla(0, 90%, 54%, 0.65)  0%, hsla(32, 95%, 48%, 0.65) 100%) no-repeat center center `
    },
  ]
  const [backgroundColor, setBackgroundColor] = useState(backgroundColorArr[0])

  const colorOption = (index) => {
    setBackgroundColor(backgroundColorArr[index]);
  }


  return (
    <BackgroundColorContext.Provider value={backgroundColor.backgroundColor}>
      <div className='App'>
        <Header colorOption={colorOption} backgroundColorArr={backgroundColorArr} />
        <Projects />
        <News />
        <Gallery />
        <Footer />
      </div>
    </BackgroundColorContext.Provider>
  );

}

export default App;
