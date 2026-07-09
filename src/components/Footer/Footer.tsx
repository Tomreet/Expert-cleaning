import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className={styles.grid}>
        <div className={styles.contacts}>
          <h3>Контакты</h3>
          <p>Барнаул, ул. Малахова, 12, офис 304</p>
          <p>+7 (3852) 50-09-90</p>
          <p>info@expert-cleaning.ru</p>
        </div>
        <div className={styles.map}>
          <iframe src="https://yandex.ru/map-widget/v1/?ll=83.770000,53.360000&z=15&pt=83.770000,53.360000,pm2rdl&theme=light&lang=ru" title="Карта" />
        </div>
      </div>
      <div className={styles.copyright}>
        © 2025 Expert Cleaning. Премиальный клининг в Барнауле.
      </div>
    </div>
  </footer>
);

export default Footer;