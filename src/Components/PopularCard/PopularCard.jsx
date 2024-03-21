import styles from './PopularCard.module.css'
import favorite_icon from '../../assets/favorite.svg'
import favorited_icon from '../../assets/favorited.svg'
import button_cart_icon from '../../assets/button-cart-icon.svg'
import { useState } from 'react'
/* eslint-disable react/prop-types */


const PopularCard = (props) => {
    const [like, setLike] = useState(false);

    function handleLike(){
        setLike(!like);
    }

  return (
    <div className={styles.popular_card}>
        <div className={styles.product_image_section}>
            <img className={styles.product_image} src={props.image} alt="" />
            <div className={styles.favoriting_icons}>
                <img onClick={handleLike} className={like? styles.favorited: styles.favorite} src={favorite_icon} alt="" />
                <img  onClick={handleLike} className={like? styles.favorite: styles.favorited} src={favorited_icon} alt="" />
            </div>
        </div>
        <div className={styles.name_and_price}>
            <div className={styles.name}>
                <p className={styles.product_category}>{props.category}</p>
                <p className={styles.product_name}>{props.name}</p>
            </div>
            <div className={styles.prices}>
                <p className={styles.new_price}>{props.new_price}</p>
                <p className={styles.old_price}>{props.old_price}</p>
            </div>
        </div>
        <div className={styles.cart_button}>
            <button>
                <p className={styles.button_text}>add to cart</p>
                <img src={button_cart_icon} alt="" />
            </button>
        </div>
    </div>
  )
}

export default PopularCard