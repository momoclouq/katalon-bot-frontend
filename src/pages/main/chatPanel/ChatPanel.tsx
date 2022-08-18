import ChatHeader from "../../../components/chat/chatHeader/ChatHeader";
import ChatProcess from "./ChatProcess";
import { ChatPanelDiv } from "../../../Styling"

const ChatPanel = ({ toogleChatbot }) => {
  return (
      <ChatPanelDiv height="100%" flex_direction="column" display="flex">
        <ChatHeader toogleChatbot={toogleChatbot} />

        <ChatProcess />
      </ChatPanelDiv>
  )
}

export default ChatPanel;