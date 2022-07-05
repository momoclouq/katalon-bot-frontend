import ChatHeader from "../../../components/chat/chatHeader/ChatHeader";
import ChatProcess from "./ChatProcess";

const ChatPanel = () => {
    return (
        <div className="h-full flex flex-col">
          <ChatHeader />

          <ChatProcess />
        </div>
    )
}

export default ChatPanel;