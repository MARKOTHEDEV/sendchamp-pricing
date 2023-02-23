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
      <Box className='startUp' bg={'#eff4fe'}>
        <Container maxW={'3xl'}>
          <Stack
            as={Box}
            textAlign={'center'}
            spacing={{ base: 8, md: 12 }}
            py={{ base: 20, md: 32 }}>
            <Heading
              fontFamily={'HafferXH,sans-serif'}
              fontWeight={700}
              fontSize={{ base: '28px', sm: '28px', md: '36px' }}
              lineHeight={'110%'}>
              Sendchamp for Startups
            </Heading>
            <Text
            fontSize={{ base: '20px', sm: '28px', md: '18px' }}
            fontFamily={'DM Sans'}
            color={'#000000'}>
            Apply for $1,000 in credits, if you are a startup that is less
            than 3 years old <br /> with less than $500k in total funding.
            </Text>
            <Stack
              direction={'column'}
              spacing={3}
              align={'center'}
              alignSelf={'center'}
              position={'relative'}>
              <Button
                colorScheme={'green'}
                bg={'#197EEF'}
                rounded={'12px'}
                px={8}
                py={8}
                _hover={{
                  bg: '#3375B9',
                }}>
                Apply now
              </Button>
            </Stack>
          </Stack>
        </Container>
      </Box>
    );
  }
  