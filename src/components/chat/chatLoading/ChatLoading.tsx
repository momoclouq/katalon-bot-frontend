// import bot_icon from "../../../static/images/bot_icon.png";
import ChatText from "../../typo/chatText/ChatText";
import Icon from "../botIcon/Icon";
import { imageMap } from "../../../static/image_links/image-map";

const { bot_icon } = imageMap;

const ChatLoading = () => {
    return (
        <div className="animate-pulse w-fit p-1 flex flex-col">
            <Icon url={bot_icon} />
            <ChatText case="loading">. . .</ChatText>
        </div>
    )
}

export default ChatLoading;