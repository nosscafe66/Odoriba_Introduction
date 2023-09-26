import Image from 'next/image'
import React, { useState, useEffect } from 'react';
import styles from '..welcomepage.module.css'

export default function Welcomepage({ posts }) {
    const [hideWelcomeScreen, setHideWelcomeScreen] = useState(false);

    useEffect(() => {
      // 3秒後にwelcomeページを非表示にする
      const timer = setTimeout(() => {
        setHideWelcomeScreen(true);
      }, 3000);
  
      return () => clearTimeout(timer); // コンポーネントのアンマウント時にタイマーをクリアする
    }, []);
    return (
        <div className={hideWelcomeScreen ? styles.slideUp : ''}>
          <div className={styles.welcomeScreen}>
            Welcome to 〜
          </div>
        </div>
    );
}
