import React from 'react';
import styled from 'styled-components'

const ChatBoxContainerDiv = styled.div`
    overflow: ${props => props.overflow};
    flex-direction: ${props => props.flex_direction};
    display: ${props => props.display};
    background-color:${props => props.background_color};
    padding: ${props => props.padding};
    flex-grow: ${props => props.grow};
`;

const ChatBoxContainer = ({ children }) => {
  return (
    <ChatBoxContainerDiv padding="0.5rem" overflow="auto" display="flex" flex_direction="column" background_color="#E1EDF6" grow="1" >
      {children}
    </ChatBoxContainerDiv>
  )
};

export default ChatBoxContainer;