// import bot_icon from "../../static/images/bot_icon.png";
import { imageMap } from "../../static/image_links/image-map";

const { bot_icon } = imageMap;

const positionStyle = (shouldDisplay) => ({
  position: "fixed",
  bottom: "1em",
  right: "1em",
  display: shouldDisplay ? "block" : "none"
});

const ChatbotBubble = ({ shouldDisplay, toogleChatbot }) => {
  return (
    <div style={positionStyle(shouldDisplay) as any} onClick={toogleChatbot} className="h-10 md:h-14">
        <img className="h-full" src={bot_icon} alt="icon" />
    </div>
  )
};

export default ChatbotBubble;