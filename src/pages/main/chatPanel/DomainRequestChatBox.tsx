import Icon from "../../../components/chat/botIcon/Icon";
import ChatText from "../../../components/typo/chatText/ChatText";
import { ChatBoxDiv } from "../../../Styling";
import bot_icon from "../../../static/images/bot_icon.png";
import styled from 'styled-components';
import { useState } from "react";

const EmailInput = styled.input`
  border-radius: 0.5em;
  padding: 0.5em 1em;
  border: 0.1px solid #7c818a;
  width: 100%;
  margin: 1em 0;
  &:focus {
    outline: none;
  }
`;

const EmailSubmitBtn = styled.button`
  width: 100%;
  padding: 0.5em 1em;
  background: rgb(14 165 233);
  color: #FFFFFF;
  border-radius: 0.5em;
`

const DomainRequestChatBox = ({ submitEmail }) => {
  const [email, setEmail] = useState('');

  const handleChange = (event) => {
    setEmail(event.target.value);
  } 

  return (
    <ChatBoxDiv width="100%" padding="0.25rem" align_self="self-start" margin_bottom="0.5rem" >
      <ChatBoxDiv width="80%" display="flex" flex_direction="column" >
        <ChatBoxDiv margin_bottom="0.5rem" display="flex" align_items="center" >
          <Icon url={bot_icon} />
          <ChatBoxDiv margin_left="0.5rem" color="rgb(120 113 108)" font_weight="400">Katalon</ChatBoxDiv>
        </ChatBoxDiv>
        <ChatText case="bot">
          <div>Enter your email address or leave it empty to get started</div>
          <EmailInput onChange={handleChange} placeHolder="your email" type="text" />
          <EmailSubmitBtn onClick={() => { submitEmail(email); }}>Confirm email</EmailSubmitBtn>
        </ChatText> 
      </ChatBoxDiv>
    </ChatBoxDiv>
  )
}

export default DomainRequestChatBox;