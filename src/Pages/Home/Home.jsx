import MainButton from '../../Components/MainButton/MainButton'
import styles from './Home.module.css'
import point1 from '../../assets/point1.png'
import point2 from '../../assets/point2.png'
import categories from '../../assets/categories'
import CategoryCard from '../../Components/CategoryCard/CategoryCard'

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
          <div className={styles.right}>
            <div className="right_content">
              <img src={point1} className={styles.point1} alt="" />
              <img src={point2} className={styles.point2} alt="" />
            </div>
          </div>
        </div>
        <div className={styles.categories}>
          <p className={styles.section_heading}>Browse our hottest Categories</p>
          <div className={styles.category_cards}>
            {categories.map((categoryCard,i)=>{
              return <CategoryCard key={i} name={categoryCard.name} image={categoryCard.image}/>
            })}
          </div>
        </div>
        <div className={styles.populars}>
          <p className={styles.section_heading}>Checkout our Popular Products</p>
        </div>
    </div>
  )
}

export default Home