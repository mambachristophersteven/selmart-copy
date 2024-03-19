import styles from './Footer.module.css'
import facebook_logo from '../../assets/logo-facebook.svg'
import twitter_logo from '../../assets/logo-twitter.svg'
import instagram_logo from '../../assets/logo-instagram.svg'
import linkedin_logo from '../../assets/logo-linkedin.svg'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.company}>
        <p className={styles.selmart}>selmart</p>
        <div className={styles.copyright}>
          <p className={styles.copyright_text}>© 2023 Selmart Grocery.</p>
          <p className={styles.copyright_text}>All Rights Reserved.</p>
        </div>
        <div className={styles.socials}>
          <p className={styles.socials_text}>Follow us on</p>
          <div className={styles.social_media}>
            <a href="#">
              <img src={facebook_logo} alt="" />
            </a>
            <a href="#">
              <img src={linkedin_logo} alt="" />
            </a>
            <a href="#">
              <img src={twitter_logo} alt="" />
            </a>
            <a href="#">
              <img src={instagram_logo} alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className={styles.or_company}>
        <p className={styles.heading}>our company</p>
        <div className={styles.company_content}>
          <p className={styles.content_text}>about us</p>
          <p className={styles.content_text}>FAQs</p>
          <p className={styles.content_text}>privacy policy</p>
          <p className={styles.content_text}>terms of service</p>
          <p className={styles.content_text}>delivery & returns</p>
        </div>
      </div>
      <div className={styles.contact}>
        <p className={styles.heading}>contact</p>
        <div className={styles.top_content}>
          <p className={styles.content_text}>123 Main Street,</p>
          <p className={styles.content_text}>Accra Central,</p>
          <p className={styles.content_text}>Accra, Ghana</p>
        </div>
        <div className={styles.down_content}>
          <p className={styles.content_text}> info@selmartgrocery.com</p>
          <p className={styles.content_text}> Phone: +1 (555) 123-4567</p>
        </div>
      </div>
    </div>
  )
}

export default Footer