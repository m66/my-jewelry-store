import styles from './subPageHeader.module.scss';

const SubPageHeader = ({caption}) => {
  return (
    <div className={styles.subPageHeader}>
        <div className={styles.bgImg}></div>
        <div className={styles.content}>
            <p className={styles.caption}>
                <span>{caption[0]}</span>{caption.slice(1)}
            </p>
        </div>
    </div>
  )
}

export default SubPageHeader