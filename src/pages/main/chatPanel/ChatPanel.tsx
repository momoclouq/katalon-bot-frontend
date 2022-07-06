import ChatHeader from "../../../components/chat/chatHeader/ChatHeader";
import ChatProcess from "./ChatProcess";

const ChatPanel = ({ toogleChatbot }) => {
    return (
        <div className="h-full flex flex-col">
          <ChatHeader toogleChatbot={toogleChatbot} />

          <ChatProcess />
        </div>
    )
}

export default ChatPanel;