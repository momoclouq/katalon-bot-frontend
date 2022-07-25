import React from 'react';
import { ChatBoxContainerDiv } from '../../../Styling';
const ChatBoxContainer = ({ children }) => {
  return (
    <ChatBoxContainerDiv height="80%" padding="0.5rem" overflow="auto" display="flex" flex_direction="column" background_color="rgb(219 234 254)" grow="1" >
      {children}
    </ChatBoxContainerDiv>
  )
};

export default ChatBoxContainer;