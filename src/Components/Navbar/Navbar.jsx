import styles from './Navbar.module.css'
import selmart_logo from '../../assets/selmart-logo.svg'
import nav_on from '../../assets/nav-link.svg'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className="logo">
        <a href="#">
          <img src={selmart_logo} alt="" />
          <p className="logo-name">sel<span>mart</span></p>
        </a>
      </div>
      <div className="nav-links">
        <ul>
          <li>
            <a href="#">
              <p>home</p>
              <img src={nav_on} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <p>shop</p>
              <img src={nav_on} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <p>categories</p>
              <img src={nav_on} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <p>deals</p>
              <img src={nav_on} alt="" />
            </a>
          </li>
        </ul>
      </div>
      <div className="search-side-links">
        <div className="search">
          <form action="#">
            <input type="text" name="search" id="search" />
            <input type="button" value="search" />
          </form>
        </div>
      </div>
      {/* {
        categories.map(categoryItem=>{
          return(
          <div key={categoryItem.id}>
            <p>{categoryItem.name}, {categoryItem.id}</p>
          </div>
        )})

      } */}
        
    </div>
  )
}

export default Navbar