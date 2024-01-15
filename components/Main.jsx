import styles from './Main.module.css'
import { Links } from '@/components/Link/links'
import { Underline } from '@/components/Underline/underline'
import { Headline } from '@/components/Headline/headline'
import { useEffect } from 'react'
import { Service } from './Service/service'
import { About } from './About/about'
import { IndexButton } from './Button/indexbutton'
import { Information } from './Information/information'
import { Content } from './Content/content'
import { ContactForm } from './Contact/contactform'

export function Main(props) {
  useEffect(() => {
    document.body.style.backgroundColor = "#FFFFFF"
    return () => {
      document.body.style.backgroundColor = "#FFFFFF"
    };
  }, [])
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>
      <Information />
      <About />
      <Content />
      <Service />
      <ContactForm />
    </main>
  )
}