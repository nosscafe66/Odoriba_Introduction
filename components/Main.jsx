import styles from './Main.module.css'
import { Links } from '@/components/Link/links'
import { Underline } from '@/components/Underline/underline'
import { Headline } from '@/components/Headline/headline'
import { useEffect } from 'react'
import { Service } from './Service/service'
import { About } from './About/about'
import { IndexButton } from './Button/indexbutton'
import { Login } from './Login/login'
import { Information } from './Information/information'
import BlogContent from './Blog/blogcontent'


export function Main(props) {
  useEffect(() => {
    document.body.style.backgroundColor = "#FFFFFF"
    return () => {
      document.body.style.backgroundColor = "#FFFFFF"
    };
  }, [])
  if (props.page == "Contact") {
    <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>
    </main>
  } else if (props.page == "Service") {
    return (
      <main className={styles.main}>
        <Headline page={props.page}>
          <code className={styles.code}>pages/{props.page}.js</code>
        </Headline>
        <Service page={props.page} />
        <IndexButton />
      </main>
    )
  } else if (props.page == "Information") {
    return (
      <main className={styles.main}>
        <Headline page={props.page}>
          <code className={styles.code}>pages/{props.page}.js</code>
        </Headline>
        <Information />
      </main>
    )
  }
  else if (props.page == "Contents") {
    return (
      <main className={styles.main}>
        <Headline page={props.page}>
          <code className={styles.code}>pages/{props.page}.js</code>
        </Headline>
        <BlogContent blog={props.blog} totalCount={props.totalCount} />
        {props.comp}
      </main>
    )
  }
  else if (props.page == "BlogContents") {
    return (
      <main className={styles.main}>
        <Headline page={props.page}>
          <code className={styles.code}>pages/{props.page}.js</code>
        </Headline>
        {props.pagecomp}
        {props.comp}
      </main>
    )
  }
  else if (props.page == "Login_Before") {
    return (
      <main className={styles.main}>
        <Headline page={props.page}>
          <code className={styles.code}>pages/{props.page}.js</code>
        </Headline>
      </main>
    )
  }
  else if (props.page == "Login_After") {
    return (
      <main className={styles.main}>
        <Headline page={props.page}>
          <code className={styles.code}>pages/{props.page}.js</code>
        </Headline>
      </main>
    )
  }
  else {
    return (
      <main className={styles.main}>
        <Headline page={props.page}>
          <code className={styles.code}>pages/{props.page}.js</code>
        </Headline>
        <About /><br />
        <Underline page={props.page} />
        <Links page={props.page} />
      </main>
    )
  }
}