import ChatHeader from "../../../components/chat/chatHeader/ChatHeader";
import ChatProcess from "./ChatProcess";
import styled from 'styled-components'

const ChatPanelDiv= styled.div`
    height: ${props => props.height};
    flex-direction: ${props => props.flex_direction};
    display: ${props => props.display};
`;

const ChatPanel = ({ toogleChatbot }) => {
  return (
      <ChatPanelDiv height="100%" flex_direction="column" display="flex">
        <ChatHeader toogleChatbot={toogleChatbot} />

        <ChatProcess />
      </ChatPanelDiv>
  )
}

export default ChatPanel;