import bot_icon from "../../../static/images/bot_icon.png";
import ChatText from "../../typo/chatText/ChatText";
import Icon from "../botIcon/Icon";
import { ChatDivLoading } from "../../../Styling";
const ChatLoading = () => {
    return (
        <ChatDivLoading width="fit-content" padding="4px" flex_direction="column" display="flex">
            <Icon url={bot_icon} />
            <ChatText case="loading">. . .</ChatText>
        </ChatDivLoading>
    )
}

export default ChatLoading;