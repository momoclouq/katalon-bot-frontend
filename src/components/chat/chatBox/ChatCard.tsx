import katalon_icon from "../../../static/images/katalon_icon.png";
import { Recommendation } from "../../../typings/ChatBot";
import Icon from "../botIcon/Icon";

const ChatCard = ({title, subtitle, url}: Recommendation) => {
    return (
        <a href={url}>
            <div className="border rounded-lg lg:w-64 min-h-full flex flex-col">
                <div className="p-3 flex justify-center items-center">
                    <Icon url={katalon_icon} />
                </div>
                <div className="grow pt-2 px-3 lg:px-4 pb-3 bg-slate-100 flex flex-col items-center justify-center">
                  <div>{title}</div>
                  { subtitle ? <div className="p-1 text-slate-600">{subtitle}</div> : "" }
                </div>
            </div>
        </a>
    )
}

export default ChatCard;