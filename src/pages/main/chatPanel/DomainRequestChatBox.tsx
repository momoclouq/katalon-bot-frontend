import Icon from "../../../components/chat/botIcon/Icon";
import ChatText from "../../../components/typo/chatText/ChatText";
import styled from 'styled-components';
import { useState } from "react";
import { imageMap } from "../../../utils/imageMap";

const ChatBoxDiv = styled.div`
    flex-direction: ${props => props.flex_direction};
    display: ${props => props.display};
    align-self: ${props => props.align_self};
    width: ${props => props.width};
    font-weight: ${props => props.font_weight};
    align-items: ${props => props.align_items};
    width: ${props => props.width};
    padding: ${props => props.padding};
    color: ${props => props.color};
    margin-left: ${props => props.margin_left};
    margin-right: ${props => props.margin_right};
    overflow: ${props => props.overflow};
    margin-bottom: ${props => props.margin_bottom};
    flex-wrap: ${props => props.flex_wrap};
`;


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
  border: 0px;
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
          <Icon url={imageMap.bot_icon} />
          <ChatBoxDiv margin_left="0.5rem" color="rgb(120 113 108)" font_weight="400">Katalon</ChatBoxDiv>
        </ChatBoxDiv>
        <ChatText case="bot">
          <div>Enter your email address or leave it empty to get started</div>
          <EmailInput onChange={handleChange} placeholder="your email" type="text" />
          <EmailSubmitBtn onClick={() => { submitEmail(email); }}>Confirm email</EmailSubmitBtn>
        </ChatText> 
      </ChatBoxDiv>
    </ChatBoxDiv>
  )
}

export default DomainRequestChatBox;