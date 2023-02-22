import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import HeroSection from './shared/HeroSection'
import Footer from './shared/Footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <Box>
      <HeroSection/>

      <Footer/>
    </Box>
  )
}

export default App
