import classes from './main-navigation.module.css';
import { BsCode } from 'react-icons/bs';
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';

interface MainNavigationProps {
  isOpen: boolean;
  HideNavHandler: () => void;
}

function MainNavigation({ isOpen, HideNavHandler }: MainNavigationProps) {
  const [activeLink, setActiveLink] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sectionPositions = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sectionPositions.length - 1; i >= 0; i--) {
        const section = document.querySelector(`#${sectionPositions[i]}`) as HTMLElement;

        if (section && section.offsetTop <= scrollPosition) {
          setActiveLink(sectionPositions[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check on component mount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`${classes.navigation} ${isOpen ? classes.openNav : ''}`}>
      <div className={classes.logo}>
        <Link to="home" smooth={true} duration={200}>
          <BsCode />
          JC
        </Link>
      </div>
      <ul className={classes.navigationList}>
        <li onClick={HideNavHandler}>
          <Link
            to="home"
            smooth={true}
            duration={200}
            spy={true}
            activeClass={classes.active}
            isDynamic={true}
          >
            Home
          </Link>
        </li>
        <li onClick={HideNavHandler}>
          <Link
            to="about"
            smooth={true}
            duration={200}
            spy={true}
            activeClass={classes.active}
            isDynamic={true}
          >
            About
          </Link>
        </li>
        <li onClick={HideNavHandler}>
          <Link
            to="skills"
            smooth={true}
            duration={200}
            spy={true}
            activeClass={classes.active}
            isDynamic={true}
          >
            Skills
          </Link>
        </li>
        <li onClick={HideNavHandler}>
          <Link
            to="projects"
            smooth={true}
            duration={200}
            spy={true}
            activeClass={classes.active}
            isDynamic={true}
          >
            Projects
          </Link>
        </li>
        <li onClick={HideNavHandler}>
          <Link
            to="contact"
            smooth={true}
            duration={200}
            spy={true}
            activeClass={classes.active}
            isDynamic={true}
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
