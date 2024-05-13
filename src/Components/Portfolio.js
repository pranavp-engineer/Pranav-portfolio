import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Image, Stack, Heading, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import Tard from './card'
import { Grid,GridItem } from '@chakra-ui/react'
import "./portfolio.css"

function Portfolio() {
    return (
        <Box id="work" bg='#d4f1f9'   width="100%"   >

            <Box  display="flex" justifyContent="center"  id="heading_projects" fontWeight="700" gap="12px" margin="80px 0px 60px 0px" >

                <Text>My Creative </Text><Text color="#F40A34">Projects </Text>

            </Box>
            <Box > 

            
            <Grid gap={5} overflow={'scroll'} width="80%" margin="auto" className='projects' >
                    <GridItem width={'100%'}   ><Tard title="The Horse Clone" image="https://cdn.dribbble.com/users/968354/screenshots/15379842/media/91515101f296d48f7ee9565b83e1e96e.png?compress=1&resize=400x300&vertical=top" desc="This React App Project is a Clone of The Horse Website and We have implement Redux in this App for storing Data and I Created Product and Product Description Page with CHAKRA UI where I implemented Sorting and Filtering Functionality and We fetched All Data from Server API which is deployed on Render." tech="REACT JS, REDUX, CHAKRA UI,CSS,JAVASCRIPT " view="https://thehorse.netlify.app/" gitt="https://github.com/mayankCreation0/TheHorse.com.auClone" /></GridItem>
                    <GridItem width={'100%'}  ><Tard title="Shoppers Stop Clone" image="https://sslimages.shoppersstop.com/sys-master/root/h2c/h60/28817986158622/Sponsored-Brands-Main-Banner-Msite2022-1212-NEW-SP-BRANDS-WOMPAGES--WINTER.jpg" desc="This Project is about Building a Ecommerce clothing Web App.We fetched All the Data from Server and I build Product and Admin Page where i Implement sorting and Multiple Filtering Functionality and I used server Api for Sorting and Filtering Functionality." tech="HTML, CSS, JAVASCRIPT, JSON-SERVER" view="https://shoppersstop-1.netlify.app/" gitt="https://github.com/Raghvendra2811/shoppersstop" /></GridItem>
                    <GridItem width={'100%'}  ><Tard title="Swiggy Clone" image="https://st1.bgr.in/wp-content/uploads/2022/06/Untitled-design-2022-06-03T124138.156.jpg" desc="This Project is about Building a Food Web Application.We cloned Almost All Functionality from original Swiggy App.I built Product page and Some Special Card Page where i implement Sorting and Filtering Functionality and Also made basic search bar Functionality in Card Page." tech="HTML, CSS, JAVASCRIPT" view="" gitt="" /></GridItem>

                </Grid>
            </Box>




        </Box>







    )
}

export default Portfolio