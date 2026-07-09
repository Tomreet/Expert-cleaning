import styles from './Services.module.css';
import {
  FiPackage,     // химчистка мебели (мебель/диван)
  FiSun,        // мойка окон (солнце/стекло)
  FiHome,       // генеральная уборка (дом)
  FiTool,       // после ремонта (инструмент)
  FiBox,        // обеспыливание складов (коробка)
  FiWind,       // озонирование (ветер/воздух)
} from 'react-icons/fi';

const services = [
  {
    icon: <FiPackage />,
    title: 'Химчистка мебели',
    desc: 'Глубокая очистка до основания ворса.',
  },
  {
    icon: <FiSun />,
    title: 'Мойка окон',
    desc: 'Промышленный альпинизм, высотные работы.',
  },
  {
    icon: <FiHome />,
    title: 'Генеральная уборка',
    desc: 'Полный цикл с дезинфекцией.',
  },
  {
    icon: <FiTool />,
    title: 'После ремонта',
    desc: 'Удаление строительной пыли.',
  },
  {
    icon: <FiBox />,
    title: 'Обеспыливание складов',
    desc: 'Снижение статического электричества.',
  },
  {
    icon: <FiWind />,
    title: 'Озонирование',
    desc: 'Уничтожение запахов и бактерий.',
  },
];

const Services = () => (
  <section className="section" id="services">
    <div className="container">
      <h2>Услуги компании</h2>
      <div className={styles.grid}>
        {services.map((s, i) => (
          <div className={styles.card} key={i}>
            <div className={styles.icon}>{s.icon}</div>
            <h3 className={styles.title}>{s.title}</h3>
            <p className={styles.desc}>{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;