import ContactUsSection from '../../Components/UI/ContactUsSection/ContactUsSection';
import CustomMadeSection from '../../Components/UI/CustomMadeSection/CustomMadeSection';
import CustomProductSection from '../../Components/UI/CustomProductSection/CustomProductSection';
import GoogleMapSection from '../../Components/UI/GoogleMapSection/GoogleMapSection';
import MainSection from '../../Components/UI/MainSection/MainSection';
import ProductSpecificationsSection from '../../Components/UI/ProductSpecificationsSection/ProductSpecificationsSection';
import SubscribeSection from '../../Components/UI/SubscribeSection/SubscribeSection';
import WatchesSection1 from '../../Components/UI/WatchesSection1/WatchesSection1';
import WithSlidersSection from '../../Components/UI/WithSlidersSection/WithSlidersSection';

import styles from './homePage.module.scss'

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <MainSection />
      <CustomProductSection />
      <WithSlidersSection />
      <CustomMadeSection />
      <ProductSpecificationsSection />
      <ContactUsSection />
      <WatchesSection1 />
      <SubscribeSection />
      <GoogleMapSection />
    </div>
  );
};

export default HomePage;