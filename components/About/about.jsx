import classes from './about.module.css'
import Image from 'next/image';

export function About() {
  return (
    <div id="about" className={classes.wrapper}>
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
      <div className={classes.textSection}>
        {/* All your text content goes here */}
        <p>私たちのアプリは、ダンスコミュニティを強化し、繋がりを深めるために開発されました。使いやすいインターフェースで、ダンスイベントの参加登録から決済まで、すべてがスムーズに行えます。ダンサーとしての成長をサポートし、ダンスを愛するすべての人々を結びつけることが私たちの使命です。</p>
        {/* ... other text and buttons ... */}
      </div>
    </div>
  )
}