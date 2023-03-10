import '@/styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { UserProvider } from '@auth0/nextjs-auth0';

export default function App({ Component, pageProps }) {
  return(
    <ChakraProvider>
      <Component {...pageProps} />
      </ChakraProvider>
  )
}
