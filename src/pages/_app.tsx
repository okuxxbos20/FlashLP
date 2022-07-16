import { CacheProvider, EmotionCache } from '@emotion/react'
import { ThemeProvider } from '@mui/material/styles'
import { AppProps } from 'next/app'
import Head from 'next/head'
import PropTypes from 'prop-types'
import createEmotionCache from '../createEmotionCache'
import { theme } from '../theme'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const App = ({
  Component,
  emotionCache = createEmotionCache(),
  pageProps
}: MyAppProps) => {
  return (
    <>
      <Head>
        <title>this is title</title>
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired
}

export default App
