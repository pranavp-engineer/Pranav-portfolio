import React from 'react'
import { Grid, GridItem,Box,Text } from '@chakra-ui/react';
function Contact() {
  return (

<Box display="flex" marginTop="-120px" marginBottom="50px" flexDirection="column" textAlign="center" gap="20px" fontWeight="700"  id="contact" >

      <Text color="#F40A34" fontSize="35px"  >Get in Touch</Text>
      <Text fontSize="20px" >I'm actively looking for any new opportunities, in full-stack web development.</Text>
      <Text fontSize="20px">Email:adi089076@gmail.com</Text>
      <Text fontSize="20px">Mobile: +91-9981687137 </Text>
      <Text fontSize="20px">Location:Indore, Madhya Pradesh, India</Text>
<Box display="flex" gap="50px" alignItems="center" justifyContent="center">

  <a href="mailto:adi089076@gmail.com">
   <img  src="https://github.com/AnupKamble/AnupKamble/blob/main/mail.png?raw=true" width="32px"  />
  </a>
  <a href="https://www.linkedin.com/in/engineerpranav/">
    <img src="https://cdn.icon-icons.com/icons2/3685/PNG/512/linkedin_logo_icon_229309.png" width="28px" />
  </a>
  <a href="https://github.com/engineerpranav">
    <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" width="32px" />
  </a>
  </Box>    
  
   <br/>


 

<hr/>

</Box>

    
  )
}

export default Contact