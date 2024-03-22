import styles from './Navbar.module.css'
import selmart_logo from '../../assets/selmart-logo.svg'
import nav_on from '../../assets/nav-link.svg'
import account_icon from '../../assets/account-icon.svg'
import support_icon from '../../assets/support-icon.svg'
import cart_icon from '../../assets/cart-icon.svg'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [current, setCurrent] = useState("home");

  function activeHome(){
    setCurrent("home");
  }
  function activeShop(){
    setCurrent("shop");
  }
  function activeCategories(){
    setCurrent("categories");
  }
  function activeDeals(){
    setCurrent("deals");
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <a href="#" className={styles.logo}>
          <img src={selmart_logo} alt="" />
          <p className={styles.logo_name}>sel<span>mart</span></p>
        </a>
      </div>
      <div className={styles.nav_links}>
        <ul>
          <li className={current ==="home"? styles.active_page:""} onClick={activeHome}>
            <Link to='/'>
              <p>home</p>
              <img src={nav_on} alt="" />
            </Link>
              
          </li>
          <li className={current ==="shop"? styles.active_page:""} onClick={activeShop}>
            <Link to='/shop'>
              <p>shop</p>
              <img src={nav_on} alt="" />
            </Link>
          </li>
          <li className={current ==="categories"? styles.active_page:""} onClick={activeCategories}>
            <Link to='/categories'>
              <p>categories</p>
              <img src={nav_on} alt="" />
            </Link>
          </li>
          <li className={current ==="deals"? styles.active_page:""} onClick={activeDeals}>
            <Link to='/deals'>
              <p>deals</p>
              <img src={nav_on} alt="" />
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.search_side_links}>
        <div className={styles.search}>
          <form action="#">
            <input type="text" name="search" id="search" />
            <input type="button" value="search" />
          </form>
        </div>
        <div className={styles.side_links}>
          <div className={styles.side_link}>
            <a href="#">
              <div className={styles.side_link_icon}>
                <img src={account_icon} alt="" />
              </div>
              <p className={styles.side_link_text}>account</p>
            </a>
          </div>
          <div className={styles.side_link}>
            <a href="#">
              <div className={styles.side_link_icon}>
                <img src={support_icon} alt="" />
              </div>
              <p className={styles.side_link_text}>support</p>
            </a>
          </div>
          <div className={styles.side_link}>
            <a href="#">
              <div className={styles.side_link_icon}>
                <img src={cart_icon} alt="" />
                <div className={styles.counter}>
                  <p>2</p>
                </div>
              </div>
              <p className={styles.side_link_text}>cart</p>
            </a>
          </div>
        </div>
      </div>
        
    </div>
  )
}

export default Navbar