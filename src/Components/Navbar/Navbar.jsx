import styles from './Navbar.module.css'
import categories from '../../assets/categories'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
        {
          categories.map((categoryItem,i)=>{
              <div className={styles.categories} key={i}>
                  <h1>{categoryItem.id}</h1>
                  <h1>{categoryItem.name}</h1>
                  <img src={categoryItem.image} alt="" />
              </div>
          })
        }
    </div>
  )
}

export default Navbar