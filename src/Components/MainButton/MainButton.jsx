import styles from './MainButton.module.css'
import right_arrow from '../../assets/right-arrow.svg'
/* eslint-disable react/prop-types */

const MainButton = (props) => {
  return (
    <button className={styles.main_button}>
      <p className={styles.text}>{props.text}</p>
      <img src={right_arrow} alt="" />
    </button>
  )
}

export default MainButton