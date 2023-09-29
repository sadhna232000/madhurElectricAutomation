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
// border-bottom : 1px dashed grey;
    font-size: 13px;
    font-weight: 400;
    letter-spacing:1px;
    font-family: system-ui ;
    color: #808080;
   text-transform:uppercase;
           text-decoration:none !important;
            cursor:pointer;
`
export const Head =styled(Heading)`
color='#fff'
font-size='20px'
font-weight='700'
text-transform='uppercase'


`