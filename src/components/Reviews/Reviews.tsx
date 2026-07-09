import styles from './Reviews.module.css';
import avatarPlaceholder from '/images/avatar.svg';

const reviews = [
  { id: 1, name: 'ООО «СибТех»', text: 'Отличная работа, офис сияет. Приедем ещё.', rating: 5 },
  { id: 2, name: 'Ирина, ТЦ «Пионер»', text: 'Окна моют идеально, альпинисты профессионалы.', rating: 4 },
  { id: 3, name: 'Сергей П.', text: 'После ремонта квартира как новая. Спасибо!', rating: 5 },
];

const Reviews = () => (
  <section className="section" id="reviews">
    <div className="container">
      <h2>Отзывы клиентов</h2>
      <div className={styles.slider}>
        {reviews.map(r => (
          <div className={styles.card} key={r.id}>
            <img src={avatarPlaceholder} alt="" className={styles.avatar} />
            <div>
              <div className={styles.name}>{r.name}</div>
              <div className={styles.text}>{r.text}</div>
              <div className={styles.rating}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <div key={i} className={`${styles.bar} ${i < r.rating ? styles.barActive : ''}`} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Reviews;