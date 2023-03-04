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
import { PaymentButton, PreviewPage } from './PaymentButton/previewpage'


export function Main(props) {
  useEffect(() => {
    document.body.style.backgroundColor = "#53A5D4"
    return () => {
      document.body.style.backgroundColor = "#53A5D4"
    };
  }, [])
  if (props.page == "Contact") {
    <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>
    </main>
  } else if(props.page == "Service"){
    return(
      <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>
      <Service page={props.page}/>
      <PreviewPage /><br />
      <IndexButton />
    </main>
    )
  } else if(props.page == "Information"){
    return(
      <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>
      <Information />
    </main>
    )
  }else if(props.page == "Login"){
    return(
      <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>
      <Login />
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