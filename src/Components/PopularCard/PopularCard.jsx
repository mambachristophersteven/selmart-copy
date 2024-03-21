import styles from './PopularCard.module.css'
/* eslint-disable react/prop-types */


const PopularCard = (props) => {
  return (
    <div className={styles.popular_card}>
        <div className={styles.product_image}>
            <img src={props.image} alt="" />
        </div>
    </div>
  )
}

export default PopularCard