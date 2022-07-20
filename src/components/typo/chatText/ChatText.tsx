import { ChatTextDiv } from "../../../Styling";
const ChatText = (props) => {
    return (
        <ChatTextDiv shadow_drop="drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))" max_width="20rem" lg_max_width="32rem" font_weight="400" font_size="0.875rem" line-height="1.25rem" margin_bottom="0.5rem" margin_top="0.5rem" padding="0.75rem 1rem 0.75rem 1rem" border_radius="0.5rem"  align_self="flex-start" p_case={props.case}>
            {props.children}
        </ChatTextDiv>
    )
}

export default ChatText;