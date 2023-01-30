import { Link } from "react-router-dom";

import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styles from "./productSpecificationsSection.module.scss";

const ProductSpecificationsSection = () => {
  const rightArrow = <FontAwesomeIcon icon={faArrowRightLong} />;

  return (
    <section className={styles.productSpecificationsSection}>
      <div className={styles.description}>
        <h1>Product Specifications</h1>
        <p>
          Bringing forward a collection with an aesthetic appeal for a broad
          market while ensuring exceptional results is a challenge for any
          organization. Riva Precision provides a systematic approach to
          creating timeless designs that are consistently reproduced through the
          company's in-house capabilities.
        </p>
        <div className={styles.linkWrapper}>
          <Link>VIEW CATALOGUE {rightArrow}</Link>
        </div>
        <div className={styles.cycle}></div>
      </div>
      <div className={`${styles.psItem} ${styles.psItem1}`}>
        <p>Metals, Techniques and Wastage</p>
      </div>
      <div className={`${styles.psItem} ${styles.psItem2}`}>
        <p>Watches</p>
      </div>
      <div className={`${styles.psItem} ${styles.psItem5}`}>
        <p>Plating and Texture</p>
      </div>
      <div className={`${styles.psItem} ${styles.psItem3}`}>
        <p>Gemstones</p>
      </div>
      <div className={`${styles.psItem} ${styles.psItem4}`}>
        <p>Pearl Jewelry</p>
      </div>
    </section>
  );
};

export default ProductSpecificationsSection;
