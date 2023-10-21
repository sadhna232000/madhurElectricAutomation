import { Button, Link } from "@chakra-ui/react";
import React from "react"; 
import { useNavigate } from "react-router-dom";
const CustomButton = (props)=>{
    const navigate = useNavigate();

    return(
        <>
         <Button cursor='pointer' onClick={()=>navigate(props.click)} textDecoration='none !important'  fontSize={props.size}   color={props.color} className='slide-button' borderRadius={props.radius}  border={props.border} w={props.width} h={props.height}  backgroundColor={props.bgcolor} >
         <span> {props.content}</span>
        {/* <Link href={props.href} textDecoration='none !important'  fontSize={props.size} color={props.color}><span> {props.content}</span></Link> */}
  </Button>
        
        </>
    )
}
export default  CustomButton