import Icon from "../botIcon/Icon";
import bot_icon from "../../../static/images/bot_icon.png";
import close_icon from "../../../static/images/close_icon.png";

const ChatHeader = ({ toogleChatbot }) => {
  return (
    <div className="bg-white py-2 px-4 flex justify-between items-center">
      <div className="flex">
        <Icon url={bot_icon} />  
        <div className="ml-3 flex flex-col">
          <div className="font-bold">Katalon</div>
          <div>Support bot</div>
        </div>
      </div>
      <Icon onClickFn={toogleChatbot} url={close_icon} />
    </div>
  )
};

export default ChatHeader;