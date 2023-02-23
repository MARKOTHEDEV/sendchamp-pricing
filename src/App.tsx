import { Box } from '@chakra-ui/react'
import { useState } from 'react'
import HeroSection from './shared/HeroSection'
import Footer from './shared/Footer'
import InfoCard from './shared/InfoCard'
import { useRecoilValue } from "recoil"
import Build from './shared/Build'
 import ApplyPage from './shared/ApplyPage'
function App() {
  return (
    <Box>
      <HeroSection/>
        <Box p={'1rem'}display={'grid'}
        transform={['translateY(0)','translateY(-70px)','translateY(-80px)']}
        gap={'40px'}  maxW={'1200px'} m={['0','auto','auto']}  gridTemplateColumns={['100%','1fr 1fr','repeat(3,1fr)']}>
          <InfoCard/>
          <InfoCard/>
          <InfoCard/>
        </Box>
        <ApplyPage/>
        <Build/>
      <Footer/>
    </Box>
  )
}

export default App
