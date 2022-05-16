import ChatText from "../../typo/chatText/ChatText";
import bot_icon from "../../../static/images/bot_icon.png";
import user_icon from "../../../static/images/user_icon.png";

const Icon = ({url}) => {
    return (
        <div className="h-10 md:h-16 self-start">
            <img className="h-full" src={url} alt="icon" />
        </div>
    )
}

const ChatBox = ({isBot, content}) => {

    if (isBot) return (
        <div className="w-fit p-1 self-start flex">
            <Icon url={bot_icon} />
            <ChatText case="bot">{content}</ChatText>
        </div>
    )

    return (
        <div className="w-fit p-1 self-end flex">
            <ChatText case="user">{content}</ChatText>
            <Icon url={user_icon} />
        </div>
    )
}

export default ChatBox;