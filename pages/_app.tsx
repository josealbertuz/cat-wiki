import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../styles/global-styles'
import theme from '../styles/theme';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools'

type NextPageWithLayout = NextPage & {
  getLayout: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppPropsWithLayout) {


  const getLayout = Component.getLayout ?? ((page: ReactElement) => page)

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ReactQueryDevtools initialIsOpen={false} />
        {
          getLayout(<Component {...pageProps} />)
        }
      </ThemeProvider>
    </QueryClientProvider>
  )
}

export default MyApp
