import styled from 'styled-components';

const ChatInputContainer = styled.div`
  width: ${props => props.width};
  padding: ${props => props.padding};
  border-radius: ${props => props.border_radius};
  margin: ${props => props.margin};
  background-color:${props =>  props.background_color};
  flex-grow: ${props => props.grow};
`;

export default ChatInputContainer;