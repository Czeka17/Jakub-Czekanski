import React, { useState, useEffect } from 'react';
import classes from './app.module.css';
import Header from './components/header/header';
import Skills from './components/skills/skills';
import About from './components/about/about';
import AppWrapper from './components/UI/wrapper';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
import MainNavigation from './components/layout/main-navigation';
import Footer from './components/footer/footer';
import CursorCircle from './components/UI/circle-cursor';
import Hamburger from 'hamburger-react';
import { CSSTransition } from 'react-transition-group';

const App: React.FC = () => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setOpen(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <MainNavigation isOpen={isOpen} HideNavHandler={() => setOpen(false)} />
      <div className={classes.hamburger}>
        <Hamburger toggled={isOpen} toggle={setOpen} data-testid="hamburger" />
      </div>
      <main className={classes.app}>
        <AppWrapper>
          <Header />
          <CursorCircle />
          <div data-aos="zoom-in-up" data-aos-duration="1000">
            <About />
          </div>
          <div data-aos="fade-up"
     data-aos-anchor-placement="top-center">
          <Skills />
          </div>
          <div data-aos="fade-up" data-aos-duration="1000">
            <Projects />
          </div>
          <Contact />
        </AppWrapper>
      </main>
      <div className={classes.stateInfo} data-testid="isOpen-state">
        {String(isOpen)}
      </div>
      <Footer />
    </>
  );
};

export default App;
