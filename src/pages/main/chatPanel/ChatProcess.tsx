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

import { ChatResponse } from "../../../typings/ChatBot";
import styled from 'styled-components'
import DomainRequestChatBox from "./DomainRequestChatBox";
import useDomain, { DomainState } from "../../../hooks/chatbotHook/useDomain";
import DomainRegisteredChatBox from "./DomainRegisteredChatBox";
import InitialRecommendationLists from "./InitialRecommendationList";
import Icon from "../../../components/chat/botIcon/Icon";
import { imageMap } from "../../../utils/imageMap";

const ChatProcessDiv = styled.div`
    width: ${props => props.width};
    padding: ${props => props.padding};
    border-radius: ${props => props.border_radius};
    margin: ${props => props.margin};
    background-color:${props =>  props.background_color};
    flex-grow: ${props => props.grow};
`;

const ChatProcessImg = styled.img`
    height: ${props => props.height};
    src: ${props => props.src};
    alt: ${props => props.alt};
`;
const ChatProcessButton = styled.button`
    height: ${props => props.height};
    src: ${props => props.src};
    alt: ${props => props.alt};
    padding-right: ${props => props.padding_right};
    padding-left: ${props => props.padding_left};
    border: ${props => props.border} ;
    background-color: ${props => props.bg_color};
`;
const ChatProcessInput = styled.input`
    width: ${props => props.width};
    padding: ${props => props.padding_y} ${props => props.padding_x};
    background-color:${props =>  props.background_color};
    border-radius: ${props => props.border_radius};
    border:  ${props => props.border} ;
    width: ${props => props.width};
`;

const chatInputWrapperStyle = {
  boxShadow: "0 -2px 0  0 rgb(0 0 0 / 0.05)",
  width: "100%",
  display: "flex",
  alignItems: "center",
  flexGrow: "grow",
} as React.CSSProperties;

const ChatInput = ({ domain, submitQuery, addUserChat, resetDomain }: any) => {
  const [currentQuery, setCurrentQuery] = useState("");

  const handleClick = () => {
    if(domain){
      addUserChat(currentQuery);
      submitQuery(currentQuery);
      setCurrentQuery("");
    }
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

  const attributes = domain ? {} : { disabled: 'disabled' };

  return (
    <div style={chatInputWrapperStyle}>
      <ChatProcessButton bg_color="white" border="0" padding_left="1em">
        <Icon size="0.5em" onClickFn={resetDomain} url={imageMap.logout_icon} />
      </ChatProcessButton>
      <ChatProcessDiv border_radius="9999px" margin="0.4rem" padding="0.5rem" grow="1" background_color="rgb(241 245 249)" >
        <ChatProcessInput
          {...attributes}
          value={currentQuery}
          onChange={handleChange}
          padding_y="0.25rem"
          padding_x="0.5rem"
          background_color="rgb(241 245 249)"
          className="chat-input custom-chat-input"
          type="text"
          width="100%"
          placeholder="Type anything to chatbot"
          border="0"
          onKeyDown={handleKeyDown}
        />
      </ChatProcessDiv>
      <ChatProcessButton onClick={handleClick} border_radius="9999px" padding_right="1rem" padding_left="1rem">
        <ChatProcessImg height="1.25rem" alt="Send Icon" src={imageMap.sendIcon} />
      </ChatProcessButton>
    </div>
  );
};

const ChatDisplay = ({ chatHistory, scrollToView, createUserQuery }: { chatHistory: ChatResponse[]; scrollToView: any; createUserQuery: any; }) => {
  useEffect(() => {
    scrollToView();
  }, [chatHistory, scrollToView]);

  return (
    <>
    { chatHistory.map((chat, index) => {
        return (
          <ChatBox
            chatData={{
              isBot: chat.isBot,
              sentence: chat.sentence,
              recommendations: chat.recommendations,
              topics: chat.topics
            }}
            key={"box: " + index}
            optional={{
              createUserQuery
            }}
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

  const {
    domainIsLoading, 
    domainHasError,
    domainError,
    domain,
    setEmail,
    resetDomain
  }: DomainState = useDomain();

  const { isLoading, hasError, isSuccess, error, result }: ChatbotQueryState =
    useChatbotQuery({ query, domain });

  const { createAnchorHere, scrollToView } = useScrollToElement()

  useEffect(() => {
    if (isSuccess && result) {
      const output: ChatResponse[] = chatHistory.slice();

      console.log(result);
      output.push(result.intentRecognitionChat);
      if (result.intentRecognitionChat.recommendations.length === 0) output.push(result.semanticSearchChat);

      setChatHistory(output);
    }
  }, [result]);

  useEffect(() => {
    if (!domain) {
      setChatHistory([]);
    }
  }, [domain]);

  const addUserChatToHistory = (currentQuery: string) => {
    const output: ChatResponse[] = chatHistory.slice();

    output.push({
      isBot: false,
      sentence: currentQuery.trim(),
      topics: []
    });

    setChatHistory(output);
    setQuery("");
  };

  return (
    <>
      <ChatBoxContainer>
        <ChatBox
          chatData={{
            isBot: true,
            sentence: "Hey, I'm Katalon Bot, an AI - based chatbot solution. I will answer all of your questions.",
            recommendations: undefined,
            topics: []
          }}
        />
        { !domain ? <DomainRequestChatBox submitEmail={(currentEmail) => { setEmail(currentEmail); }} /> : "" }
        { domain ? 
          <>
            <DomainRegisteredChatBox />
            <ChatBox
              chatData={{
                isBot: true,
                sentence: "Below are some possible topics that you can ask me.",
                recommendations: undefined,
                topics: []
              }}
            />
            <InitialRecommendationLists createUserQuery={(topic) => {
              addUserChatToHistory(topic);
              setQuery(topic);
            }} />
          </> : "" }
        <ChatDisplay chatHistory={chatHistory} scrollToView={scrollToView} createUserQuery={(topic) => {
          addUserChatToHistory(topic);
          setQuery(topic);
        }} />
        {isLoading || domainIsLoading ? <ChatLoading /> : ""}
        {hasError ? <ChatError error={error} /> : ""}
        {domainHasError ? <ChatError error={domainError} /> : ""}
        {createAnchorHere()}
      </ChatBoxContainer>
      <ChatInput
        domain={domain}
        submitQuery={setQuery}
        addUserChat={addUserChatToHistory}
        resetDomain={resetDomain}
      />
    </>
  );
};

export default ChatProcess;
