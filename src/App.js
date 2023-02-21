import { useState, createContext } from 'react';
import Header from './components/header/Header';
import Projects from './components/projects/Projects';
import News from './components/news/News';
import Gallery from './components/gallery/Gallery';
import Footer from './components/footer/Footer';
import { backgroundColorArr } from './constants/appComponentData';
import 'bootstrap/dist/css/bootstrap.min.css';

export const BackgroundColorContext = createContext()

function App() {
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
