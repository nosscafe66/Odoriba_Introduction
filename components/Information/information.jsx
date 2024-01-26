import React from 'react';
import Image from 'next/image';
import classes from './information.module.css';

export function Information() {
  // Adjust the image paths and add your text/content as needed.
  return (
    <div id="information" className={classes.wrapper}>
      <div className={classes.textSection}>
        {/* All your text content goes here */}
        <h1>ダンスがもっと楽しくなる、そんなプラットフォーム</h1>
        <p>ダンスの世界をあなたの手の中に。当アプリは、ダンス愛好家のために設計された会員管理プラットフォームです。最新のダンスイベント情報、ワークショップのスケジュール、そしてコミュニティのニュースを簡単にチェックできます。常に最新の情報をお届けするために、私たちは業界との密接な連携を保っています。</p>
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
