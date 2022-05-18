import katalon_icon from "../../../static/images/katalon_icon.png";
import Icon from "../botIcon/Icon";

const ChatCard = ({title, url}) => {
    return (
        <a href={url}>
            <div className="border rounded-lg">
                <div className="p-3 flex justify-center items-center">
                    <Icon url={katalon_icon} />
                </div>
                <div className="pt-2 px-3 pb-3 bg-slate-100">{title}</div>
            </div>
        </a>
    )
}

export default ChatCard;