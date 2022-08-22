import styled from 'styled-components';

const ChatInputBar = styled.input`
  width: ${props => props.width};
  padding: ${props => props.padding_y} ${props => props.padding_x};
  background-color:${props =>  props.background_color};
  border-radius: ${props => props.border_radius};
  border:  ${props => props.border} ;
  width: ${props => props.width};
`;

export default ChatInputBar;