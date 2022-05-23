import katalon_icon from "../../../static/images/katalon_icon.png";
import Icon from "../botIcon/Icon";

const ChatCard = ({title, url}) => {
    return (
        <a href={url}>
            <div className="border rounded-lg lg:w-64 min-h-full flex flex-col">
                <div className="p-3 flex justify-center items-center">
                    <Icon url={katalon_icon} />
                </div>
                <div className="grow pt-2 px-3 lg:px-4 pb-3 bg-slate-100 flex items-center">{title}</div>
            </div>
        </a>
    )
}

export default ChatCard;