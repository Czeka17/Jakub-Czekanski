import classes from './about.module.css';

function About() {
  return (
    <section className={classes.aboutSection} id='about'>
      <div className={classes.aboutContainer}>
        <div className={classes.about}>
          <div className={classes.aboutBackground}>
            <h2>ME</h2>
            <p>
              Hello, my name is Jacob. I am a self-taught frontend React developer. I am ambitious and motivated to create engaging user experiences. I am looking for my first job in this industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
