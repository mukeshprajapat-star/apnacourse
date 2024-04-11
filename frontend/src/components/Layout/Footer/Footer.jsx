import { VStack,Box,Heading,Stack, HStack} from '@chakra-ui/react'
import React from 'react'
import  {TiSocialFacebookCircular,TiSocialInstagramCircular} from "react-icons/ti"
import { DiGithub } from 'react-icons/di'

const Footer = () => {
  return (
    <div>
        <Box padding={'4'} bg="blackAlpha.900" minH={'10vh'}>
            <Stack direction={["colomn","row"]}>
                <VStack alignItems={["center","flex-start"]} width="full">
                    <Heading children=" All Right Reserved" color={"white"}/>
                    <Heading children="@mukesh prajapat" fontFamily={'body'} size={'sm'} color={'yellow.400'}/>
                    </VStack> 
                    <HStack spacing={["2","10"]} justifyContent="center" color={"yellow.400"} fontSize={'50'}>
                        <a href="https://www.facebook.com/mukesh.mukeshprajapat.1848/"  target={'blank'}>
                            <TiSocialFacebookCircular/>
                        </a>
                        <a href="https://www.instagram.com/__mukesh__404/" target={'blank'}>
                            <TiSocialInstagramCircular/>
                        </a>
                        <a href="https://github.com/mukeshprajapat-star"  target={'blank'}>
                            <DiGithub/>
                        </a>

                    </HStack>

            </Stack>

        </Box>
    </div>
  )
}

export default Footer