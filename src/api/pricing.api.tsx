import api from "./api"

export type CountryResponse ={
    id:number;
    uid:string;
    name:string;
    dial_code:string;
    currency:string;
    short_code:string;
    alpha3:string;
    Businesses:any;
    created_at:string;
    updated_at:string;
    deleted_at:any;
}
// type CountriesDataResponse = {
//     data:CountryResponse[]
// }
// CountryResponse[]
export const getCountriesData = async ():Promise<any>=>{
    const resp = await api.get('/api/v1/country/')
    // there is a better way but no time to think
    const countries= resp.data.data.flat()
    return countries
}

export type PricingType ={
    sms:{
        'dnd':string,
        'international':string,
        'non_dnd':string,
    },
    email:{
        'charge':string,
    },
    voice:string,
    whatsapp:{
        business_initiated:	string,
        incoming	:string,
        outgoing	:string,
        user_initiated	:string
    },
    verification:{
        charge:string
    }
}
// /api/v1/pricing/short_code/currency/alpha3
type getDynamicPricesProp={
    short_code:string,
    currency:string,
    alpha3:string,
}
export const getDynamicPrices = async ({short_code,currency,alpha3}:getDynamicPricesProp):Promise<PricingType>=>{
    const resp = await api.get(`/api/v1/pricing/${short_code}/${currency}/${alpha3}/`)
    return resp.data.data
}