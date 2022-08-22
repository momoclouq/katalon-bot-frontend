import ChatText from "../../typo/chatText/ChatText";
import Icon from "../botIcon/Icon";
import styled from 'styled-components'
import { imageMap } from "../../../utils/imageMap";

const ChatDivLoading= styled.div`
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: .5;
      }
    }
    width: ${props => props.width};    
    padding: ${props => props.padding};
    flex-direction: ${props => props.flex_direction};
    display: ${props => props.display};
`;

const ChatLoading = () => {
    return (
        <ChatDivLoading width="fit-content" padding="4px" flex_direction="column" display="flex">
            <Icon url={imageMap.bot_icon} />
            <ChatText case="loading">. . .</ChatText>
        </ChatDivLoading>
    )
}

export default ChatLoading;