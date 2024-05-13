import { Box, Button, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import { Text } from '@chakra-ui/react'
import { useNavigate } from 'react-router'


function Navbar() {

    let navigate = useNavigate();

    return (
        <Flex fontSize="35px" width="100%" margin="auto" bg="#d4f1f9" p="10px" alignItems="center" position="fixed" top="0px" zIndex="1000" id="navbar" >
            <Box display="flex" width="100%"><Text fontWeight="800" fontFamily="Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif">PRA</Text><Text fontWeight="800" fontFamily="Calibri, Candara, Segoe, Segoe UI, Optima, Arial, sans-serif" color="#F40A34">NAV</Text></Box>
            <Spacer />
            <Box display="flex"  gap="13px" width="100%">

                <a href="#home"> <Button fontSize="16px" fontFamily="Arial, Helvetica Neue, Helvetica, sans-serif" p="20px" colorScheme="none" textColor="black" onMouseOver={(event) => {

                    event.target.style.backgroundColor = "#F40A34"
                    event.target.style.color = "#f2ebe9"





                }} onMouseOut={(event) => {

                    event.target.style.backgroundColor = "#d4f1f9"
                    event.target.style.color = "black"




                }} transitionProperty="background-Color" transitionDuration="0.4s" transitionTimingFunction="linear" onClick={() => {



                }} >HOME</Button></a>


                <a href="#about"> <Button fontSize="16px" fontFamily="Arial, Helvetica Neue, Helvetica, sans-serif" p="20px" colorScheme="none" textColor="black" onMouseOver={(event) => {

                    event.target.style.backgroundColor = "#F40A34"
                    event.target.style.color = "#f2ebe9"




                }} onMouseOut={(event) => {

                    event.target.style.backgroundColor = "#d4f1f9"
                    event.target.style.color = "black"




                }} transitionProperty="background-Color" transitionDuration="0.4s" transitionTimingFunction="linear" onClick={() => {



                }} >ABOUT</Button></a>

                <a href="#work"><Button fontSize="16px" fontFamily="Arial, Helvetica Neue, Helvetica, sans-serif" p="20px" colorScheme="none" textColor="black" onMouseOver={(event) => {

                    event.target.style.backgroundColor = "#F40A34"
                    event.target.style.color = "#f2ebe9"




                }} onMouseOut={(event) => {

                    event.target.style.backgroundColor = "#d4f1f9"
                    event.target.style.color = "black"




                }} transitionProperty="background-Color" transitionDuration="0.4s" transitionTimingFunction="linear"  >WORK</Button></a>
                <a href="#skills"> <Button fontSize="16px" fontFamily="Arial, Helvetica Neue, Helvetica, sans-serif" p="20px" colorScheme="none" textColor="black" onMouseOver={(event) => {

                    event.target.style.backgroundColor = "#F40A34"
                    event.target.style.color = "#f2ebe9"




                }} transitionProperty="background-Color" transitionDuration="0.4s" transitionTimingFunction="linear" onMouseOut={(event) => {

                    event.target.style.backgroundColor = "#d4f1f9"
                    event.target.style.color = "black"




                }} >SKILLS</Button></a>
                <a href="#contact"> <Button fontSize="16px" fontFamily="Arial, Helvetica Neue, Helvetica, sans-serif" p="20px" colorScheme="none" textColor="black" onMouseOver={(event) => {

                    event.target.style.backgroundColor = "#F40A34"
                    event.target.style.color = "#f2ebe9"




                }} onMouseOut={(event) => {

                    event.target.style.backgroundColor = "#d4f1f9"
                    event.target.style.color = "black"




                }} transitionProperty="background-Color" transitionDuration="0.4s" transitionTimingFunction="linear"  >CONTACT</Button></a>

                <a href="https://drive.google.com/file/d/1C0ccYqjAnpCux-kjXuLTcvWbOMXn3KxG/view?usp=share_link" target="_blank"> <Button fontSize="16px" fontFamily="Arial, Helvetica Neue, Helvetica, sans-serif" p="20px" colorScheme="none" textColor="black" onMouseOver={(event) => {

                    event.target.style.backgroundColor = "#F40A34"
                    event.target.style.color = "#f2ebe9"




                }} onMouseOut={(event) => {

                    event.target.style.backgroundColor = "#d4f1f9"
                    event.target.style.color = "black"




                }} transitionProperty="background-Color" transitionDuration="0.4s" transitionTimingFunction="linear"  >RESUME</Button></a>

            </Box>
        </Flex>
    )
}

export default Navbar