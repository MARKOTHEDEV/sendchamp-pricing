import { Box, Flex, Heading,HStack,Text } from "@chakra-ui/react"

import {BiMessageAltDetail} from 'react-icons/bi'


export const IConDisplay = ():React.ReactElement=>{
    return (
        <Box bg={'#197eef'} maxW={'300px'} margin='auto' color={'white'} display='inline-block' p={'1.3rem'} borderRadius='15px'>
            <BiMessageAltDetail fontSize={'1.5rem'}/>
        </Box>
    )
}

export const LightText = ():React.ReactElement=>(
<Text color='mainBlue' fontSize={'.8rem'}  bg={'#edf5fe'} fontWeight='medium' padding='0 .8rem'  pb={'.1rem'} borderRadius='15px'>
    Coming Soon</Text>)


const InfoCard = ():React.ReactElement=>{


    return (
        <Box  maxW={['100%','100%','100%']} bg={'white'}  overflow={'hidden'} margin={['auto','unset','unset']} border={'1px solid rgba(25, 125, 239, 0.658)'} borderRadius={'10px'}>
            <Box  p={'2rem 1.2rem' } pb={'2rem'}>
            <IConDisplay/>
            <Heading mt={'10px'} mb={'15px'}  fontSize={['1xl','1.3rem']}>
            SMS
            </Heading>

            <Flex justifyContent={'space-between'} color='#1a202c' >
                <Text  fontWeight='medium'>
                To Send SMS
                </Text>
                <Text>
                To Send SMS
                </Text>
            </Flex>
            <Flex  mt={'10px'} justifyContent={'space-between'}
            alignItems='center'
            color='#1a202c' >
                <Text>
                    <strong>NGN 3.0870</strong>/sms
                </Text>

                <LightText/>
            </Flex>
            </Box>
        <br />
        <br />
        <br />
            <Box borderTop={'1px solid rgba(25, 125, 239, 0.658)'} >
                    <Text _hover={{
                        'bg':'#edf5fe'
                    }}textAlign={'center'} pt={'1.5rem'} pb={'1.5rem'} fontSize={'1xl'} color='#197eef' fontWeight={'semibold'} textDecor='underline'>
                        More Details
                    </Text>
            </Box>
        </Box>
    )
}

export default InfoCard