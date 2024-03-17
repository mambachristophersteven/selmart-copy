import styles from './Navbar.module.css'
import selmart_logo from '../../assets/selmart-logo.svg'
import nav_on from '../../assets/nav-link.svg'
import account_icon from '../../assets/account-icon.svg'
import support_icon from '../../assets/support-icon.svg'
import cart_icon from '../../assets/cart-icon.svg'

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
        <div className="side-links">
          <div className="side-link">
            <a href="#">
              <div className="side-link-icon">
                <img src={account_icon} alt="" />
              </div>
              <p className="side-link-text">account</p>
            </a>
          </div>
          <div className="side-link">
            <a href="#">
              <div className="side-link-icon">
                <img src={support_icon} alt="" />
              </div>
              <p className="side-link-text">support</p>
            </a>
          </div>
          <div className="side-link">
            <a href="#">
              <div className="side-link-icon">
                <img src={cart_icon} alt="" />
                <p className="counter">2</p>
              </div>
              <p className="side-link-text">cart</p>
            </a>
          </div>
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