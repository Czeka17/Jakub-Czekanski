import {useRef,useEffect} from 'react'
import {
  SiTypescript,
  SiJavascript,
  SiCss3,
  SiReact,
  SiRedux,
  SiPostman,
  SiNextdotjs,
  SiHtml5,
  SiGit,
  SiNpm,
  SiSass,
  SiTailwindcss,
  SiTestinglibrary,
  SiMongodb,
  SiFirebase
} from 'react-icons/si';

import classes from './skills.module.css';

function Skills() {
  return (
    <section className={classes.skillsContainer}>
        <p className={classes.introduction}>LETS TALK ABOUT</p>
        <div className={classes.skills}>
        <h2 className={classes.heading}>SKILLS</h2>
      <div className={classes.skillsCarousel} >
            <div className={classes.skill}><SiTypescript /><p>Typescript</p></div>
            <div className={classes.skill}><SiJavascript /><p>Javascript</p></div>
            <div className={classes.skill}><SiCss3 /><p>CSS3</p></div>
            <div className={classes.skill}><SiReact/><p>Reactjs</p></div>
            <div className={classes.skill}><SiRedux /><p>Redux</p></div>
            <div className={classes.skill}><SiPostman /><p>Postman</p></div>
            <div className={classes.skill}><SiNextdotjs /><p>Nextjs</p></div>
            <div className={classes.skill}><SiHtml5 /><p>HTML5</p></div>
            <div className={classes.skill}><SiGit/><p>GIT</p></div>
            <div className={classes.skill}><SiNpm /><p>npm</p></div>
            <div className={classes.skill}><SiSass /><p>SASS</p></div>
            <div className={classes.skill}><SiTailwindcss /><p>Tailwindcss</p></div>
            <div className={classes.skill}><SiTestinglibrary /><p>Tests</p></div>
            <div className={classes.skill}><SiMongodb/><p>Mongodb</p></div>
            <div className={classes.skill}><SiFirebase  /><p>Firebase</p></div>
      </div>
      </div>
    </section>
  );
}

export default Skills;
