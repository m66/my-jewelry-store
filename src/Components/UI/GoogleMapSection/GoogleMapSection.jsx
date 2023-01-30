import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

import styles from './googleMapSection.module.scss';

const GoogleMapSection = () => {
    const {} = useLoadScript({ googleMapsApiKey: '' })
    return (
    <section className={styles.googleMapSection}>
        map
    </section>
  )
}

export default GoogleMapSection