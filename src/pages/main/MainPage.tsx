import ChatPanel from "./chatPanel/ChatPanel";
import {ChatDiv} from "../../Styling"
const fixedPositionStyle = (shouldDisplay) => ({
  position: "fixed",
  bottom: "0",
  right: "0",
  display: shouldDisplay ? "block" : "none"
})

const relativePositionStyle = {
  position: "relative",
  bottom: "0.5em",
  right: "0.5em"
}

const MainPage = ({ shouldDisplay, toogleChatbot }: any) => {
    return (
      <ChatDiv style={fixedPositionStyle(shouldDisplay) as any} height="83%" width="83%" max_height="700px" max_width="500px">
        <ChatDiv style={relativePositionStyle as any} height="100%" width="100%" sm_font_size="0.875rem" sm_line_height="1.25rem" lg_font_size="1.125rem" lg_line_height="1.75rem" border_radius="0.25rem" border_width="2px">
          <ChatPanel toogleChatbot={toogleChatbot} />
        </ChatDiv>
      </ChatDiv>
    )
}

export default MainPage;