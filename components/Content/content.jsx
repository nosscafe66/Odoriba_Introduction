import classes from "./content.module.css";
import Image from 'next/image';

export function Content() {
  return (
    <div id="contents" className={classes.wrapper}>

      {/* Image Section */}
      <div className={classes.imageSection}>
        {/* Adjust the path to your iOS image */}
        <Image
          src="/img/iphone.png"
          alt="iOS App"
          objectFit="contain"
          layout="responsive"
          width={700} /* Example width */
          height={700} /* Example height to maintain aspect ratio */
          className={classes.imageStyle} // Add this line for custom image styling
        />
      </div>

      {/* Text Section */}
      <div className={classes.textSection}>
        {/* All your text content goes here */}
        <p>
          アプリでは、豊富なダンス関連コンテンツを提供しています。プロのダンサーによるチュートリアルビデオ、
          インタビュー、舞台裏の様子など、独占的なコンテンツが満載。また、ユーザーが自らのダンスビデオを
          アップロードし、コミュニティと共有することもできます。
        </p>
        {/* ... other text and buttons ... */}
      </div>

    </div>
  );
}
