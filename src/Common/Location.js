import { AspectRatio, Box } from "@chakra-ui/react";
import React from "react";
const Location =()=>{
    return(
        <>
       <Box className="remenu" >
<AspectRatio ratio={16 / 9} style={{ overflow: 'hidden' }}>
<iframe       style={{ position: 'absolute', width: '100%', height: '400px' }}
 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.7362325878835!2d75.6387857806834!3d26.91186499993461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4df74b5e7d73%3A0x6e67163d06bd91f4!2sMadhur%20Electric%20Automation!5e0!3m2!1sen!2sin!4v1696860657273!5m2!1sen!2sin"></iframe>
</AspectRatio>
</Box>
<Box className='reslider'>
<AspectRatio ratio={16 / 9} h='0' position= 'relative' paddingBottom= '56.25%'  overflow= 'hidden'>
<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.7362325878835!2d75.6387857806834!3d26.91186499993461!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4df74b5e7d73%3A0x6e67163d06bd91f4!2sMadhur%20Electric%20Automation!5e0!3m2!1sen!2sin!4v1696860657273!5m2!1sen!2sin"></iframe></AspectRatio>
</Box>

        </>
    )
}
export default Location