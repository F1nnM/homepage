import styles from './About.module.css'
import { Image } from 'react-bootstrap';

import me from './../static/me.jpg'

function About() {

  function calculateAge() {
    var birthday = new Date(2001,8,8)
    var ageDifMs = Date.now() - birthday;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  return (
    <div className="d-flex flex-column justify-content-center">
      <Image src={me} roundedCircle className={styles.image + " mb-3 align-self-center"} />
      <h1 className={styles.header + " align-self-center"}>Hi there!</h1>
      <p className={styles.description}>
        I'm a {calculateAge()}-year-old fullstack developer, always looking for new challenges, experiences and things to learn in general.
      </p>
    </div>
  );
}

export default About;
