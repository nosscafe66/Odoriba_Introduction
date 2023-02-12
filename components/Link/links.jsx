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
    href: "#", 
    title: "Learn ", 
    description: "Learn about Next.js in an interactive course with&nbsp;quizzes!" 
  },
  {
    href: "#", 
    title: "Templates ", 
    description: "Discover and deploy boilerplate example Next.js&nbsp;projects." 
  },
  {
    href: "#", 
    title: "Deploy ", 
    description: "Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel." 

  },  { 
    href: "#", 
    title: "Docs ", 
    description: "Find in-depth information about Next.js features and&nbsp;API." 
  },
  {
    href: "#", 
    title: "Learn ", 
    description: "Learn about Next.js in an interactive course with&nbsp;quizzes!" 
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