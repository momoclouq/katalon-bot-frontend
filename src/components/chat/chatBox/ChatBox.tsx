import ChatText from "../../typo/chatText/ChatText";
import bot_icon from "../../../static/images/bot_icon.png";
import user_icon from "../../../static/images/user_icon.png";
import Icon from "../botIcon/Icon";
import ChatCard from "./ChatCard";
import PaddingChatCardWrapper from "../../wrapper/paddingChatCardWrapper/PaddingChatCardWrapper";
import { ChatResponse } from "../../../typings/ChatBot";
import { memo } from "react";

const ChatBox = memo(({ isBot, sentence, recommendations }: ChatResponse) => {
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
      <div className="w-4/5 p-1 self-start mb-2">
        <div className="grow flex flex-col">
          <div className="flex items-center mb-2">
            <Icon url={bot_icon} />
            <div className="ml-2 text-stone-500 font-normal">Katalon</div>
          </div>
          <ChatText case="bot">{displayChat}</ChatText> 
        </div>

        <div className="flex flex-wrap">{processedChatCards()}</div>
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
