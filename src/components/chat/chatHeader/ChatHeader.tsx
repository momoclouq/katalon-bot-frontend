import Icon from "../botIcon/Icon";
import bot_icon from "../../../static/images/bot_icon.png";
import close_icon from "../../../static/images/close_icon.png";
import {ChatHeaderDiv} from "../../../Styling"
const ChatHeader = ({ toogleChatbot }) => {
  return (
    <ChatHeaderDiv background_color="white" justify_content="space-between" align_items="center" padding="0.5rem 1rem 0.5rem 1rem" display="flex">
      <ChatHeaderDiv display="flex">
        <Icon url={bot_icon} />  
        <ChatHeaderDiv margin_left="0.75rem" display="flex" flex_direction="column" >
          <ChatHeaderDiv font_weight="700">Katalon</ChatHeaderDiv>
          <div>Support bot</div>
        </ChatHeaderDiv>
      </ChatHeaderDiv>

      <Icon size="h-5" onClickFn={toogleChatbot} url={close_icon} />
    </ChatHeaderDiv>
  )
};

export default ChatHeader;