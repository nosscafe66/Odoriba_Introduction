import '@/styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { Auth0Provider } from '@auth0/auth0-react'

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Auth0Provider
        domain="dev-38se6zvu8y7kxej4.jp.auth0.com"
        clientId="0j9Vj00XtmJtyYfLYin45tLsLDZLbmhC"
        redirectUri="https://reactpro-9gdzsdj2m-nosscafe66.vercel.app/success"//http://localhost:3000/
      >
        <Component {...pageProps} />
      </Auth0Provider>
    </ChakraProvider >
  )
}