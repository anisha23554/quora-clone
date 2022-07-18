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
  Stack,
  Input,
  Text,
  Heading,
  StylesProvider
} from '@chakra-ui/react';
import React from 'react';
import { HamburgerIcon, CloseIcon,SearchIcon} from '@chakra-ui/icons';
import { Link as routerLink, Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import getSearchResult from '../functions/getSearchResult';

const Links = ['Ask', 'Answer', 'home'];
const routes = ['/Ask','/Answer','/home']


const NavLink = ({ children }: { children: ReactNode }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
     color:'white',
     bg:'black'
    }}
    fontSize={16}
    fontWeight={500}
    as={routerLink}
    to={routes[Links.indexOf(children)]}>
    {children}
  </Link>
);

export default function Navbar() {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const {Questions} = useSelector(state=>state)
  const questions = Questions.questions
 
  const [searchContent,setSearchContent] = useState('')
  
  const handleSearch = async()=>{
     const response = await getSearchResult(questions,searchContent)
     if(response.status==='FAILED'){
      console.log(response.message)
     }
     else{
       dispatch({
        type:'SEARCH_QUERY',
        payload:{search:true,searchResult:response}
       })
     }
     setSearchContent('')
  }
  const {Auth} = useSelector(state=>state)
  const token = Auth.token
  var username
  if(token){
     username = Auth.user.firstName+" "+Auth.user.lastName
  }
  const handleLogout = ()=>{
    const action = {
      payload:{token:null,user:null},
      type:'LOGOUT'
    }
    dispatch(action);
  }
  return (
    <>
    <Box bg={token?'black':'none'}>
      
      <Box color={'black'} px={2} 
       >
        <Flex h={20} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          {token&&<Heading fontSize={26} ml={5} color={'white'}>Quora</Heading>}
          {token&&<HStack alignItems={'center'} position={'absolute'} left={'44%'}>
            <HStack
              mt={40}
              as={'nav'}
              spacing={2}
              display={{ base: 'none', md: 'flex' }}
              color={'blue.600'}>
              {
                Links.map((link) => (
                <NavLink key={link}
                >{link}
                </NavLink>
                //  <Text color={'blue'}>{link}</Text>
              ))
              }
            </HStack>
          </HStack>
          }
          <Flex alignItems={'center'}>
            {/* <Menu> */}
              { 
                token&&
                 <Flex mr={10} alignItems={'center'}>
                  <Input 
                   onChange={(e)=>{setSearchContent(e.target.value)}}
                   value={searchContent} rounded={5} type="text" w={300} bg={'white'} h={8} color={'black'}
                   placeholder='Search Your Queries here..'></Input>
                   <Button h={7} bg={'white'} color={'gray.400'}
                     onClick={handleSearch}>
                    <SearchIcon/>
                   </Button>
                 </Flex>
              } 
              <Menu>
              {/* {(userId===null)&&<Link as={routerLink} to="/login" color={'white'}>Login</Link>} */}
              {  token &&
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
                 <Text fontSize={13} m={1} color={'white'}>{username}</Text>
                 </Flex>
              }
              <MenuList color={'black'}>
                <MenuItem as={routerLink} to={'/Profile'}>Profile</MenuItem>
                <MenuDivider></MenuDivider>
                {/* <MenuItem>Q/A by me</MenuItem> */}
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                <MenuItem as={routerLink} to={"/signup"}>Add another account</MenuItem>
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
    </Box>
   </>
  );
}