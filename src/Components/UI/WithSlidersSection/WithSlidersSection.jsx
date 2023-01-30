import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faArrowRightLong } from "@fortawesome/free-solid-svg-icons";


import styles from "./withSlidersSection.module.scss";

const WithSlidersSection = () => {

  const leftArrow = <FontAwesomeIcon icon={faArrowLeftLong} />;
  const rightArrow = <FontAwesomeIcon icon={faArrowRightLong} />;

  return (
    <section className={styles.withSlidersSection}>
      <div className={styles.productDesc}>
        <h3>Gold Metal</h3>
        <img src="https://custom-made.axiomthemes.com/wp-content/uploads/2016/10/ring-1.jpg" alt="" />
        <p>Diamond Promise Ring</p>
        <Link>DETAILS</Link>
      </div>
      <div className={styles.slider}>
        <div className={styles.imgsWrapper}>
            <img src="https://custom-made.axiomthemes.com/wp-content/uploads/2016/10/image_8.jpg" alt="" />
            <img src="https://custom-made.axiomthemes.com/wp-content/uploads/2016/10/image-11.jpg" alt="" />
            <img src="https://custom-made.axiomthemes.com/wp-content/uploads/2016/10/Depositphotos_78819442_original.jpg" alt="" />
            <img src="https://custom-made.axiomthemes.com/wp-content/uploads/2016/10/Depositphotos_32061873_original.jpg" alt="" />
        </div>
        <div className={styles.arrowsWrapper}>
            <div className={styles.leftArrow}>{leftArrow}</div>
            <div className={styles.rightArrow}>{rightArrow}</div>
        </div>
      </div>
      <div className={styles.productDesc}>
        <h3>Diamonds</h3>
        <img src="https://custom-made.axiomthemes.com/wp-content/uploads/2016/10/ring-2.jpg" alt="" />
        <p>Princess-Cut Diamond</p>
        <Link>DETAILS</Link>
      </div>
    </section>
  );
};

export default WithSlidersSection;
