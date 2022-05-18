import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatBox from "../../../components/chat/chatBox/ChatBox";
import ChatContainer from "../../../components/chat/chatContainer/ChatContainer";
import { useGetIntentRecognitionWithQueryQuery } from "../../../redux/api/intentRecognitionAPI";
import { useGetSemanticSearchWithQueryQuery } from "../../../redux/api/semanticSearchAPI";
import { addToHistory, selectHistory } from "../../../redux/slice/chat/chatSlice";

const ChatInput = ({submitQuery, addUserChat}) => {
    const [currentQuery, setCurrentQuery] = useState("");

    const handleClick = () => {
        addUserChat();
        setCurrentQuery("");
        submitQuery(currentQuery);
    }

    const handleChange = (event) => {
        setCurrentQuery(event.target.value);
    }

    return (
        <div className="w-full self-end flex justify-end mt-2">
            <div className="border border-2 rounded-full px-3 py-1 grow md:max-w-md mr-2">
                <input value={currentQuery} onChange={handleChange} className="w-full p-2 custom-chat-input" type="text" placeholder="Type anything to chatbot" />
            </div>
            <button onClick={handleClick} className="bg-sky-400 rounded-full px-3"><img className="h-5" src="https://img.icons8.com/ios-glyphs/60/ffffff/paper-plane.png"/></button>
        </div>
    )
}

const ChatProcess = () => {
    const [query, setQuery] = useState("");
    const chatHistory = useSelector(selectHistory);
    const dispatch = useDispatch();

    const { data: semanticData, error: semanticError, isLoading: semanticLoading } = useGetSemanticSearchWithQueryQuery(query);
    const { data: intentData, error: intentError, isLoading: intentLoading } = useGetIntentRecognitionWithQueryQuery(query);

    if(query != "") {
        console.log(semanticData);
        console.log(intentData);
    }

    const addUserChatToHistory = () => {
        const contentVal = query;

        dispatch(addToHistory({
            isBot: false,
            content: contentVal
        }))

        setQuery("");
    }

    return (
        <ChatContainer>
            <ChatBox isBot={true} content="Hi, I'm Katalon Chatbot. You can ask me anything about Katalon Documentation" />
            <ChatBox isBot={false} content="I want to install Katalon devops, show me how" />
            <ChatBox isBot={true} content="Here are the results" />
            <ChatInput submitQuery={setQuery} addUserChat={addUserChatToHistory}/>
        </ChatContainer>
    )
}

export default ChatProcess;