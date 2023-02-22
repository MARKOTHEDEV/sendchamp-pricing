import { Box, Heading  ,Stack,Text} from "@chakra-ui/react"
import CustomSelect from "./CustomSelect"





const HeroSection = ():React.ReactElement=>{
    return (
        <Box bg={'#EFF4FE'} height={['60vh']} border={'1px solid red'} w={'100%'}>
            <Box textAlign={'center'} color={'thickText'} maxW={'500px'} m={'auto'}>
                <Heading as={'h1'} size={['2xl','3xl','3xl']} fontWeight={['semibold']}>
                Pricing for every business 
                </Heading>
                <br/>
                <Text px={'2rem'} fontSize={'1rem'} fontWeight={'medium'}>
                No hidden fees or charges - simple & flexible pricing that fits with your business at any stage
                </Text>
                <br />
                <Stack spacing={'10px'}
                w={['300px','300px','100%']}
                 direction={['column','column','row']}  m={'auto'}> 
                    <CustomSelect/>
                    <CustomSelect/>
                </Stack>
            </Box>
        </Box>  
    )
}

export default HeroSection