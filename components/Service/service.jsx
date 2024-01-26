import classes from './service.module.css'
import Image from 'next/image';

export function Service() {
  return (
    <div id="service" className={classes.wrapper}>
        <div className={classes.imageSection}>
        {/* Adjust the path to your iOS image */}
        <Image
          src="/img/calender.png"
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
        <p>当アプリは、カレンダー機能を通じてダンスイベントやクラスのスケジュール管理を簡単に行えます。また、決済連動機能により、イベントやクラスの参加費用の支払いが一括して管理でき、手間を省くことができます。さらに、動画管理機能により、レッスン動画やパフォーマンスの記録を安全に保存し、いつでもアクセス可能です。</p>
        {/* ... other text and buttons ... */}
      </div>
    </div>
  )
}