import { Box } from "@chakra-ui/react"

import {
    AsyncCreatableSelect,
    AsyncSelect,
    CreatableSelect,ChakraStylesConfig,
    Select,
  } from "chakra-react-select";


const CustomSelect = ():React.ReactElement=>{
    const chakraStyles: ChakraStylesConfig = {
        dropdownIndicator: (provided, state) => ({
          ...provided,
        //   background: state.isFocused ? "blue.100" : provided.background,
          background: 'white',
        //   p: 0,
        //   w: "40px",
        }),
        'container':(provided, state) => ({...provided,background: 'white','border':'1px solid rgba(25, 125, 239, 0.658)','_hover':{'border':'2px solid rgb(25, 126, 239)'},
        'padding':'8px 1rem','width':'100%','margin':'auto','borderRadius':'10px'}),
        option:(provided,state)=>({...provided,'padding':'1rem .8rem'}),
        'menuList':(provided,state)=>({...provided,'maxW':'250px','transform':'translateX(-13px)',
    
        // right: '100px',
    }),
        // 'input':(provided, state) => ({...provided,}),
      };
    return (
       
            <Select
            chakraStyles={chakraStyles}
      
            options={[
                {
                    label: "I am red",
                    value: "i-am-red",
                  },
                  {
                    label: "I fallback to purple",
                    value: "i-am-purple",
                  },
            ]}
            selectedOptionColor={'gray.50'}
            variant="unstyled"
            // placeholder='Select option'
            />
       
    )
}

export default CustomSelect