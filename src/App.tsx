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

const App: React.FC = () => {

  return (
    <>
      <MainNavigation />
      <main className={classes.app}>
        <AppWrapper>
          <Header />
          <CursorCircle />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </AppWrapper>
      </main>
      <Footer />
    </>
  );
};

export default App;
