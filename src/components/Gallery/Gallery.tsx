import { useState, useRef, useEffect, useCallback } from 'react';
import styles from './Gallery.module.css';
import beforeImg from '/images/before-sample.jpg';
import afterImg from '/images/after-sample.jpg';

const Gallery = () => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPosition(percent);
    },
    []
  );

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (dragging.current) handleMove(e.clientX);
    };
    const onMouseUp = () => {
      dragging.current = false;
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, [handleMove]);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      if (!dragging.current) return;
      handleMove(e.touches[0].clientX);
    },
    [handleMove]
  );

  return (
    <section className="section gallery">
      <div className="container">
        <h2>До / После</h2>
        <div
          className={styles.comparison}
          ref={containerRef}
          onMouseDown={() => (dragging.current = true)}
          onTouchStart={() => (dragging.current = true)}
          onTouchMove={handleTouchMove}
          onTouchEnd={() => (dragging.current = false)}
        >
          <img src={beforeImg} alt="До уборки" className={styles.img} />

          <div
            className={styles.afterWrapper}
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <img src={afterImg} alt="После уборки" className={styles.img} />
          </div>

          <div
            className={styles.divider}
            style={{ left: `${position}%` }}
          >
            <div className={styles.handle}>⟷</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;