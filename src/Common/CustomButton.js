import { Button, Link } from "@chakra-ui/react";
import React from "react"; 
const CustomButton = (props)=>{
    return(
        <>
         <Button cursor='pointer'  className={props.class} borderRadius={props.radius}  border={props.border} w={props.width} h={props.height}  backgroundColor={props.bgcolor} >
        <Link href={props.href} textDecoration='none'  fontSize={props.size} color={props.color}> {props.content}</Link>
  </Button>
        
        </>
    )
}
export default  CustomButton