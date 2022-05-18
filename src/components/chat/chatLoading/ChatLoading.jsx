import bot_icon from "../../../static/images/bot_icon.png";
import ChatText from "../../typo/chatText/ChatText";
import Icon from "../botIcon/Icon";

const ChatLoading = () => {
    return (
        <div className="animate-pulse w-fit p-1 self-start flex">
            <Icon url={bot_icon} />
            <ChatText case="loading">. . .</ChatText>
        </div>
    )
}

export default ChatLoading;