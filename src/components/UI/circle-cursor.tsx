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

  return (
    <>
      <div
        className={styles.circle}
        style={{
          left: cursorPosition.x - 150,
          top: cursorPosition.y - 150,
        }}
      data-testid="circle-cursor">
      </div>
      {/* Rest of your application content */}
    </>
  );
};

export default CircleCursor;
