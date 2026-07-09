import { useState } from 'react';
import styles from './FAQ.module.css';

const faq = [
  { q: 'Как выбрать моющее средство?', a: 'Выбор моющего средства — это всегда компромисс между эффективностью, безопасностью и ценой. Главное — не поддаваться на громкую рекламу, а научиться читать состав и понимать, для каких задач вам нужно средство.' },
  { q: 'Почему пароочиститель убивает 99% бактерий?', a: 'Пароочиститель убивает бактерии не с помощью химии, а через физическое воздействие — высокую температуру. Этот процесс называется термической дезинфекцией (или термодезинфекцией).' },
  { q: 'Работаете ли в промышленных зонах?', a: 'Да, мы работаем в промышленных зонах. В таких условиях (цеха, склады, производственные линии, ангары) мы используем только профессиональное оборудование и самые эффективные моющие средства — с высокой концентрацией активных веществ, которые справляются с техническими маслами, копотью, сварной пылью и тяжелыми загрязнениями.' },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="section" id="faq">
      <div className="container">
        <h2>Полезная информация</h2>
        <div className={styles.list}>
          {faq.map((item, i) => (
            <div className={styles.item} key={i}>
              <div className={styles.question} onClick={() => setOpen(open === i ? null : i)}>
                <span>{item.q}</span>
                <span className={`${styles.icon} ${open === i ? styles.iconOpen : ''}`}>+</span>
              </div>
              <div className={`${styles.answer} ${open === i ? styles.answerOpen : ''}`}>
                {item.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;