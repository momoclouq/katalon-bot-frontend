import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ChatBox from "../../../components/chat/chatBox/ChatBox";
import ChatContainer from "../../../components/chat/chatContainer/ChatContainer";
import ChatError from "../../../components/chat/chatError/ChatError";
import ChatLoading from "../../../components/chat/chatLoading/ChatLoading";
import { useGetIntentRecognitionWithQueryQuery } from "../../../redux/api/intentRecognitionAPI";
import { useGetSemanticSearchWithQueryQuery } from "../../../redux/api/semanticSearchAPI";
import { addToHistory, selectHistory } from "../../../redux/slice/chat/chatSlice";
import { processIntentData, processSemanticData } from "../../../utils/data-transform";

const ChatInput = ({submitQuery, addUserChat}) => {
    const [currentQuery, setCurrentQuery] = useState("");

    const handleClick = () => {
        addUserChat(currentQuery);
        submitQuery(currentQuery);
        setCurrentQuery("");
    }

    const handleChange = (event) => {
        setCurrentQuery(event.target.value);
    }

    return (
        <div className="w-full self-end flex justify-end mt-2">
            <div className="border border-2 rounded-full px-3 py-1 grow md:max-w-md mr-2">
                <input value={currentQuery} onChange={handleChange} className="w-full p-2 custom-chat-input" type="text" placeholder="Type anything to chatbot" />
            </div>
            <button onClick={handleClick} className="bg-sky-400 rounded-full px-3">
                <img className="h-5" alt="Send Icon" src="https://img.icons8.com/ios-glyphs/60/ffffff/paper-plane.png"/>
            </button>
        </div>
    )
}

const ChatDisplay = ({chatHistory}) => {
    return chatHistory.map((chat, index) => {
        return <ChatBox key={index} isBot={chat.isBot} sentence={chat.sentence} recommendations={chat.recommendations} />
    })
}

const ChatProcess = () => {
    const [query, setQuery] = useState("");
    const chatHistory = useSelector(selectHistory);
    const dispatch = useDispatch();

    const { data: intentData, error: intentError, isLoading: intentLoading } = useGetIntentRecognitionWithQueryQuery(query);
    const { data: semanticData, error: semanticError, isLoading: semanticLoading } = useGetSemanticSearchWithQueryQuery(query);

    console.log("History: ", chatHistory);

    useEffect(() => {
        if (intentData && query){
            let formattedData = processIntentData(intentData);
               
            dispatch(addToHistory(formattedData))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [intentData])

    useEffect(() => {
        if (semanticData && query){
            let formattedData = processSemanticData(semanticData);

            dispatch(addToHistory(formattedData))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [semanticData])

    const addUserChatToHistory = (currentQuery) => {
        dispatch(addToHistory({
            isBot: false,
            sentence: currentQuery
        }))

        setQuery("");
    }

    return (
        <ChatContainer>
            <ChatBox isBot={true} sentence="Hi, I'm Katalon Chatbot. You can ask me anything about Katalon Documentation" />
            <ChatDisplay chatHistory={chatHistory}/>
            { (semanticLoading || intentLoading) ? <ChatLoading /> : "" }
            { (semanticError || intentError) ? <ChatError /> : "" }
            <ChatInput submitQuery={setQuery} addUserChat={addUserChatToHistory}/>
        </ChatContainer>
    )
}

export default ChatProcess;