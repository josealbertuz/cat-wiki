import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global-styles'
import theme from '../styles/theme';

type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode 
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {


  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {
        getLayout(<Component {...pageProps} />)
      }
    </ThemeProvider>
  )
}

export default MyApp
