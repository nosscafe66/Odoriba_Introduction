import '@/styles/globals.css'
import { ChakraProvider } from "@chakra-ui/react"
import { Auth0Provider } from '@auth0/auth0-react'

export default function App({ Component, pageProps }) {
  const domain = process.env.AUTH0_ISSUER_BASE_URL
  const clientId = process.env.AUTH0_CLIENT_ID
  const redirectUri = process.env.AUTH0_REDIRECT_URI
  return (
    <ChakraProvider>
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={redirectUri}//https://reactpro-9gdzsdj2m-nosscafe66.vercel.app/http://localhost:3000/
      >
        <Component {...pageProps} />
      </Auth0Provider>
    </ChakraProvider >
  )
}