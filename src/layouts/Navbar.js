import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
  Text,
  Heading
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon} from '@chakra-ui/icons';
import { Link as routerLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { urlencoded } from 'express';

const Links = ['Home', 'Answer', 'Q/A'];
const routes = ['/home','/Answer','/QuestionAns']


const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
     color:'cyan'
    }}
    as={routerLink}
    to={routes[Links.indexOf(children)]}>
      {children}
  </Link>
);

export default function Navbar() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {userId} = useSelector(state=>state.Auth);
  let firstName;
  if(userId){
    const users = JSON.parse(localStorage.getItem("users"))
    const user = users.find(user=>user.userId === userId)
    firstName=user.firstName
  }
  else{
     firstName=null
  }
  const handleLogout = ()=>{
    const action = {
      payload:{token:null,userId:null},
      type:'LOGOUT'
    }
    dispatch(action);
  }
  return (
    <>
      <Box color={'black'} px={4} 
       >
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          {userId&&<Heading fontSize={30}>Quora</Heading>}
          <HStack alignItems={'center'} position={'absolute'} left={'44%'}>
            <HStack
              as={'nav'}
              spacing={2}
              display={{ base: 'none', md: 'flex' }}>
              {Links.map((link) => (
                <NavLink key={link}
                // _hover={{bg:'none'}}
                >{link}
                </NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              { 
                userId&&
                 <Flex>
                  <Input rounded={5} type="text" w={300} bg={'white'} h={8} color={'black'}
                   placeholder='Search Your Queries here..'></Input>
                   {/* <SearchIcon /> */}
                 </Flex>
              } 
              {/* {(userId===null)&&<Link as={routerLink} to="/login" color={'white'}>Login</Link>} */}
             {
               (userId)&&<Button m={5} h={8} width={150} as={routerLink} to="/signup"
                bg={'whitesmoke'} color={'black'}>Sign Up</Button>
             }
              {  userId &&
                  <Flex flexDirection={'column'} justifyContent={'space-between'}>
                  <MenuButton
                   as={Button}
                   rounded={'full'}
                   variant={'link'}
                   cursor={'pointer'}
                   minW={0}>
                   <Avatar
                   size={'sm'}
                   src={
                  'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdesignbundles.net%2Fkant-store%2F1279109-user-icon-human-person-symbol-social-profile-icon-&psig=AOvVaw3aV4nYlA0lPY-QI190gpCL&ust=1640692780726000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICEppL3g_UCFQAAAAAdAAAAABAR'  
                   } 
                   /> 
                 </MenuButton>
                 <Text fontSize={13}>{firstName}</Text>
                 </Flex>
              }
              <MenuList color={'black'}>
                <MenuItem as={routerLink} to={'/Profile'}>Profile</MenuItem>
                <MenuDivider></MenuDivider>
                {/* <MenuItem>Q/A by me</MenuItem> */}
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}