import styles from "./customMadeSection.module.scss";

const CustomMadeSection = () => {
  return (
    <section className={`product-section ${styles.customMadeSection}`}>
      <div className="product-section-item">
        <div className={styles.imgsWrapper}>
          <div className={styles.img1}>
            <div className={styles.textContent}>
              <div className={styles.caption}>PROMISE EARRINGS</div>
              <div className={styles.container}>Duis et lorem elementum, auctor elit sit amet, interdum arcu.</div>
            </div>
            <img
              src="https://custom-made.axiomthemes.com/wp-content/uploads/2016/10/product-1.jpg"
              alt=""
            />
          </div>
          <div className={styles.img2}>
            <img
              src="https://custom-made.axiomthemes.com/wp-content/uploads/2016/10/product-2.jpg"
              alt=""
            />
            <div className={styles.textContent}>
              <div className={styles.caption}>PROMISE RING</div>
              <div className={styles.container}>Duis et lorem elementum, auctor elit sit amet, interdum arcu.</div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-section-item">
        <div className="right-part-content-wrapper">
          <div className="right-part-content-caption">
            <h1>2</h1>
            <h2>
              Product Custom <br /> Design Engineering
            </h2>
          </div>
          <div className={styles.textContent}>
            <p>
              Bringing forward a collection with an aesthetic appeal for a broad
              market while ensuring exceptional results is a challenge for any
              organization. Riva Precision provides a systematic approach to
              creating timeless designs that are consistently reproduced through
              the company’s in-house capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomMadeSection;
