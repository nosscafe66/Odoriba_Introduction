import classes from './about.module.css'
import Link from "next/link";
import Gmail from '../GmailContent/gmailcontent';


export function About() {
  return (
    <div>
      <ul className={classes.venn}>
        <li className={classes.vennlink_1}><Link href={`/`}><p className={classes.vennfont}>AIからは得られない継続的な学習方法</p></Link></li>
        <li className={classes.vennlink_2}><Link href={`/`}><p className={classes.vennfont}>技術学習支援</p></Link></li>
        <li className={classes.vennlink_3}><Link href={`/`}><p className={classes.vennfont}>企業とあなたのカルチャーマッチ判断</p></Link></li>
      </ul>
    </div>
  )
}