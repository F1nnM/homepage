import styles from './Menu.module.css'

function Menu() {
  return (
    <div className={styles.menu+ " align-self-stretch d-flex justify-content-around"}>
      <span>Contact</span>
      <span>Work</span>
      <span>About</span>
    </div>
  );
}

export default Menu;
