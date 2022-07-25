import {ChatDivIcon, ChatIconImg} from "../../../Styling"
const Icon = ({url, onClickFn, size}: { url: string; onClickFn?: any; size?: string }) => {
    return (
        <ChatDivIcon onClick={onClickFn} height={size} >
            <ChatIconImg height="100%" src={url} alt="icon" />
        </ChatDivIcon>
    )
}

export default Icon;