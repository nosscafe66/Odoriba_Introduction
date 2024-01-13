import React from 'react';
import Image from 'next/image';
import classes from './information.module.css';

export function Information() {
  // Adjust the image paths and add your text/content as needed.
  return (
    <div id="information" className={classes.wrapper}>
      <div className={classes.textSection}>
        {/* All your text content goes here */}
        <h1>より道な会話よりも、尋ねてより道</h1>
        <p>あなたが今日したコミュニケーションは、明日のあなたのコミュニケーションになる。</p>
        {/* ... other text and buttons ... */}
      </div>
      <div className={classes.imageSection}>
        {/* Adjust the path to your iOS image */}
        <Image
          src="/img/iphone.png"
          alt="iOS App"
          objectFit="contain"
          layout="responsive"
          width={700} /* Example width */
          height={700} /* Example height to maintain aspect ratio */
          className={classes.imageStyle} // Add this line
        />
      </div>
    </div>
  );
}
