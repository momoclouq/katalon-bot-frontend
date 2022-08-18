import ChatText from "../../typo/chatText/ChatText";
import Icon from "../botIcon/Icon";
import { ChatErrorDiv } from "../../../Styling";
import { imageMap } from "../../../utils/imageMap";
const ChatError = ({ error }: { error: any }) => {
    return(
      <ChatErrorDiv width="100%" padding="0.25rem" align_self="self-start" margin_bottom="0.5rem">
        <ChatErrorDiv width="80%" display="flex" flex_direction="column" >
          <ChatErrorDiv display="flex" flex_direction="row" margin_bottom="0.5rem" >
            <Icon url={imageMap.bot_icon} />
            <ChatErrorDiv margin_top="0.5rem" margin_left="0.5rem" color="rgb(120 113 108)" font_weight="400">Katalon</ChatErrorDiv>
          </ChatErrorDiv>
          <ChatText case="error">Sorry, {error}</ChatText> 
        </ChatErrorDiv>
      </ChatErrorDiv>
    )
}

export default ChatError;