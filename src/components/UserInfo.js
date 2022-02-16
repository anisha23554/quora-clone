import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Button,
    Avatar,
    Box,
    Text
  } from '@chakra-ui/react'
import UserInfoCard from './UserInfoCard'
const UserInfo = (props)=>{
    // props = {userId:userId}
    const users = JSON.parse(localStorage.getItem('users'))
    const user = users.find(user=>user.userId===props.userId)
    const username = user.firstName+" "+user.lastName
    const userDetails = {
        username,
        email:user.email,
        followers:user.followers
    }
    return(
      <Popover>
          <Avatar h={6} w={6}/> 
          <PopoverTrigger>
            <Text marginLeft={4} fontSize={14} cursor={'pointer'} _hover={{color:'blue.600'}}><u>{username}</u></Text>  
          </PopoverTrigger>
          <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          {/* <PopoverHeader>Confirmation!</PopoverHeader> */}
          <PopoverBody>
             <UserInfoCard details={userDetails}/>
          </PopoverBody>
          </PopoverContent>
     </Popover>
    )
}
export default UserInfo