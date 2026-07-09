import styles from './About.module.css';
import aboutImg from '/images/about.jpg';

const About = () => (
  <section className="section" id="about">
    <div className="container">
      <h2>О компании</h2>
      <div className={styles.row}>
        <div className={styles.image}>
          <img src={aboutImg} alt="Команда Expert Cleaning" />
        </div>
        <div className={styles.text}>
          <p>Expert Cleaning — инженерная клининговая компания в Барнауле с 2010 года. Мы используем немецкое оборудование Karcher и профессиональную химию. Наша задача — не просто убрать пыль, а создать безопасную, стерильную среду для жизни и бизнеса.</p>
          <p>Каждый объект проходит аудит: анализ воды, типа загрязнений, материалов поверхностей. Только после этого мы подбираем технологию.</p>
          <a href="#calculator" className="button button--outline">Рассчитать проект</a>
        </div>
      </div>
    </div>
  </section>
);

export default About;