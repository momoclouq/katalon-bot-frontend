import {
  ChangeEvent,
  KeyboardEvent,
  useEffect,
  useState,
} from "react";

import ChatBox from "../../../components/chat/chatBox/ChatBox";
import ChatBoxContainer from "../../../components/chat/chatContainer/ChatBoxContainer";
import ChatError from "../../../components/chat/chatError/ChatError";
import ChatLoading from "../../../components/chat/chatLoading/ChatLoading";

import useChatbotQuery, {
  ChatbotQueryState,
} from "../../../hooks/chatbotHook/useChatbotQuery";
import useScrollToElement from "../../../hooks/scrollToEle/ScrollToElement";

import sendIcon from "../../../static/images/send_message_icon.png";
import { ChatResponse } from "../../../typings/ChatBot";
import { ChatProcessDiv,ChatProcessImg,ChatProcessButton,ChatProcessInput } from "../../../Styling";
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
    <ChatProcessDiv
      style={chatInputStyle}
      width="100%"
      align_self="flex-end"
      display="flex"
      justify_content="flex-end"
      padding="0.5rem"
    >
      <ChatProcessDiv border_radius="9999px" padding="0.25rem 0.75rem 0.25rem 0.75rem" grow="1" margin_right="0.5rem" background_color="rgb(241 245 249)" >
        <ChatProcessInput
          value={currentQuery}
          onChange={handleChange}
          width="100%"
          padding="0.5rem"
          background_color="rgb(241 245 249)"
          className="chat-input custom-chat-input "
          type="text"
          placeholder="Type anything to chatbot"
          onKeyDown={handleKeyDown}
        />
      </ChatProcessDiv>
      <ChatProcessButton onClick={handleClick} border_radius="9999px" margin_right="0.75rem" margin_left="0.75rem">
        <ChatProcessImg height="1.25rem" alt="Send Icon" src={sendIcon} />
      </ChatProcessButton>
    </ChatProcessDiv>
  );
};

const ChatDisplay = ({ chatHistory, scrollToView }: { chatHistory: ChatResponse[]; scrollToView: any; }) => {
  useEffect(() => {
    scrollToView();
  }, [chatHistory, scrollToView]);

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

  const { createAnchorHere, scrollToView } = useScrollToElement()

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
    <>
      <ChatBoxContainer>
        <ChatBox
          isBot={true}
          sentence="Hi, I'm Katalon Chatbot. You can ask me anything about Katalon Documentation"
          recommendations={undefined}
        />
        <ChatDisplay chatHistory={chatHistory} scrollToView={scrollToView} />
        {isLoading ? <ChatLoading /> : ""}
        {hasError ? <ChatError error={error} /> : ""}
        {createAnchorHere()}
      </ChatBoxContainer>
      <ChatInput
        submitQuery={setQuery}
        addUserChat={addUserChatToHistory}
      />
    </>
  );
};

export default ChatProcess;
