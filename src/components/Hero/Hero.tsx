import styles from './Hero.module.css';

const Hero = () => (
  <section className={styles.hero} id="hero">
    <div className={styles.content}>
      <h1 className={styles.title}>Клининговая<br />инженерия</h1>
      <p className={styles.subtitle}>Премиальная чистота для вашего пространства в Барнауле</p>
      <a href="#calculator" className="button">Рассчитать стоимость</a>
    </div>
    <div className={styles.scroll}>— листайте вниз —</div>
  </section>
);

export default Hero;