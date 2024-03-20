import MainButton from '../../Components/MainButton/MainButton'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
        <div className={styles.home_frame}>
          <div className={styles.left}>
            <p className={styles.save_cash}>Save up to 30% cash</p>
            <p className={styles.main_text}>Groceries Made Fresh and Easy</p>
            <p className={styles.sub_text}>Welcome to Selmart. Browse a Wide Selection of Fresh Produce, Pantry Staples, and More.</p>
            <MainButton text = "explore product"/>
          </div>
          <div className={styles.right}></div>
        </div>
    </div>
  )
}

export default Home