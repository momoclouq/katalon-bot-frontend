import { ChatContainerDiv } from "../../../Styling";
const ChatContainer = ({children}) => {
    return (
        <ChatContainerDiv  display="flex" flex_direction="column" grow="1" padding="0.25rem">
            {children}
        </ChatContainerDiv>
    )
}

export default ChatContainer;