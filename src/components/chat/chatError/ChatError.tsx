import ChatText from "../../typo/chatText/ChatText";
import Icon from "../botIcon/Icon";
import { imageMap } from "../../../static/image_links/image-map";
// import bot_icon from "../../../static/images/bot_icon.png";

const { bot_icon } = imageMap;

const ChatError = ({ error }: { error: any }) => {
    return(
      <div className="w-full p-1 self-start mb-2">
        <div className="w-4/5 flex flex-col">
          <div className="flex items-center mb-2">
            <Icon url={bot_icon} />
            <div className="ml-2 text-stone-500 font-normal">Katalon</div>
          </div>
          <ChatText case="error">Sorry, {error}</ChatText> 
        </div>
      </div>
    )
}

export default ChatError;