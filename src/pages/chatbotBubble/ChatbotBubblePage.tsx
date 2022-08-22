import styled from 'styled-components'
import { imageMap } from "../../utils/imageMap";

const ChatBotBubbleDiv = styled.div`
    height: ${props => props.height};
    @media (min-width: 768px) { 
        height: ${props => props.md_height};
    }
`;

const ChatBotBubbleImg = styled.img`
    height: ${props => props.height};
    src: ${props => props.src};
    alt: ${props => props.alt};
`;

const positionStyle = (shouldDisplay) => ({
  position: "fixed",
  bottom: "1em",
  right: "1em",
  display: shouldDisplay ? "block" : "none"
});

const ChatbotBubble = ({ shouldDisplay, toogleChatbot }) => {
  return (
    <ChatBotBubbleDiv style={positionStyle(shouldDisplay) as any} onClick={toogleChatbot} height="2.5rem" md_height="3.5rem" >
        <ChatBotBubbleImg height="100%" src={imageMap.bot_icon} alt="icon" />
    </ChatBotBubbleDiv>
  )
};

export default ChatbotBubble;