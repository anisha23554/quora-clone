import React from 'react'
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
    Box,
    Text,
    ButtonGroup,
    Link
  } from '@chakra-ui/react'
const User = (props)=>{
    // props={user:{}}
    const username = props.user.firstName+" "+props.user.lastName
    const initialFocusRef = React.useRef()
    return (
      <Popover
        initialFocusRef={initialFocusRef}
        placement='bottom'
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Link color={'blue.500'}>{username}</Link>
        </PopoverTrigger>
        <PopoverContent p={4} color='white' bg='blue.800' borderColor='blue.800'>
          <PopoverHeader fontWeight={500}>User: {username}</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
             <Text color="white">Email: {props.user.email}</Text>
             <Text color="white">Followers: {props.user.followers}</Text>
             <Text color="white">About: {props.user.description}</Text>
          </PopoverBody>
          <PopoverFooter
            border='0'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            pb={4}
          >
            <ButtonGroup size='sm'>
              
              <Button colorScheme='blue' ref={initialFocusRef}>
                Follow {username}
              </Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    )
  }
  export default User