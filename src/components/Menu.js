import { Link, useLocation } from 'react-router-dom';
import styles from './Menu.module.css'

function Menu() {
  var location = useLocation()
  return (
    <div className={styles.menu+ " align-self-stretch d-flex justify-content-around"}>
      <Link to="/contact" className={location.pathname==="/contact"?styles.active:''}>Contact</Link>
      <Link to="/cv" className={location.pathname==="/cv"?styles.active:''}>CV</Link>
      <Link to="/work" className={location.pathname==="/work"?styles.active:''}>Work</Link>
      <Link to="/" className={location.pathname==="/"?styles.active:''}>About</Link>
    </div>
  );
}

export default Menu;
