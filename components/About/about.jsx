import classes from './about.module.css'
import Link from "next/link";

export function About() {
  return (
    <div className={classes.grid}>
      <div className={classes.banner}>
        <img src="img/test.png" alt="Banner Image" className={classes.bannerImage} />
        <div className={classes.bannerText}>プロフィール</div>
      </div>
      <br />
      <div className={classes.profileArea}>
        <img src="img/selfimage.jpg" alt="Profile Photo" className={classes.profileImage} />
        <p className={classes.profileDescription}>
          幼少期：レゴなどのものづくりが好き、アートで受賞したことがある。<br /><br />
          中高生：HikakinのYoutubeの初期を見つけビートボックスを知る、薬学の道に興味を持つ、一浪<br /><br />
          大学生：一浪の末工学部化学科に進学、ユニクロ銀座店で5年間オープンからアルバイト
          ビートボックスに打ち込む、医薬品・製薬業界を目指す、エンジニアにも興味、地域清掃のリーダー(環境ISO委員会に所属)、
          就職活動講座支援(25人集客、うち第一志望内定者2人)<br /><br />
          新卒：アルフレッサ株式会社という医薬品商社で営業(3年)<br /><br />
          転職：エンジニアの道へ<br /><br />
          現在：Rehab for japan(スタートアップ)の開発部に所属しエンジニアをしてる。プライベートでも開発やアート制作を趣味のようにしている。
        </p>
      </div>
      <div className={classes.tileWrapper}>
        <li className={classes.tile}>
          <Link href={`/`}>
            <div>
              <p className={classes.vennfont}>IOSアプリ開発支援</p>
              <img src="img/ios.png" alt="IOSアプリ開発イメージ" />
            </div>
          </Link>
        </li>
        <li className={classes.tile}>
          <Link href={`/`}>
            <div>
              <p className={classes.vennfont}>Webアプリ開発支援</p>
              <img src="img/tarot.png" alt="Webアプリ開発イメージ" />
            </div>
          </Link>
        </li>
        <li className={classes.tile}>
          <Link href={`/`}>
            <div>
              <p className={classes.vennfont}>エンジニア個別支援</p>
              <img src="/path/to/engineer-image.jpg" alt="エンジニア支援イメージ" />
            </div>
          </Link>
        </li>
      </div>
    </div>
  )
}