import styles from './Link.module.css'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

const ITEMS = [
  { 
    href: "https://qiita.com/nooosss", 
    title: "Qiita ", 
    description: "学習状況や発信" 
  },
  {
    href: "https://twitter.com/tr08327438", 
    title: "Twitter ", 
    description: "時々発信してます。" 
  },
  {
    href: "https://github.com/nosscafe66", 
    title: "Github ", 
    description: "個人リポジトリ" 
  },
  {
    href: "https://github.com/nosscafe66/nossjob.github.io/blob/main/History.md", 
    title: "Job History ", 
    description: "職務経歴書" 
  }
]

export function Links(props) {
  if((props.page=="Contact") || (props.page=="Service") || (props.page =="Information")){
  }else{
    return (
        <div className={styles.grid}>
          {ITEMS.map(item => (
          <a key ={item.href}
            href={item.href}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              {item.title} <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              {item.description}
            </p>
          </a>
          ))}
        </div>
    );
  }
}