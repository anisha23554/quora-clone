import {
    Heading,
    Avatar,
    Box,
    Center,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  
  export default function UserInfoCard(props) {
    //   props={details:{}}
    return (
      <Center>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          rounded={'md'}
          >
      <Flex alignItems={'center'} pt={2} flexDirection={'column'} paddingBottom={2}>
            <Avatar h={12} w={12} name={props.details.username} />
            <Stack align={'center'} mb={4}>
              <Heading pt={2} fontSize={15} fontWeight={600} fontFamily={'body'}>
                {props.details.username}
              </Heading>
              {/* <Text color={'gray.500'}>Frontend Developer</Text> */}
            </Stack>
           <Flex flexDirection={'column'} paddingLeft={10} paddingRight={10}>
            <Stack direction={'row'}>
              {/* <Stack spacing={0} align={'center'}> */}
                <Text fontSize={'sm'} color={'gray.700'} fontWeight={500}>
                  email:
                </Text>
              {/* </Stack> */}
              {/* <Stack spacing={0} align={'center'}> */}
                <Text fontWeight={400} color={'gray.600'} fontSize={'sm'}>
                    {props.details.email}</Text>
              {/* </Stack> */}
            </Stack>
            <Stack direction={'row'}>
              {/* <Stack spacing={0} align={'center'}> */}
                <Text fontSize={'sm'} color={'gray.700'} fontWeight={500}>
                  followers:
                </Text>
              {/* </Stack> */}
              {/* <Stack spacing={0} align={'center'}> */}
                <Text fontWeight={400} color={'gray.600'} fontSize={'sm'}>
                    {props.details.followers}</Text>
              {/* </Stack> */}
            </Stack>
            </Flex>
            <Button
              mt={5}
              bg={useColorModeValue('#151f21', 'gray.900')}
              color={'white'}
              rounded={'md'}
              fontSize={12}
              h={6}
              bg={'blue.700'}
              w={70}
              mb={1}
              >
              Follow
            </Button>
          </Flex>
        </Box>
      </Center>
    );
  }