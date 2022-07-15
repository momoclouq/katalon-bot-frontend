import ChatText from "../../typo/chatText/ChatText";
import bot_icon from "../../../static/images/bot_icon.png";
import user_icon from "../../../static/images/user_icon.png";
import Icon from "../botIcon/Icon";
import ChatCard from "./ChatCard";
import PaddingChatCardWrapper from "../../wrapper/paddingChatCardWrapper/PaddingChatCardWrapper";
import { ChatResponse } from "../../../typings/ChatBot";
import { memo } from "react";
import React, {  useRef, useEffect, useState, RefObject } from 'react';

function useHover() {
  const [value, setValue] = useState(false);
  const ref = useRef<HTMLDivElement>(null) || null;
  let anchor;
  const resetScrolling = () => 
    { 
      setValue(false);
      clearTimeout(anchor);
      anchor = setTimeout(() => {setValue(true) }, 1000);
    }
  const displayScroll = () =>{
      setValue(false);
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
  const [ref, isHovered] = useHover();
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
      <div className="w-full p-1 self-start mb-2">
        <div className="w-4/5 flex flex-col">
          <div className="flex items-center mb-2">
            <Icon url={bot_icon} />
            <div className="ml-2 text-stone-500 font-normal">Katalon</div>
          </div>
          <ChatText case="bot">{displayChat}</ChatText> 
        </div>

        <div ref={ref as RefObject<HTMLDivElement>} className={`${isHovered ? `customized-scrollbar-hide`:`customized-scrollbar`} w-full flex overflow-auto`}>{processedChatCards()}</div>
      </div>
    );

  return (
    <div className="w-4/5 p-1 self-end flex flex-col items-end mb-2">
      <div className="flex flex-col items-end">
        <div className="flex items-center mb-2">
          <div className="mr-2 text-stone-500 font-normal">You</div>
          <Icon url={user_icon} />
        </div>
        <ChatText case="user">{sentence}</ChatText>
      </div>
    </div>
  );
});

export default ChatBox;
