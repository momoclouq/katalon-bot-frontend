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
const chatInputWrapperStyle = {
  boxShadow: "0 -2px 0  0 rgb(0 0 0 / 0.05)",
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexGrow: "grow",
} as React.CSSProperties;

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
    <div style={chatInputWrapperStyle}>
      <ChatProcessDiv border_radius="9999px" margin="0.4rem" padding="0.5rem" grow="1" background_color="rgb(241 245 249)" >
        <ChatProcessInput
          value={currentQuery}
          onChange={handleChange}
          padding_y="0.25rem"
          padding_x="0.5rem"
          background_color="rgb(241 245 249)"
          className="chat-input custom-chat-input"
          type="text"
          width="100%"
          placeholder="Type anything to chatbot"
          onKeyDown={handleKeyDown}
        />
      </ChatProcessDiv>
      <ChatProcessButton onClick={handleClick} border_radius="9999px" padding_right="1rem" padding_left="1rem">
        <ChatProcessImg height="1.25rem" alt="Send Icon" src={sendIcon} />
      </ChatProcessButton>
    </div>
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

      console.log(result);
      output.push(result.intentRecognitionChat);
      if (result.semanticSearchChat) output.push(result.semanticSearchChat);

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
