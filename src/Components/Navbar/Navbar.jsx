import styles from './Navbar.module.css'
import categories from '../../assets/categories'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <h1>hello</h1>
      {
        categories.map(categoryItem=>{
          return(
          <div key={categoryItem.id}>
            <p>{categoryItem.name}, {categoryItem.id}</p>
          </div>
        )})

      }
        
    </div>
  )
}

export default Navbar