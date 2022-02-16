// import { useSelector } from "react-redux";

// const UserProfile = () => {
//     const {userId} = useSelector(state=>state.Auth)
//     const users = JSON.parse(localStorage.getItem("users"))
//     const user = users.find(user=>user.userId === userId)
//     console.log(user.email)
//     return ( 
//         <>
//           {/* display user details: user.email,user.password,user.firstName,user.lastName */}
         
//         </>
//     );
// }
 
// export default UserProfile;
import { useSelector } from "react-redux";
import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export default function UserProfile() {
  const {userId} = useSelector(state=>state.Auth)
  const users = JSON.parse(localStorage.getItem("users"))
  const user = users.find(user=>user.userId === userId)
  return (
    <Center py={6}>
      <Flex flexDirection={'column'} alignItems={'center'} bg={'whitesmoke'}>
      <Image src={'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png'} 
         m={1}  h={150} width={150}></Image>
      <Heading marginBottom={8} fontSize={'2xl'} fontFamily={'body'}>
            {user.firstName+" "+user.lastName}
      </Heading>
      <Stack
        borderWidth="1px"
        borderRadius="lg"
        w={{ sm: '100%', md: '540px' }}
        height={{ sm: '500px', md: '20rem' }}
        direction={{ base: 'column', md: 'row' }}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        padding={0}
        // bg={'white'}
        >
        {/* <Flex flex={1} bg="blue.200"> */}
          {/* <Image
            objectFit="cover"
            boxSize="100%"
            src={
              'https://www.google.com/url?sa=i&url=https%3A%2F%2Fdesignbundles.net%2Fkant-store%2F1279109-user-icon-human-person-symbol-social-profile-icon-&psig=AOvVaw3aV4nYlA0lPY-QI190gpCL&ust=1640692780726000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCICEppL3g_UCFQAAAAAdAAAAABAR'  
            }
          /> */}
        {/* </Flex> */}
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding={0}
          pt={2}
          >
          <Flex flexDirection={'column'} alignItems={'center'} justifyContent={'space-between'}>
          <Text>
            <b>firstName: </b>{user.firstName}
          </Text>
          <Text>
            <b>lastName: </b>{user.lastName?user.lastName:'none'}
          </Text>
          <Text
            textAlign={'center'}
            color={useColorModeValue('gray.700', 'gray.400')}
            px={3}>
             <b>Email: </b>{user.email} 
          </Text>
          <Text>
            <b>Password: </b>{user.password}
          </Text>
          <Text>
            <b>Questions Posted: </b>{user.questionsPosted.length}
          </Text>
          <Text>
            <b>Answers Posted: </b>{user.answersPosted.length}
          </Text>
          <Text>
            <b>Followers: </b>{0}
          </Text>

          <Stack
            width={'100%'}
            mt={'2rem'}
            direction={'row'}
            padding={2}
            justifyContent={'space-between'}
            alignItems={'center'}>
            <Button
              bg={'blue.500'}
              color={'white'}
              flex={1}
              fontSize={'sm'}
              rounded={'full'}
              _focus={{
                bg: 'gray.200',
              }}>
              Edit Account Details
            </Button>
           </Stack>
          </Flex>
        </Stack>
      </Stack>
      </Flex>
    </Center>
  );
}