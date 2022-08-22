import ChatPanel from "./chatPanel/ChatPanel";
import styled from 'styled-components'

const ChatDiv= styled.div`
    height: ${props => props.height};
    width: ${props => props.width};
    max-height: ${props => props.max_height};
    max-width: ${props => props.max_width};
    font-size: ${props => props.sm_font_size};
    line-height: ${props => props.sm_line_height}; 
    @media (min-width: 1024px) {
      font-size: ${props => props.lg_font_size};
      line-height: ${props => props.lg_line_height};
    }
    border-radius:  ${props => props.border_radius};
    border-width:  ${props => props.border_width};
    border:  ${props => props.border};
    .custom-chat-input:focus {
        outline-width: 0;
    }
    .chat-input::placeholder {
        color: #737373;
    }
    * {
    box-sizing: border-box;
    -ms-overflow-style: none;  /* Internet Explorer 10+ */
    scrollbar-width: none;  /* Firefox */
    }

    *::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      overflow-y:auto;
    }

    .customized-scrollbar-hide::-webkit-scrollbar {
      display: none ;
    }

    .customized-scrollbar::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      overflow-y:auto;
    }

    *::-webkit-scrollbar-track {
      border-radius: 100vh;
      background: #f7f4ed;
    }

    *::-webkit-scrollbar-thumb {
      background: #909497;
      border-radius: 100vh;
      border: 3px solid #f6f7ed;
    }

    *::-webkit-scrollbar-thumb:hover {
      background: #BDC3C7;
    }

    *, *:before, *:after {
      box-sizing: border-box;
      font-family: Arial, Helvetica, sans-serif;
    }
    a {
        outline: none;
        text-decoration: none;
      }
    a:hover {
      outline: none;
      text-decoration: underline;
      text-decoration-color: #E7E6E2;
    }
`;  

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
      <ChatDiv style={fixedPositionStyle(shouldDisplay) as any} height="83%" width="83%" max_height="700px" max_width="500px" >
        <ChatDiv style={relativePositionStyle as any}  border= "2px solid #f1f1f1" height="100%" width="100%" sm_font_size="0.875rem" sm_line_height="1.25rem" lg_font_size="1.125rem" lg_line_height="1.75rem" border_radius="0.25rem" border_width="2px">
          <ChatPanel toogleChatbot={toogleChatbot} />
        </ChatDiv>
      </ChatDiv>
    )
}

export default MainPage;