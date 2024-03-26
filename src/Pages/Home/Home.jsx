import MainButton from '../../Components/MainButton/MainButton'
import styles from './Home.module.css'
import point1 from '../../assets/point1.png'
import point2 from '../../assets/point2.png'
import point3 from '../../assets/point3.png'
import point4 from '../../assets/point4.png'
import star from '../../assets/star.svg'
import categories from '../../assets/categories'
import CategoryCard from '../../Components/CategoryCard/CategoryCard'
import PopularCard from '../../Components/PopularCard/PopularCard'
import populars from '../../assets/populars'
import flashDeals from '../../assets/flashDeals'
import FlashCard from '../../Components/FlashCard/FlashCard'
import CustomerCard from '../../Components/CustomerCard/CustomerCard'
import customers from '../../assets/customers'
import Newsletter from '../../Components/Newsletter/Newsletter'

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
            <div className="deals_left_content">
              <img src={point3} className={styles.point3} alt="" />
              <img src={point4} className={styles.point4} alt="" />
            </div>
          </div>
          <div className={styles.deals_right}>
            <p className={styles.deal_main_text}>Get 30% off this week for purchases above ¢150.</p>
            <p className={styles.deal_sub_text}>What are you waiting for, browse through our hotest category and purchase your healthy groceries from Selmart.</p>
            <MainButton text = "shop now"/>
          </div>
        </div>
        <div className={styles.flash_sales}>
          <p className={styles.section_heading}>Flash Sales</p>
          <div className={styles.popular_cards}>
            {flashDeals.map((popularDeal,i)=>{
              return <FlashCard key={i} name={popularDeal.name} image={popularDeal.image} old_price={popularDeal.old_price} new_price={popularDeal.new_price} category={popularDeal.category} deal={popularDeal.deal}/>
            })}
          </div>
        </div>
        <div className={styles.reviews}>
          <p className={styles.section_heading}>Customer reviews</p>
          <div className={styles.popular_cards}>
            {customers.map((customerReview,i)=>{
              return <CustomerCard key={i} name={customerReview.name} image={customerReview.image} message={customerReview.message} />
            })}
          </div>
        </div>
        <Newsletter />
    </div>
  )
}

export default Home