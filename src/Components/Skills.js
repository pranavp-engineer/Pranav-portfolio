import React from 'react'
import { Box,Text } from '@chakra-ui/react'

function Skills({ skill }) {


    return (
        <Box id="skills"   >
            

            <Box w="100%" h="100%" >

                <img src={skill} style={{ width: "100%" ,height:"100%" }} />

            </Box>

        </Box>
    )
}

export default Skills