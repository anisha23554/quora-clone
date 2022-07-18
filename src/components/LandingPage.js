import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Heading,
  } from '@chakra-ui/react';
import React from 'react';
import {Link as routerlink} from "react-router-dom"
  export default function WithBackgroundImage() {
    return (
      <Flex
        w={'full'}
        h={'100vh'}
        // backgroundImage={'url(https://detecta.io/sites/default/files/feature-5.png)'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        // backgroundRepeat={'no-repeat'}
        opacity={'80%'}
        alignItems={'center'}
        >
        <VStack
          w={'full'}
          position={'absolute'}
          top={{base:100,md:200}}
          px={useBreakpointValue({ base: 4, md: 8 })}>
          <Stack 
          // maxW={'2xl'}
           spacing={14}
           alignItems={'center'} 
           >
            <Heading fontSize={60} color={'blue.600'}>Quora</Heading>
            <Flex flexDirection={'column'} alignItems={'center'} h={100}  
            justifyContent={'space-between'}>
            <Text
              color={'black'}
              fontStyle={'italic'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={{ base: 20, md: 25}}
              textAlign={{base:'center'}}
             >
              A platform to gain and share knowledge...
            </Text>
            <Stack direction={'row'}>
              <Button
                bg={'green'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'black' }}
                as={routerlink}
                to={'/signup'}
                border={'2px solid gray'}
                >
                signup
              </Button>
              <Button
                bg={'blue'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'black'}}
                as={routerlink}
                to={'/login'}
                border={'2px solid gray'}
                >
                login
              </Button>
            </Stack>
            </Flex>
          </Stack>
        </VStack>
      </Flex>
    );
  }