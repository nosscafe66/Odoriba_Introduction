import styles from '@/components/Link.module.css'
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
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", 
    title: "Docs ", 
    description: "Find in-depth information about Next.js features and&nbsp;API." 
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", 
    title: "Learn ", 
    description: "Learn about Next.js in an interactive course with&nbsp;quizzes!" 

  },
  {
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", 
    title: "Templates ", 
    description: "Discover and deploy boilerplate example Next.js&nbsp;projects." 
  },
  {
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", 
    title: "Deploy ", 
    description: "Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel." 

  },  { 
    href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", 
    title: "Docs ", 
    description: "Find in-depth information about Next.js features and&nbsp;API." 
  },
  {
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app", 
    title: "Learn ", 
    description: "Learn about Next.js in an interactive course with&nbsp;quizzes!" 
  }
]

export function Links() {
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