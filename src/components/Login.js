import React from 'react';
import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
  } from '@chakra-ui/react';

import { useState} from 'react';
import loginuser from '../functions/loginuser';
import { useDispatch } from 'react-redux';

export default function SimpleCard() {
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const dispatch = useDispatch()

    const handleLogin = ()=>{
       dispatch(loginuser(email,password))
    }
      return <Flex
    minH={'100vh'}
    align={'center'}
    justify={'center'}
    bg={'blue.700'}>
    <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
      <Stack align={'center'}>
        <Heading fontSize={'4xl'} color={'whitesmoke'}>Login</Heading>
      </Stack>
      <Box
        rounded={'lg'}
        bg={'gray.100'}
        boxShadow={'lg'}
        p={8}>
        <Stack spacing={4}>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input bg={'white'} type="email" onChange={(e)=>{setemail(e.target.value)}} />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input bg={'white'} type="password" onChange={(e)=>{setpassword(e.target.value)}}/>
          </FormControl>
          <Stack spacing={10}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Link color={'blue.400'}>Forgot password?</Link>
            </Stack>
            <Button
              bg={'blue.400'}
              color={'white'}
              _hover={{
                bg: 'blue.500',
              }}
              onClick={handleLogin}>
              Sign in
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  </Flex>
 }
