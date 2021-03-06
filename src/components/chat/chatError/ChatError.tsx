import ChatText from "../../typo/chatText/ChatText";
import Icon from "../botIcon/Icon";
import bot_icon from "../../../static/images/bot_icon.png";

const ChatError = ({ error }: { error: any }) => {
    return(
        <div className="w-fit p-1 self-start flex">
            <Icon url={bot_icon} />
            <ChatText case="error">I could not process your input: {error}</ChatText>
        </div>
    )
}

export default ChatError;