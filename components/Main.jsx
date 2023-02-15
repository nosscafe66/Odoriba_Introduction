import styles from './Main.module.css'
import { Links } from '@/components/Link/links'
import { Underline } from '@/components/Underline/underline'
import { Headline } from '@/components/Headline/headline'
import { useEffect } from 'react'
import { Service } from './Service/service'
import { About } from './About/about'
import { Slider } from '@chakra-ui/react'
import { SlideSwiper } from '@/components/SlideSwiper/slideswiper'

export function Main(props) {
  useEffect(() => {
    document.body.style.backgroundColor = "#53A5D4"
    return () => {
      document.body.style.backgroundColor = ""
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
    </main>
    )
  } else if(props.page == "Information"){
    return(
      <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>
      <SlideSwiper />
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