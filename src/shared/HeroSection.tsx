import { Box, Heading  ,Stack,Text} from "@chakra-ui/react"
import { CountryResponse, getCountriesData, getDynamicPrices, PricingType } from "../api/pricing.api"
import CustomSelect from "./CustomSelect"
import { useMutation, useQuery  } from 'react-query'
import { useEffect, useState } from "react"





const HeroSection = ():React.ReactElement=>{
    
    const [selectedcountry,setSelectedCountry] = useState<CountryResponse|null>()
    const [selectedCountryCurrency,setSelectedCountryCurrency] = useState<CountryResponse|null>()
    const {data,isLoading} = useQuery('countries',getCountriesData)
    const [pricing,setPricing] = useState<PricingType>()
    const {isLoading:loading,mutate} = useMutation(getDynamicPrices,{
        'onSuccess':(data)=>{
            console.log({'resultOF':data})
            if(data){
                setPricing(data)
            }
        },
        'onError':(error)=>{
            console.log({error})
        }
    })

    useEffect(()=>{
        if(!selectedcountry && !selectedCountryCurrency){
            mutate({
                'alpha3':'NGA',
                'currency':'NGN',
                'short_code':'NG'
            })
        }else{
            mutate({
                'alpha3':selectedCountryCurrency?.alpha3?selectedCountryCurrency.alpha3:'NGA',
                'currency':selectedCountryCurrency?.currency?selectedCountryCurrency.currency:'NGN',
                'short_code':selectedCountryCurrency?.short_code?selectedCountryCurrency.short_code:'NG'
            })  
        }
    },[selectedCountryCurrency,selectedcountry])
    
    return (
        <Box bg={'#EFF4FE'} height={['70vh','70vh','65vh']}  w={'100%'}>
            <Box textAlign={'center'} color={'thickText'} maxW={'500px'} m={'auto'}>
                <Heading as={'h1'} size={['2xl','3xl','3xl']} fontWeight={['semibold']}>
                Pricing for every business 
                {isLoading?<h1>Loadin</h1>:''}
                </Heading>
                <br/>
                <Text px={'2rem'}pb={['1.5rem','1.5rem','1.5rem']}  fontSize={'1rem'} fontWeight={'medium'}>
                No hidden fees or charges - simple & flexible pricing that fits with your business at any stage
                </Text>
                <br />
                <Stack spacing={'10px'}
                w={['300px','300px','100%']}
                 direction={['column','column','row']}  m={'auto'}> 
                    <CustomSelect 
                    onChange={({value})=>{
                        // console.log(value)
                        setSelectedCountry(JSON.parse(value))
                    }}
                    defualt="Nigeria" options={data?data.map((data:any)=>({'label':data.name,'value':JSON.stringify(data)})):[]}/>

                    <CustomSelect 
                    defualt="Nigeria - NGN"
                    options={data?data.map((data:any)=>({'label':`${data.name} - ${data.currency}`,'value':JSON.stringify(data)})):[]}
                    onChange={({value})=>{
                        setSelectedCountryCurrency(JSON.parse(value))
                    }}
                    />
                </Stack>
            </Box>
        </Box>  
    )
}

export default HeroSection