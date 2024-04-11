import React from 'react';
import {
  Avatar,
  Container,
  Heading,
  Stack,
  VStack,
  Text,
  Button,
  HStack,
  Box
} from '@chakra-ui/react';
import mp from "../../assets/images/mk.jpg"
import { Link } from 'react-router-dom';
import introVideo from '../../assets/videos/Cutout Cartoon.mp4';
import { RiSecurePaymentFill } from 'react-icons/ri';

export const Founder = () => (
  <Stack direction={['column', 'row']} spacing={['4', '16']} padding={'8'}>
    <VStack>
      <Avatar src={mp} boxSize={['40', '48']} />
      <Text children="Co-Founder" opacity={0.7} />
    </VStack>
    <VStack justifyContent={'center'} alignItems={['center', 'flex-start']}>
      <Heading children="Mukesh Prajapat" size={['md', 'xl']} />
      <Text
        textAlign={['center', 'left']}
        children={`I am Full Stack Developer Our mission is to privide qualitycontent at reasonable price `}
      />
    </VStack>
  </Stack>
);
const VideoPlayer = () => (
    <div className='container3'>
  <video
    autoPlay
    loop
    muted
    src={introVideo}
    controlsList="nodownload noremoteplayback nofullscreen"
    controls
    disablePictureInPicture
    disRemotePlayBack
  />
  </div>
);
const TandC=()=>(
    <Box>
        <Heading children="Term & Condition"  textAlign={["center","left"]} size={'md'} my="4"/>
    <Box h="sm" p="4" overflowY={"scroll"}>
        <Text letterSpacing={"widest"} fontFamily={"heading"} textAlign={["center","left"]}>{'termAndCondition'}</Text>
        <Heading my ='4'  size="xs" children="Refund Only applicable for cancellation within 7 days."/>
    </Box>
    </Box>

)


const About = () => {
  return (
    <div>
      <Container maxW={'container.lg'} padding={'16'} boxShadow={'lg'}>
        <Heading children="About Us" textAlign={['center', 'left']} />
        <Founder />
        <Stack direction={['column', 'row']} alignItems="center" m="8">
          <Text fontFamily={'cursive'} m="8" textAlign={['center', 'left']}>
            we are video streaming platform with some premium courses availble
            only for primium users.
          </Text>
          <Link to="/subscribe">
            <Button colorScheme="yellow">Check Out Plan </Button>
          </Link>
        </Stack>
        <VideoPlayer />

        <TandC termAndCondition={'ternAndCondition'}/>

        <HStack my={'4'} p={'4'}>
          <RiSecurePaymentFill />
          <Heading
            size={'xs'}
            fontFamily="sans-serif"
            textTransform="uppercase"
            children={'Payment is secured by Razorpay'}
          />
        </HStack>
      </Container>
    </div>
  );
};

export default About;
