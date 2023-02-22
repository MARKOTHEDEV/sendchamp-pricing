import {
    Box,
    Container,
    Divider,
    Link,
    SimpleGrid,
    Stack,
    Text,
    HStack,
    Image,
  } from '@chakra-ui/react';
import React from 'react';
//   import sendChamp from './Images/sendchamp.png'
//   import nigeria from './Images/Nigeria.svg'
//   import usa from './Images/USA.svg'
  
  
const Footer = ():React.ReactElement=> {
    return (
      <Box
        backgroundColor={'#0D253F'}
        color={'#fff'}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{md: '1fr 1fr 1fr 1fr 1fr 1fr', base: '1fr 1fr' }}
            spacing={8}
            py={10}
            fontFamily='inherit'
            fontSize={'16px'}
           >
              <Stack align={'flex-start'}>
              <Text color={'#95968F'}  fontWeight='600' >Products</Text>
                <Link href={'#'}>Channels / Router</Link>
                <Link href={'#'}>Verification</Link>
                <Link href={'#'}>No-Code Tools</Link>
              
            </Stack>
            <Stack align={'flex-start'} >
              <Text color={'#95968F'}  fontWeight='600'>Solutions</Text>
              <Link href={'#'} >Onboard</Link>
              <Link href={'#'}>Engage</Link>
              <Link href={'#'}>Support</Link>
              <Link href={'#'}>Retain</Link>
              
            </Stack>
            <Stack align={'flex-start'}>
            <Text color={'#95968F'}  fontWeight='600' >Resources</Text>
              <Link href={'#'}>Developers</Link>
              <Link href={'#'}>API Reference</Link>
              <Link href={'#'}>Guides</Link>
              <Link href={'#'}>SDKs/Libraries</Link>
              <Link href={'#'}>Community</Link>
              <Link href={'#'}>Status Page</Link>
              <Link href={'#'}>Pricing</Link>
            </Stack>
            <Stack align={'flex-start'}>
            <Text color={'#95968F'}  fontWeight='600' >Company</Text>
              <Link href={'#'}>About Us</Link>
              <Link href={'#'}>Our Stories</Link>
              <Link href={'#'}>Careers</Link>
              <Link href={'#'}>Contact</Link>
              <Link href={'#'}>Terms Of Use</Link>
              <Link href={'#'}>Privacy</Link>
            </Stack>
            <Stack align={'flex-start'}>
            <Text color={'#95968F'}  fontWeight='600'>Follow us</Text>
              <Link href={'#'}>Twitter</Link>
              <Link href={'#'}>LinkedIn</Link>
              <Link href={'#'}>Facebook</Link>
              <Link href={'#'}>Instagram</Link>
            </Stack>
            <Stack align={'flex-start'}>
            <Text color={'#95968F'}  fontWeight='600' >Contact us</Text>
              <Link href={'#'}>+234(0)18880261</Link>
              <Link href={'#'}>sales@sendchamp.com</Link>
              <Link href={'#'}>help@sendchamp.com</Link>
            </Stack>
          </SimpleGrid>
          <Divider />
          <HStack display={{md:'flex', base:'grid'}} textAlign={{md:'start', base:'center'}} spacing='24px' paddingBottom={'49px'} paddingTop={'49px'} padding={'49px 1%'}>
              <Image src={'sendChamp'} w='227px' h='48px' marginRight={{md:'101px', base:'0 auto'}} margin={{base:'0 auto'}}  />
                 
              <Box  h='48px'  display={'flex'}>
                  <Image w={'40px'} marginRight={'16px'} src={'nigeria'} display={{md:'flex', base:'none'}}/>
                  <Text fontSize={{base:'18px'}}>142, Ahmadu Bello Way, Victoria Island,<br />
                  Lagos, Nigeria</Text>
              </Box>
              <Box  h='48px'  display={'flex'} paddingTop={{md:'0', base:'32px'}} paddingBottom={{md:'0', base:'32px'}}>
              <Image w={'40px'} marginRight={'16px'} src={'usa'}  display={{md:'flex', base:'none'}} />
                      <Text fontSize={{base:'17px'}}>2055 Limestone Rd STE 200-C Wilmington,<br />
                        DE 19808
                      </Text>
              </Box>
          </HStack>
          <Divider />
          <Box>
            <Text textAlign={'center'} color={'#909FA7'}  padding={{md:'0', base:'18px 4%'}}>Built with ❤️ at Sendchamp Inc. - © 2023 | All rights reserved</Text>
          </Box>
        </Container>
      </Box>
    );
  }

export default Footer