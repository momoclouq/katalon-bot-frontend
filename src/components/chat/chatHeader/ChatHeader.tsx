import Icon from "../botIcon/Icon";
import styled from 'styled-components'
import { imageMap } from "../../../utils/imageMap";

const ChatHeaderDiv= styled.div`
    height: ${props => props.height};
    flex-direction: ${props => props.flex_direction};
    display: ${props => props.display};
    background-color: ${props => props.background_color};
    justify-content:  ${props => props.justify_content};
    align-items: ${props => props.align_items};
    padding: ${props => props.padding}; 
    font-weight:  ${props => props.font_weight};
    margin-left: ${props => props.margin_left}; 
`;

const ChatHeader = ({ toogleChatbot }) => {
  return (
    <ChatHeaderDiv background_color="white" justify_content="space-between" align_items="center" padding="0.5rem 1rem 0.5rem 1rem" display="flex">
      <ChatHeaderDiv display="flex" justify_content="space-between" align_items="center">
        <Icon url={imageMap.bot_icon} />  
        <ChatHeaderDiv margin_left="0.75rem" display="flex" flex_direction="column" >
          <ChatHeaderDiv font_weight="700">Katalon</ChatHeaderDiv>
          <div>Support bot</div>
        </ChatHeaderDiv>
      </ChatHeaderDiv>

      <Icon size="h-5" onClickFn={toogleChatbot} url={imageMap.close_icon} />
    </ChatHeaderDiv>
  )
};

export default ChatHeader;