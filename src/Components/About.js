import React from 'react'


import { Box } from "@chakra-ui/react"
import { Text } from '@chakra-ui/react';
import "./about.css"

function About() {
    return (
        <Box display="flex" flexDirection="column"   id="about" >

            <Box display="flex" gap="10px" justifyContent="center" margin="75px 0px 30px 0px" >

                <Text fontSize="40px" fontWeight="700">All</Text><Text fontSize="40px" fontWeight="700" color="#F40A34">About</Text><Text fontSize="40px" fontWeight="700">Me</Text>



            </Box>

            <Box display="flex" alignItems={'center'} justifyContent={'space-between'}  width="80%" margin="auto" fontFamily="Georgia" className="about_text"  >
                <Box width="100%"><img style={{ width: "100%" }}  src="https://camo.githubusercontent.com/7de37139d0b4c1ce40865e799b446c0e963a3dd8fb68d239707237c40604fa3d/68747470733a2f2f63646e2e6472696262626c652e636f6d2f75736572732f3733303730332f73637265656e73686f74732f363538313234332f6176656e746f2e676966" alt="one" /></Box>
                <Box w="100%" fontSize="19px" fontWeight="545" >

                    <ul style={{ display: "flex", flexDirection: "column", gap: "18px" }}>

                    
                        <li>Software Engineer Inclined towards FrontEnd Technologies 🚀 (Not limited to UI) with a keen interest in exploring fundamental Engineering Concepts.</li>

                        <li>I'm Passionate Developer,I Enjoy Creating things that Live on Internet, I have  Strong Problem Solving and Communication Skills, able to write  Clean , Efficient and Optimised Code.</li>
                        <li>I have hands-on Experience in Frontend and Backend Technology with Good Command on Data Structures and Algorithm.</li>
                    </ul>

                </Box>


            </Box>

        </Box>
    )
}

export default About