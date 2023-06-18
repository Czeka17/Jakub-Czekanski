
import { useEffect } from 'react';
import Header from './components/header/header';
import Skills from './components/skills/skills';
import About from './components/about/about';
import AppWrapper from './components/UI/wrapper';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import MainNavigation from './components/layout/main-navigation';
interface Slide{
  title:string;
  description: string;
}
function App() {

  
    return (
      <>
      <MainNavigation/>
      <main>
        <AppWrapper>
      <Header/>
      <About />
      <Skills/>
      <Projects/>
      <Contact/>
      </AppWrapper>
      </main>
      </>
    );
  };

export default App;
