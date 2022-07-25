import katalon_icon from "../../../static/images/katalon_icon.png";
import { Recommendation } from "../../../typings/ChatBot";
import Icon from "../botIcon/Icon";
import { ChatCardDiv,ChatCardHeader,ChatCardBody,ChatCardContent } from "../../../Styling";
const ChatCard = ({title, subtitle, url}: Recommendation) => {
    return (
        <a href={url}>
            <ChatCardDiv shadow_drop="drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))" border_radius="0.5rem" width="8rem" lg_width="13rem" min_height="100%" display="flex" flex_direction="column" background_color="white">
                <ChatCardHeader padding="0.75rem" display="flex" justify_content="center" align_items="center" >
                    <Icon url={katalon_icon} />
                </ChatCardHeader>
                <ChatCardBody grow="1" padding="0.5rem 0.75rem 0.75rem 0.75rem" lg_padding_left="1rem" lg_padding_right="1rem" background_color="rgb(14 165 233)" color="rgb(255 255 255)" rounded_r_lg="0.5rem" rounded_l_lg="0.5rem" display="flex" flex_direction="column" align_items="center">
                  <ChatCardContent width="100%" text_center="center" break_word="break-word">{title}</ChatCardContent>
                  { subtitle ? <ChatCardContent width="100%" text_center="center" break_word="break-word" padding="0.25rem" color="rgb(226 232 240)">{subtitle}</ChatCardContent> : "" }
                </ChatCardBody>
            </ChatCardDiv>
        </a>
    )
}

export default ChatCard;