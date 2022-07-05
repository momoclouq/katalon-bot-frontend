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
      <div className="w-fit p-1 self-start">
        <div className="grow flex">
          <Icon url={bot_icon} />
          <ChatText case="bot">{displayChat}</ChatText> 
        </div>

        <div className="flex flex-wrap p-3">{processedChatCards()}</div>
      </div>
    );

  return (
    <div className="w-fit p-1 self-end flex">
      <ChatText case="user">{sentence}</ChatText>
      <Icon url={user_icon} />
    </div>
  );
});

export default ChatBox;
