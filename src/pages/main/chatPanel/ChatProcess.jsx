import { useState } from "react";
import ChatBox from "../../../components/chat/chatBox/ChatBox";
import ChatContainer from "../../../components/chat/chatContainer/ChatContainer";

const ChatInput = () => {
    return (
        <div className="w-fit self-end flex p-3">
            <input className="w-full p-2" type="text" placeholder="Type anything to chatbot" />
        </div>
    )
}

const ChatProcess = () => {
    const [data, setData] = useState([]);
    return (
        <ChatContainer>
            <ChatBox isBot={true} content="Welcome to Katalon chatbot, please enter your wish and I will grant it" />
            <ChatBox isBot={false} content="I want to install Katalon devops, show me how" />
            <ChatBox isBot={true} content="Here are the results" />
            <ChatInput />
        </ChatContainer>
    )
}

export default ChatProcess;