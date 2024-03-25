import styles from './CustomerCard.module.css'
import quote from '../../assets/quote.svg'
/* eslint-disable react/prop-types */


const CustomerCard = (props) => {
  return (
    <div className={styles.customer_card}>
        <img className={styles.quote} src={quote} alt="" />
        <img className={styles.customer_image} src={props.image} alt="" />
        <p className={styles.customer_name}>{props.name}</p>
        <p className={styles.customer_message}>{props.message}</p>
    </div>
  )
}

export default CustomerCard