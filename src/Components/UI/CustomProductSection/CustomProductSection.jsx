import styles from "./customProductSection.module.scss";

const CustomProductSection = () => {
  return (
    <section className="product-section">
      <div className="product-section-item">
        <div className={styles.videoWrapper}>
          {/* <iframe src="https://player.vimeo.com/video/83392040?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1" width="960" height="955" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen /> */}
          <img
            src="https://custom-made.axiomthemes.com/wp-content/uploads/2016/10/video.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="product-section-item">
        <div className="right-part-content-wrapper">
          <div className="right-part-content-caption">
            <h1>1</h1>
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
            <p>
              This is only the beginning of what makes Riva the right choice—the
              trusted choice—as a business partner. The world’s leading jewelry
              retailers have worked with Riva Precision for over two decades
              because they demand the exceptional results that only a global
              leader in jewelry manufacturing can provide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomProductSection;
