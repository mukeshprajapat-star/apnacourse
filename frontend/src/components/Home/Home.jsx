import { Stack,VStack ,Button,Text,Heading,Image,Box, HStack} from '@chakra-ui/react'
import React from 'react'
import vg from "../../assets/images/bg1.jpg"
import {CgGoogle,CgYoutube} from 'react-icons/cg'
import {DiAws} from 'react-icons/di'
import {SiCoursera,SiUdemy} from 'react-icons/si'
import {Link} from 'react-router-dom'
import './home.css'
import introVideo from "../../assets/videos/Cutout Cartoon.mp4"

const Home = () => {
  return (
    <section className='home'>
        <div className='container'>
            <Stack
            direction={['column','row']}
            height="100%"
            justifyContent={['center','space-between']}
            alignItems="center"
            spacing={['16','56']}
            >
            <VStack width={['full']} alignItems={['center','flex-end']} spacing="8">
                <Heading children="LEARN FROM THE  EXPERTS " size={'2xl'}/>
                <Text fontFamily="cursive" fontSize="2xl" textAlign={["center","left"]} children=" Find Valueable Content at Reasonable Price "/>
                <Link to="/courses">
                <Button size={'lg'} colorScheme='yellow'>Explore Now </Button>
                </Link>
            </VStack>
            <Image className='vector-graphics' boxSize={'md'} src={vg} objectFit="contain"/>
            </Stack>
        </div>
        <Box padding={'8'} bg="blackAlpha.700">
            <Heading children="OUR BRANDS" textAlign={"center"} fontFamily="body" color={"yellow.400"} />
        
        <HStack className='brandsBanner' justifyContent={'space-evenly'} marginTop='4'>
            <CgGoogle/>
            <CgYoutube/>
            <DiAws/>
            <SiCoursera/>
            <SiUdemy/>

        </HStack>
        </Box>
        <div className='container2'>
            <video 
            src={introVideo}
            controlsList="nodownload noremoteplayback nofullscreen"
            controls
            disablePictureInPicture
            
            />
        </div>


    </section>
    )
}

export default Home