import React, { useEffect, useState } from 'react';
import styles from './circle-cursor.module.css';

const CircleCursor: React.FC = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const getRandomOffset = () => {
    const circleRadius = 100;
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * circleRadius;
    const offsetX = Math.cos(angle) * distance;
    const offsetY = Math.sin(angle) * distance;
    return { x: offsetX, y: offsetY };
  };

  return (
    <>
      <div
        className={styles.circle}
        style={{
          left: cursorPosition.x - 100,
          top: cursorPosition.y - 100,
        }}
      >
      </div>
      {/* Rest of your application content */}
    </>
  );
};

export default CircleCursor;
