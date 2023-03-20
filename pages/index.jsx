import Head from 'next/head'
import { Footer } from '@/components/Footer/footer'
import { Login } from '@/components/Login/login'
import { LoginHeader } from '@/components/LoginHeader/loginheader'
import { Main } from '@/components/Main'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Information Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LoginHeader />
      <Main page="Login_Before"/>
      <Footer />
    </div>
  )
}