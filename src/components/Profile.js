import {Text ,Button,Stack,Heading,Textarea,Box, Flex, Avatar} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import editDescription from "../functions/editDescription";
import toast, {Toaster} from 'react-hot-toast'

const Profile = ()=>{
  const {Auth} = useSelector(state=>state)
  const [desc,setDesc] = useState("")
  const dispatch = useDispatch()
 
  const setDescription = ()=>{
     dispatch(editDescription(desc,Auth.user,Auth.token))
     setDesc('')
  }
  return (
    <Flex mt={20} direction={'column'}>
    <Avatar ml={690} name={Auth.user.firstName} color={'white'} size={'lg'}/>
    <Stack borderRadius="sm"  w={'50%'} 
    m={'auto auto'}
    ml={400}
    // bg={'red'}
    //  mt={50}
     >
      <Flex>
      <Stack
      // bg={'blue'}
      p={5}
      h={'55vh'}
      alignItems={'center'}
        direction={{ base: 'column'}}
        justifyContent="space-evenly"
        >
        {/* <Heading fontSize={'1.4rem'} m={5}><u>My Profile</u></Heading> */}
        <Text m={4} color={'gray.600'} fontSize={'1.1rem'} textAlign={'left'} maxW={'4xl'}>
            <b>Username</b>: {Auth.user.firstName+" "+Auth.user.lastName}
        </Text>
        <Text m={4} color={'gray.600'} fontSize={'1.1rem'} textAlign={'left'} maxW={'4xl'}>
            <b>email</b>: {Auth.user.email}
        </Text>
        <Text m={4} color={'gray.600'}  fontSize={'1.1rem'} textAlign={'left'} maxW={'4xl'}>
            <b>followers</b>: {Auth.user.followers}
        </Text>
        <Text m={4} color={'gray.600'}  fontSize={'1.1rem'} textAlign={'left'} maxW={'4xl'}>
            <b>About</b>: {Auth.user.description?Auth.user.description:'You have not added any description yet'}
        </Text>
        <Stack direction={{ base: 'column'}}
        p={10} 
        alignItems={'center'}
        justifyContent={'space-between'}>
            <Heading mb={2} color={'green.600'} fontSize={'1.2rem'}>Update About status</Heading>
        <Textarea value={desc}
        onChange={(e)=>{setDesc(e.target.value)}}
        size={'lg'}
        w={{md:500}}
        // fontSize={'0.9rem'}
        placeholder={'add description here...'}
        bg={'whitesmoke'}
        fontSize={'1.1rem'}
        >
        </Textarea>
         <Button bg={'blue.500'} color={'white'}
        borderRadius={50} h={7} p={4}
         position={'absolute'} bottom={-10} onClick={setDescription}>Update status</Button> 
        </Stack>
      </Stack>
      </Flex>
    </Stack>
    <Toaster />
    </Flex>
  );
}
 
export default Profile;