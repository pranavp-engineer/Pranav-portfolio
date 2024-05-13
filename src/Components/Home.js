import { border, Box, Text } from '@chakra-ui/react'
import React from 'react'
import { Flex } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
import "./home.css";
import { Button } from '@chakra-ui/react';

function Home() {



    return (
        <div  id="home">

            <Flex id="flex_image" width="70%" margin="auto"  alignItems="center" marginTop="180px" >



                <Box className="text_but">
                    <Text className="hello" fontWeight="750"> Hello, my name is </Text><Text className="pranav"   fontWeight="700">Pranav Purohit</Text>
                    <Flex className='full_stack' fontWeight="700" gap="8px" alignItems="center"><Text  >I'm a </Text><Text width="100%"  fontWeight="700" color="#F40A34" className="text_ani" > Full Stack Developer. </Text></Flex>

                    <a className='resume' href="https://drive.google.com/file/d/18yLCZt_B-c_hZOzPrUXYMEMtlol-pLDq/view?usp=sharing" target="_blank" > <Box position="relative" left="0%" top="40px"><Button p="20px" border="3px solid #F40A34" padding="20px 30px 20px 30px" onMouseOver={(event) => {

                        event.target.style.bg = "#f2ebe9";
                        event.target.style.color = "black";
                        event.target.style.border = "3px solid #F40A34"



                    }} onMouseOut={(event) => {

                        event.target.style.bg = "#F40A34";
                        event.target.style.color = "white";
                        event.target.style.border = "3px solid #F40A34";

                    }} fontSize="20px" bg="#F40A34" color="white" >Resume</Button></Box></a>

                </Box>
                <Box display="flex" alignItems="center" id="image_red"  >

                    {/* <Box bg="#F40A34" marginTop="50px" width="250px" height="250px" borderRadius="50%"  ></Box> */}

                    <div  style={{width:"100%", borderRadius:"50%",height:"190px",width:"190px", marginTop:"40px"}}><div style={{width:"115%"}}><img style={{ width: "100%",margin:"0px 0px 0px 10px"}} src="/pra_nn.png" alt="onee" /></div></div>

                </Box>



            </Flex>






        </div>
    )
}

export default Home