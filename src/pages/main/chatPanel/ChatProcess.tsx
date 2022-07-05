import {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useState,
} from "react";

import ChatBox from "../../../components/chat/chatBox/ChatBox";
import ChatContainer from "../../../components/chat/chatContainer/ChatContainer";
import ChatError from "../../../components/chat/chatError/ChatError";
import ChatLoading from "../../../components/chat/chatLoading/ChatLoading";

import useChatbotQuery, {
  ChatbotQueryState,
} from "../../../hooks/chatbotHook/useChatbotQuery";

import sendIcon from "../../../static/images/send_message_icon.png";
import { ChatResponse } from "../../../typings/ChatBot";

const chatInputStyle = {
  boxShadow: "0 -2px 0  0 rgb(0 0 0 / 0.05)",
};

const ChatInput = ({ submitQuery, addUserChat }: any) => {
  const [currentQuery, setCurrentQuery] = useState("");

  const handleClick = () => {
    addUserChat(currentQuery);
    submitQuery(currentQuery);
    setCurrentQuery("");
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    //enter key register
    if (event.key === "Enter") {
      handleClick();
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCurrentQuery(event.target.value);
  };

  return (
    <div
      style={chatInputStyle}
      className="w-full self-end flex justify-end mt-2 p-2"
    >
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
        <img className="h-5" alt="Send Icon" src={sendIcon} />
      </button>
    </div>
  );
};

const ChatDisplay = ({ chatHistory }: { chatHistory: ChatResponse[] }) => {
  return (
    <>
    { chatHistory.map((chat, index) => {
        return (
          <ChatBox
            key={"box: " + index}
            isBot={chat.isBot}
            sentence={chat.sentence}
            recommendations={chat.recommendations}
          />
        );
      }) 
    }
    </>
  )
};

const ChatProcess = () => {
  const [query, setQuery] = useState("");
  const [chatHistory, setChatHistory] = useState([] as ChatResponse[]);

  const { isLoading, hasError, isSuccess, error, result }: ChatbotQueryState =
    useChatbotQuery({ query });

  useEffect(() => {
    if (isSuccess && result) {
      const output: ChatResponse[] = chatHistory.slice();

      output.push(result.intentRecognitionChat);
      output.push(result.semanticSearchChat);

      setChatHistory(output);
    }
  }, [result]);

  const addUserChatToHistory = (currentQuery: string) => {
    const output: ChatResponse[] = chatHistory.slice();

    output.push({
      isBot: false,
      sentence: currentQuery.trim()
    });

    setChatHistory(output);
    setQuery("");
  };

  return (
    <ChatContainer>
      <ChatBox
        isBot={true}
        sentence="Hi, I'm Katalon Chatbot. You can ask me anything about Katalon Documentation"
        recommendations={undefined}
      />
      <ChatDisplay chatHistory={chatHistory} />
      {isLoading ? <ChatLoading /> : ""}
      {hasError ? <ChatError error={error} /> : ""}
      <ChatInput
        submitQuery={setQuery}
        addUserChat={addUserChatToHistory}
      />
    </ChatContainer>
  );
};

export default ChatProcess;
