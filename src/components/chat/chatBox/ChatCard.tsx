// import katalon_icon from "../../../static/images/katalon_icon.png";
import { imageMap } from "../../../static/image_links/image-map";
import { Recommendation } from "../../../typings/ChatBot";
import Icon from "../botIcon/Icon";

const { katalon_icon } = imageMap;

const ChatCard = ({title, subtitle, url}: Recommendation) => {
    return (
        <a href={url}>
            <div className="drop-shadow-md rounded-lg w-32 lg:w-52 min-h-full flex flex-col bg-white">
                <div className="p-3 flex justify-center items-center">
                    <Icon url={katalon_icon} />
                </div>
                <div className="grow pt-2 px-3 lg:px-4 pb-3 bg-sky-500 rounded-b-lg text-white flex flex-col items-center">
                  <div className="w-full break-words text-center">{title}</div>
                  { subtitle ? <div className="w-full p-1 text-slate-200 break-words text-center">{subtitle}</div> : "" }
                </div>
            </div>
        </a>
    )
}

export default ChatCard;