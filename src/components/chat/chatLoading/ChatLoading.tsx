import ChatText from "../../typo/chatText/ChatText";
import Icon from "../botIcon/Icon";
import { ChatDivLoading } from "../../../Styling";
import { imageMap } from "../../../utils/imageMap";
const ChatLoading = () => {
    return (
        <ChatDivLoading width="fit-content" padding="4px" flex_direction="column" display="flex">
            <Icon url={imageMap.bot_icon} />
            <ChatText case="loading">. . .</ChatText>
        </ChatDivLoading>
    )
}

export default ChatLoading;