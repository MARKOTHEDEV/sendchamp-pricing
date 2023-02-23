import {
    Box,
    Heading,
    Container,
    Text,
    Button,
    Stack,
   
  } from '@chakra-ui/react';
  
  export default function CallToActionWithAnnotation() {
    return (
      <Box className='build'>
        <Container maxW={'3xl'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 12 }}
            py={{ base: 20, md: 32 }}>
            <Heading
              textAlign={'center'}
              fontFamily={'HafferXH,sans-serif'}
              fontWeight={700}
              fontSize={{ base: '30px', sm: '28px', md: '36px' }}
              lineHeight={'110%'}>
              Start building better communication <br /> experience with Sendchamp
            </Heading>
            <Text
            textAlign={'center'}
            lineHeight={'32px'}
            fontSize={{ base: '20px', sm: '1rem', md: '18px' }}
            fontFamily={'DM Sans'}
            color={'#000000'}>
            Access a platform that is modernizing communications and making it <br />
            possible for your customers to communicate with your business the same <br />
             way they do with their friends and family.
            </Text>
            <Stack
              direction={'row'}
              spacing={3}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}>
              <Button
                color={'#fff'}
                bg={'#197EEF'}
                rounded={'12px'}
                px={8}
                py={8}
                _hover={{
                  bg: '#3375B9',
                }}>
                Start for free
              </Button>
              <Button
               
                bg={'#fff'}
                color='#000'
                rounded={'12px'}
                border='1px solid black'
                px={8}
                py={8}
                >
                Talk to sales
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    );
  }
  