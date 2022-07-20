import ChatText from "../../typo/chatText/ChatText";
import bot_icon from "../../../static/images/bot_icon.png";
import user_icon from "../../../static/images/user_icon.png";
import Icon from "../botIcon/Icon";
import ChatCard from "./ChatCard";
import PaddingChatCardWrapper from "../../wrapper/paddingChatCardWrapper/PaddingChatCardWrapper";
import { ChatResponse } from "../../../typings/ChatBot";
import { memo } from "react";
import React, {  useRef, useEffect, useState, RefObject } from 'react';
import { ChatBoxDiv } from "../../../Styling";
function useScroll() {
  const [value, setValue] = useState(true);
  const ref = useRef<HTMLDivElement>(null) || null;
  let anchor;
  let anchor_loose;
  const resetScrolling = () => 
    { 
      setValue(false);
      clearTimeout(anchor);
      anchor = setTimeout(() => {setValue(true) }, 5000);
    }
  const displayScroll = () =>{
      setValue(false);
      clearTimeout(anchor_loose);
      anchor_loose = setTimeout(() => {setValue(true) }, 10000);
    }
  useEffect(
    () => {
      const node = ref.current;
      if (node != null) {
        node.addEventListener("scroll", resetScrolling);
        node.addEventListener("click", displayScroll);
        return () => {
        node.removeEventListener("scroll", resetScrolling);
        node.addEventListener("click", displayScroll);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );
  return [ref, value];
}

const ChatBox = memo(({ isBot, sentence, recommendations }: ChatResponse) => {
  const [ref, isScrolled] = useScroll();
  const displayChat = sentence || 'More similar results';

  const processedChatCards = () => {
    if (!recommendations) return "";
    return recommendations.map((recommendation, index) => {
      return (
        <PaddingChatCardWrapper
          key={"chat wrapper: " + index}
          value="p-1 lg:p-2"
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

  if (isBot)
    return (
      <ChatBoxDiv width="100%" padding="0.25rem" align_self="self-start" margin_bottom="0.5rem" >
        <ChatBoxDiv width="80%" display="flex" flex_direction="column" >
          <ChatBoxDiv margin_bottom="0.5rem" display="flex" align_items="center" >
            <Icon url={bot_icon} />
            <ChatBoxDiv margin_left="0.5rem" color="rgb(120 113 108)" font_weight="400">Katalon</ChatBoxDiv>
          </ChatBoxDiv>
          <ChatText case="bot">{displayChat}</ChatText> 
        </ChatBoxDiv>

        <ChatBoxDiv width="100%" display="flex" overflow="auto" ref={ref as RefObject<HTMLDivElement>} className={`${isScrolled ? `customized-scrollbar-hide`:`customized-scrollbar`}`}>{processedChatCards()}</ChatBoxDiv>
      </ChatBoxDiv>
    );

  return (
    <ChatBoxDiv display="flex" flex_direction="column" width="80%" padding="0.25rem" align_self="self-end" margin_bottom="0.5rem" align_items="flex-end" >
      <ChatBoxDiv align_items="flex-end" display="flex" flex_direction="column" >
        <ChatBoxDiv align_items="center" display="flex" margin_bottom="0.5rem">
          <ChatBoxDiv margin_right="0.5rem" color="rgb(120 113 108)" font_weight="400" >You</ChatBoxDiv>
          <Icon url={user_icon} />
        </ChatBoxDiv>
        <ChatText case="user">{sentence}</ChatText>
      </ChatBoxDiv>
    </ChatBoxDiv>
  );
});

export default ChatBox;
