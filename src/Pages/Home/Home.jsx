import MainButton from '../../Components/MainButton/MainButton'
import styles from './Home.module.css'
import point1 from '../../assets/point1.png'
import point2 from '../../assets/point2.png'
import star from '../../assets/star.svg'
import categories from '../../assets/categories'
import CategoryCard from '../../Components/CategoryCard/CategoryCard'
import PopularCard from '../../Components/PopularCard/PopularCard'
import populars from '../../assets/populars'

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
          <div className={styles.popular_cards}>
            {populars.map((popularCard,i)=>{
              return <PopularCard key={i} name={popularCard.name} image={popularCard.image} old_price={popularCard.old_price} new_price={popularCard.new_price} category={popularCard.category} />
            })}
          </div>
        </div>
        <div className={styles.off_deals}>
          <div className={styles.deals_left}>
            <img src={star} alt="" />
          </div>
          <div className={styles.deals_right}>
            <p className={styles.deal_main_text}>Get 30% off this week for purchases above ¢150.</p>
            <p className={styles.deal_sub_text}>What are you waiting for, browse through our hotest category and purchase your healthy groceries from Selmart.</p>
            <MainButton text = "shop now"/>
          </div>
        </div>
    </div>
  )
}

export default Home