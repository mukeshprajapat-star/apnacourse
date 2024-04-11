import React from 'react'
import { ColorModeSwitcher } from '../../../ColorModeSwitcher'
import {RiDashboardFill, RiLogoutBoxLine, RiMenu5Fill} from 'react-icons/ri'
import { Button, Drawer, DrawerBody, DrawerContent, DrawerOverlay, DrawerHeader, useDisclosure, VStack,HStack} from '@chakra-ui/react'
import {Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '../../../redux/actions/user'


const LinkButton=({url= '/',title='Home',onClose})=>(
    <Link onClick={onClose} to ={url}>
    <Button variant={'ghost'}>{title}</Button>
    </Link>
);
const Header = ({isAuthenticated,user}) => {
    const {isOpen,onClose,onOpen}=useDisclosure();

    // const user={
    //     role:"admin"
    // }
    const dispatch=useDispatch();

    const logoutHandler=()=>{
        onClose();
        dispatch(logout())
    }

  return (
    <>
    <ColorModeSwitcher/>
    <Button zIndex={"overlay"} onClick={onOpen} colorScheme={'yellow'} width='12' height={'12'} rounded="full" position={'fixed'} top='6' left='6'><RiMenu5Fill/></Button>
    <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay backdropBlur={'blur(3px)'}>
        <DrawerContent>
            <DrawerHeader borderBottomWidth={'1px'}>COURSE BUNDLER</DrawerHeader>
            <DrawerBody>
                <VStack spacing={'5'} alignItems='flex-start'>
                    <LinkButton onClose={onClose} url="/" title="Home"/>
                    <LinkButton onClose={onClose} url="/courses" title="All Courses"/>
                    <LinkButton onClose={onClose} url="/request" title="Request a Course"/>
                    <LinkButton onClose={onClose} url="/contact" title="Contact"/>
                    <LinkButton onClose={onClose} url="/about" title="About"/>
                </VStack>
                <HStack justifyContent={'space-evenly'} position="absolute" bottom={'2rem'}  width='80%'>
                    {isAuthenticated ? 
                    (
                    <>
                    <VStack>
                        <HStack>
                            <Link to='/profile'>
                            <Button  onClick={onClose} colorScheme={'yellow'}>Profile</Button>
                            </Link>
                            
                            <Button onClick={logoutHandler} variant={'ghost'}><RiLogoutBoxLine style={{margin:'5px'}}/>Logout</Button>
                            
                            </HStack>
                            {user && user.role ==="admin" && (
                                <Link to="/admin/dashboard">
                                    <Button colorScheme={'purple'} variant={'ghost'}><RiDashboardFill style={{margin:'5px'}}/>Dashboard</Button>
                                </Link>
                            )}
                    </VStack>

                    </>
                    ):(
                    <>
                    <Link onClick={onClose} to ='/login'>
                    <Button colorScheme={'yellow'}>Login</Button>
                    </Link>
                    <p>OR</p>
                    <Link onClick={onClose} to='register'>
                    <Button>Sign Up </Button>
                    </Link>
                    </>
                    )}


                </HStack>

            </DrawerBody>

        </DrawerContent>
        </DrawerOverlay>

    </Drawer>
    </>
  )
}

export default Header