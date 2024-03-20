import styles from './CategoryCard.module.css'
/* eslint-disable react/prop-types */


const CategoryCard = (props) => {
  return (
    <div className={styles.category_card}>
        <img src={props.image} alt="" />
        <p className={styles.categort_name}>{props.name}</p>
    </div>
  )
}

export default CategoryCard