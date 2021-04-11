import styles from './Name.module.css'

function Name() {
  return (
    <div className={styles.name+ " align-self-center"}>
      <span>Finn Melzer</span>
    </div>
  );
}

export default Name;
