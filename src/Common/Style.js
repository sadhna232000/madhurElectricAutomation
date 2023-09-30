import { Box, Heading, Link, Text, } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Content = styled(Text)`
  color: #fff;
  font-size: 14px;
  font-family: sans-serif;
  font-weight: 500;
`;
export const Top = styled(Link)`
// &_active {
//   border-bottom: 3px solid orange;
//   font-weight: 600;
//   color: #000;
// }
&:hover {
  border-radius:50px!important;
  color:#fff !important;
  background-color:#bd0000 !important;
  padding:7px 15px!important;
  
}
// &:hover {
//   border-bottom: 3px solid orange;
//   font-weight: 600;
//   color: #000;
// }
color: #333333;
    font-size: 14px;
    font-weight: 600;
    padding:7px 15px !important;

    font-family: system-ui ;
          
           text-decoration:none !important;
            cursor:pointer;
                                   
`
export const Label=styled(Link)`
border-bottom : 1px dashed darkgray;
    font-size: 14px;
    padding-bottom:5px;
    font-weight: 500;
    letter-spacing:1px;
    font-family: sans-serif ;
    color: #808080;
           text-decoration:none !important;
            cursor:pointer;
`
export const Head =styled(Heading)`
color:#fff !important;
font-size:42px;
font-weight:600;
font-family:sans-serif;
text-transform:uppercase;
`
export const MedHeading= styled(Text)`
color:#333333;
font-size:23px;
font-family:sans-serif;

`
export const Parcontent =styled(Text)`
font-size:14px;
font-family:sans-serif;
line-height:25px;
`
export const Product =styled(Box)`

background: #f8f8f8 ;
border:1px solid #f1f1f1;
color:#111111;
font-weight:500'

padding: 11px 15px;
font-size:17px;
font-family:sans-serif;
letter-spacing:1px;
`