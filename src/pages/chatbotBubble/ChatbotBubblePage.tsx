import { ChatBotBubbleDiv,ChatBotBubbleImg } from "../../Styling";
import { imageMap } from "../../utils/imageMap";
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