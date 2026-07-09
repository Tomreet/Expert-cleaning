import { useInView } from 'react-intersection-observer';
import { useCountUp } from '../../hooks/useCountUp';
import styles from './Stats.module.css';

const items = [
  { icon: '⊡', end: 10000, suffix: ' м²', label: 'отмытых окон' },
  { icon: '⊡', end: 150, suffix: '+', label: 'видов химии' },
  { icon: '⊡', end: 5, suffix: ' лет', label: 'гарантия' },
];

const Stats = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 });

  return (
    <section className="section stats" ref={ref}>
      <div className="container">
        <div className={styles.grid}>
          {items.map((item, i) => (
            <StatCard key={i} {...item} startCounting={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ end, suffix, label, startCounting }: any) => {
  const count = useCountUp(end, 2000, startCounting);
  return (
    <div className={styles.card}>
      <div className={styles.number}>
        {count.toLocaleString()}
        <span className={styles.unit}>{suffix}</span>
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default Stats;