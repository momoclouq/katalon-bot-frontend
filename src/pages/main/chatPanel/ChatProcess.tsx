import { useEffect, useState } from "react";

import ChatBox from "../../../components/chat/chatBox/ChatBox";
import ChatContainer from "../../../components/chat/chatContainer/ChatContainer";
import ChatError from "../../../components/chat/chatError/ChatError";
import ChatLoading from "../../../components/chat/chatLoading/ChatLoading";
import useScrollToElement from "../../../hooks/scrollToEle/ScrollToElement";

import useChatbotQuery from "../../../hooks/chatbotHook/useChatbotQuery";

import { processIntentData, processSemanticData } from '../../../utils/data-transform';

import sendIcon from '../../../static/images/bot_icon.png';

const chatInputStyle = {
    boxShadow: "0 -2px 0  0 rgb(0 0 0 / 0.05)",
}

const ChatInput = ({submitQuery, addUserChat, scrollToView}) => {
    const [currentQuery, setCurrentQuery] = useState("");

    const handleClick = () => {
        addUserChat(currentQuery);
        submitQuery(currentQuery);
        setCurrentQuery("");
    }

    const handleKeyDown = (event) => {
        //enter key register
        if(event.keyCode === 13){
            handleClick();
        }
    }

    const handleChange = (event) => {
        setCurrentQuery(event.target.value);
    }

    return (
        <div style={chatInputStyle} className="w-full self-end flex justify-end mt-2 p-2">
            <div className="rounded-full px-3 py-1 grow mr-2 bg-slate-100">
                <input 
                    value={currentQuery} 
                    onChange={handleChange} 
                    className="chat-input w-full p-2 custom-chat-input bg-slate-100" 
                    type="text" 
                    placeholder="Type anything to chatbot" 
                    onKeyDown={handleKeyDown}
                />
            </div>
            <button onClick={handleClick} className="rounded-full px-3">
                <img className="h-5" alt="Send Icon" src={sendIcon}/>
            </button>
        </div>
    )
}

const ChatDisplay = ({chatHistory}) => {
    return chatHistory.map((chat, index) => {
        return <ChatBox key={"box: " + index} isBot={chat.isBot} sentence={chat.sentence} recommendations={chat.recommendations} />
    });
}

const ChatProcess = () => {
    const [query, setQuery] = useState("");
    const [chatHistory, setChatHistory] = useState([]);

    const { isLoading, hasError, isSuccess, error, result } = useChatbotQuery({ query: 'install' });

    useEffect(() => {
      
    }, [result]);

    const { createAnchorHere, scrollToView } = useScrollToElement();

    const addUserChatToHistory = (currentQuery) => {
        setQuery("");
    }

    return (
        <ChatContainer>
            <ChatBox isBot={true} sentence="Hi, I'm Katalon Chatbot. You can ask me anything about Katalon Documentation" recommendations={null} />
            <ChatDisplay chatHistory={chatHistory}/>
            { isLoading ? <ChatLoading /> : "" }
            { hasError ? <ChatError /> : "" }
            <ChatInput submitQuery={setQuery} addUserChat={addUserChatToHistory} scrollToView={scrollToView}/>
            { createAnchorHere() }
        </ChatContainer>
    )
}

export default ChatProcess;