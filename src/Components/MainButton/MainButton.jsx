import styles from './MainButton.module.css'
/* eslint-disable react/prop-types */

const MainButton = (props) => {
  return (
    <div className={styles.main_button}>
      <p className={styles.text}>{props.text}</p>
    </div>
  )
}

export default MainButton