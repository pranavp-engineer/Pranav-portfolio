import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Image, Stack, Heading, Divider, ButtonGroup, Button } from '@chakra-ui/react'
import { FaVideo } from 'react-icons/fa';
import { BsEyeFill } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"

function Tard({ title, image }) {
  return (
    <Box width={'100%'} >

      <Card w={'100%'}  bg="white"  >
        <CardBody>
          <Image
            src={image}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            h="250px"
            w={'100%'}
          />
          <Stack mt='6' spacing='3'>
            <Heading textAlign="center" size='md'>{title}</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired
              spaces, earthy toned spaces and for people who love a chic design with a
              sprinkle of vintage design.
            </Text>
            <Box display="flex" width="100%">
              <Text width="40%" color='#F40A34' fontWeight="500" fontSize="15px">
                Tech Stack:
              </Text><Text width="100%" color="grey" fontSize="1xl">
                React, Redux, Chakra Ui, JavaScript, CSS
              </Text>
            </Box>

          </Stack>
        </CardBody>
        <Divider />
        <CardFooter >
          <ButtonGroup   display={'flex'} justifyContent={'space-evenly'} width="100%" margin="auto" >
            <a><Button fontSize="30px" >
              <FaVideo />
            </Button></a>
            <a > <Button fontSize="30px" >
              <BsEyeFill />
            </Button ></a>
            <a ><Button fontSize="30px" >
              <BsGithub />
            </Button></a>

          </ButtonGroup>
        </CardFooter>
      </Card>


    </Box>
  )
}

export default Tard;