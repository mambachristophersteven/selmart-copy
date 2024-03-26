import styles from './Newsletter.module.css'

const Newsletter = () => {
  return (
    <div className={styles.newsletter}>
        <p className={styles.news_heading}>new to selmart</p>
        <p className={styles.news_sub_heading}>Subscribe to our newsletter for update on amazing products.</p>
        <div className={styles.news_form}>
            <input type="email" name="email" id="email" placeholder='Enter your email'/>
            <input type="button" value="suscribe" />
        </div>
    </div>
  )
}

export default Newsletter