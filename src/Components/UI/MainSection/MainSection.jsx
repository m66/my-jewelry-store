import { Link } from 'react-router-dom'
import styles from './mainSection.module.scss'

const MainSection = () => {
  return (
    <div className={styles.mainSection}>
        <div className={styles.mainSectionContent}>
            <div className={styles.logoWrapper}>
                <img src="https://custom-made.axiomthemes.com/wp-content/uploads/2016/10/logo_footer.png" alt="" />
                <p>CUSTOM JEWELRY MANUFACTURER</p>
            </div>
            <div className={styles.caption}>QUADRATURE, KEEPER OF YOUR CONCEPT AND IDENTITY</div>
            <div className={styles.btnWrapper}>
                <Link>MAKE APPOINTMENT</Link>
            </div>
        </div>
    </div>
  )
}

export default MainSection