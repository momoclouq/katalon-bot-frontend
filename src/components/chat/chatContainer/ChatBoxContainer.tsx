import React from 'react';
import { ChatBoxContainerDiv } from '../../../Styling';
const ChatBoxContainer = ({ children }) => {
  return (
    <ChatBoxContainerDiv padding="0.5rem" overflow="auto" display="flex" flex_direction="column" background_color="#E1EDF6" grow="1" >
      {children}
    </ChatBoxContainerDiv>
  )
};

export default ChatBoxContainer;