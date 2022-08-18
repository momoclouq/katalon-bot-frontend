import Icon from "../botIcon/Icon";
import {ChatHeaderDiv} from "../../../Styling"
import { imageMap } from "../../../utils/imageMap";
const ChatHeader = ({ toogleChatbot }) => {
  return (
    <ChatHeaderDiv background_color="white" justify_content="space-between" align_items="center" padding="0.5rem 1rem 0.5rem 1rem" display="flex">
      <ChatHeaderDiv display="flex" justify_content="space-between" align_items="center">
        <Icon url={imageMap.bot_icon} />  
        <ChatHeaderDiv margin_left="0.75rem" display="flex" flex_direction="column" >
          <ChatHeaderDiv font_weight="700">Katalon</ChatHeaderDiv>
          <div>Support bot</div>
        </ChatHeaderDiv>
      </ChatHeaderDiv>

      <Icon size="h-5" onClickFn={toogleChatbot} url={imageMap.close_icon} />
    </ChatHeaderDiv>
  )
};

export default ChatHeader;