import { Button } from "@chakra-ui/react";
import React from "react"; 
const CustomButton = (props)=>{
    return(
        <>
         <Button cursor='pointer' borderRadius={props.radius}  border={props.border} w={props.width} h={props.height} fontSize={props.size} color={props.color}  backgroundColor={props.bgcolor} >
            {props.content}
  </Button>
        
        </>
    )
}
export default  CustomButton