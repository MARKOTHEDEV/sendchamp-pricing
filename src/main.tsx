import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './chakra.style'
import {QueryClient,QueryClientProvider,} from 'react-query'
import { RecoilRoot } from 'recoil'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>

          <ChakraProvider theme={theme}>
          <RecoilRoot>
            <App />
          </RecoilRoot>
          </ChakraProvider>
      </QueryClientProvider>
  </React.StrictMode>,
)
