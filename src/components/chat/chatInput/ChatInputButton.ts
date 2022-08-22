import styled from 'styled-components';

const ChatInputButton = styled.button`
  height: ${props => props.height};
  src: ${props => props.src};
  alt: ${props => props.alt};
  padding-right: ${props => props.padding_right};
  padding-left: ${props => props.padding_left};
  border: 0px;
  background-color: transparent;
`;

export default ChatInputButton;