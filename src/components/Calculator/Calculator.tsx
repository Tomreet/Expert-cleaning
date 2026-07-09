import { useState } from 'react';
import styles from './Calculator.module.css';
import CustomSelect from './CustomSelect';

const Calculator = () => {
  const [type, setType] = useState('flat');
  const [area, setArea] = useState(50);

  const prices: Record<string, number> = { flat: 90, house: 110, office: 75 };
  const total = area * prices[type];
  const hours = Math.ceil(area / 15);

  const options = [
    { value: 'flat', label: 'Квартира' },
    { value: 'house', label: 'Дом' },
    { value: 'office', label: 'Офис' },
  ];

  return (
    <section className="section" id="calculator">
      <div className="container">
        <h2>Расчёт стоимости</h2>
        <div className={styles.panel}>
          <div className={styles.row}>
            <label className={styles.label}>Тип объекта</label>
            <CustomSelect options={options} value={type} onChange={setType} />
          </div>
          <div className={styles.row}>
            <label className={styles.label}>Площадь: {area} м²</label>
            <input
              type="range"
              min="20"
              max="500"
              value={area}
              onChange={(e) => setArea(+e.target.value)}
              className={styles.slider}
            />
          </div>
          <div className={styles.result}>
            {total.toLocaleString()} ₽
            <small>≈ {hours} ч работы</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;