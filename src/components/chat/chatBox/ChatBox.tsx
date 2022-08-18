import ChatText from "../../typo/chatText/ChatText";
import Icon from "../botIcon/Icon";
import ChatCard from "./ChatCard";
import PaddingChatCardWrapper from "../../wrapper/paddingChatCardWrapper/PaddingChatCardWrapper";
import { ChatResponse } from "../../../typings/ChatBot";
import { memo } from "react";
import React, { RefObject } from 'react';
import { ChatBoxDiv } from "../../../Styling";
import ChatTopic from "../chatTopic/ChatTopic";
import useScroll from "../../../hooks/scrollbarHideHook/useScroll";
import { imageMap } from "../../../utils/imageMap";

type ChatBoxInput = {
  chatData: ChatResponse;
  optional?: any
};

const ChatBox = memo(({ chatData, optional }: ChatBoxInput) => {
  const { isBot, sentence, recommendations, topics } = chatData;
  const [ref, isScrolled] = useScroll();
  const [ref2, isScrolled2] = useScroll();
  const displayChat = sentence || 'Here are some more resources to get you started';

  const processedChatCards = () => {
    if (!recommendations) return "";
    return recommendations.map((recommendation, index) => {
      return (
        <PaddingChatCardWrapper
          key={"chat wrapper: " + index}
          value_1={"0.25rem"}
          value_2={"0.5rem"}
        >
          <ChatCard
            title={recommendation.title}
            url={recommendation.url}
            subtitle={recommendation.subtitle}
            key={"card " + index}
          />
        </PaddingChatCardWrapper>
      );
    });
  };

  const processedTopics = () => {
    return topics.map((topic, index) => {
      return (
        <ChatTopic key={`topic ${index}`} topic={topic} onClickHandler={() => { optional?.createUserQuery(topic) }}/>
      )
    })
  }

  if (isBot)
    return (
      <ChatBoxDiv width="100%" padding="0.25rem" align_self="self-start" margin_bottom="0.5rem" >
        <ChatBoxDiv width="80%" display="flex" flex_direction="column" >
          <ChatBoxDiv margin_bottom="0.5rem" display="flex" align_items="center" >
            <Icon url={imageMap.bot_icon} />
            <ChatBoxDiv margin_left="0.5rem" color="rgb(120 113 108)" font_weight="400">Katalon</ChatBoxDiv>
          </ChatBoxDiv>
          <ChatText case="bot">{displayChat}</ChatText> 
        </ChatBoxDiv>

        <ChatBoxDiv width="100%" display="flex" overflow="auto" ref={ref as RefObject<HTMLDivElement>} className={`${isScrolled ? `customized-scrollbar-hide`:`customized-scrollbar`}`}>{processedChatCards()}</ChatBoxDiv>
        <ChatBoxDiv width="100%" display="flex" overflow="auto" ref={ref2 as RefObject<HTMLDivElement>} className={`${isScrolled2 ? `customized-scrollbar-hide`:`customized-scrollbar`}`}>{processedTopics()}</ChatBoxDiv>
      </ChatBoxDiv>
    );

  return (
    <ChatBoxDiv display="flex" flex_direction="column" width="80%" padding="0.25rem" align_self="self-end" margin_bottom="0.5rem" align_items="flex-end" >
      <ChatBoxDiv align_items="flex-end" display="flex" flex_direction="column" >
        <ChatBoxDiv align_items="center" display="flex" margin_bottom="0.5rem">
          <ChatBoxDiv margin_right="0.5rem" color="rgb(120 113 108)" font_weight="400" >You</ChatBoxDiv>
          <Icon url={imageMap.user_icon} />
        </ChatBoxDiv>
        <ChatText case="user">{sentence}</ChatText>
      </ChatBoxDiv>
    </ChatBoxDiv>
  );
});

export default ChatBox;
