import { Box } from "@chakra-ui/react"

import {
    AsyncCreatableSelect,
    AsyncSelect,
    CreatableSelect,ChakraStylesConfig,
    Select,
  } from "chakra-react-select";

type Prop ={
  defualt:string,
  options:{'label':string,'value':string}[],
  onChange:(value:any)=>void

}
const CustomSelect = ({defualt,options,onChange}:Prop):React.ReactElement=>{
    const chakraStyles: ChakraStylesConfig = {
        dropdownIndicator: (provided, state) => ({
          ...provided,
        //   background: state.isFocused ? "blue.100" : provided.background,
          background: 'white',
        //   p: 0,
        //   w: "40px",
        }),
        'container':(provided, state) => ({...provided,background: 'white','border':'1px solid rgba(25, 125, 239, 0.658)','_hover':{'border':'2px solid rgb(25, 126, 239)'},
        'padding':'8px 1rem','width':'100%','margin':'auto','borderRadius':'10px',}),
        option:(provided,state)=>({...provided,'padding':'1rem .8rem'}),
        'menuList':(provided,state)=>({...provided,'maxW':'250px','transform':'translateX(-13px)',}),
        'valueContainer':(provided,state)=>({...provided,'fontSize':'1.4rem'})

        // 'input':(provided, state) => ({...provided,}),
      };
    return (
       
            <Select
            chakraStyles={chakraStyles}
            defaultInputValue={defualt}
            options={options}
            selectedOptionColor={'gray.50'}
            onChange={(newValue:any)=>{
              onChange(newValue)
            }}
            variant="unstyled"
            // placeholder='Select option'
            />
       
    )
}

export default CustomSelect