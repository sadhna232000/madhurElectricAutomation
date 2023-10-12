import { Button, Link } from "@chakra-ui/react";
import React from "react"; 
const CustomButton = (props)=>{
    return(
        <>
         <Button cursor='pointer'  className='slide-button' borderRadius={props.radius}  border={props.border} w={props.width} h={props.height}  backgroundColor={props.bgcolor} >
        <Link href={props.href} textDecoration='none !important'  fontSize={props.size} color={props.color}><span> {props.content}</span></Link>
  </Button>
        
        </>
    )
}
export default  CustomButton