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

const ChatPanelDiv= styled.div`
    height: ${props => props.height};
    flex-direction: ${props => props.flex_direction};
    display: ${props => props.display};
`;

const ChatHeaderDiv= styled.div`
    height: ${props => props.height};
    flex-direction: ${props => props.flex_direction};
    display: ${props => props.display};
    background-color: ${props => props.background_color};
    justify-content:  ${props => props.justify_content};
    align-items: ${props => props.align_items};
    padding: ${props => props.padding}; 
    font-weight:  ${props => props.font_weight};
    margin-left: ${props => props.margin_left}; 
`;

const ChatDivIcon= styled.div`
    height: ${props => props.height || `2rem`};
    @media (min-width: 1024px) {
        height: 2.5rem;
    }
    @media (max-width: 1024px) {
        height: 2rem;
    }
`;

const ChatIconImg= styled.img`
    height: ${props => props.height};
    @media (min-width: 1024px) {
        height: 2.5rem;
    }
    @media (max-width: 1024px) {
        height: 2rem;
    }
    src: ${props => props.src};
    alt: ${props => props.alt};
`;

const ChatDivLoading= styled.div`
    animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

    @keyframes pulse {
      0%, 100% {
        opacity: 1;
      }
      50% {
        opacity: .5;
      }
    }
    width: ${props => props.width};    
    padding: ${props => props.padding};
    flex-direction: ${props => props.flex_direction};
    display: ${props => props.display};
`;

const ChatCardDiv= styled.div`
    background-color: ${props => props.background_color};
    width: ${props => props.width};
    min-height: ${props => props.min_height};
    @media (min-width: 1024px) {
        width: ${props => props.lg_width};
    }
    border-radius:  ${props => props.border_radius};
    filter:${props => props.shadow_drop} ;
    flex-direction: ${props => props.flex_direction};
    display: ${props => props.display};    
`;

const ChatCardHeader= styled.div`
    justify-content:  ${props => props.justify_content};
    align-items: ${props => props.align_items};
    padding: ${props => props.padding}; 
    display: ${props => props.display};
`;

const ChatCardBody= styled.div`
    background-color: ${props => props.background_color};
    width: ${props => props.width};
    @media (max-width: 600px ) {
        padding-left: ${props => props.lg_padding_left};
        padding-right: ${props => props.lg_padding_right};
    }
    border-radius:  ${props => props.border_radius};
    align-items: ${props => props.align_items};
    padding: ${props => props.padding}; 
    flex-direction: ${props => props.flex_direction};
    display: ${props => props.display};
    flex-grow: ${props => props.grow};
    border-bottom-right-radius: ${props => props.rounded_r_lg};
    border-bottom-left-radius: ${props => props.rounded_l_lg};
    color: ${props => props.color};
    background-color:${props => props.background_color});
`;

const ChatCardContent= styled.div`
    width: ${props => props.width};
    text-align: ${props => props.text_center};
    overflow-wrap: ${props => props.break_word};
    padding: ${props => props.padding} ;
    color: ${props => props.color};
    @media (min-width: 1024px) {
        font-size: 0.875rem; /* 14px */
        line-height: 1.25rem; /* 20px */
    }
`;

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

const ChatBoxContainerDiv = styled.div`
    overflow: ${props => props.overflow};
    flex-direction: ${props => props.flex_direction};
    display: ${props => props.display};
    background-color:${props => props.background_color};
    padding: ${props => props.padding};
    flex-grow: ${props => props.grow};
`;

const ChatContainerDiv = styled.div`
    overflow: ${props => props.overflow};
    flex-direction: ${props => props.flex_direction};
    display: ${props => props.display};
    background-color:${props => props.background_color};
    padding: ${props => props.padding};
    flex-grow: ${props => props.grow};
`;

const ChatErrorDiv = styled.div`
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
    margin-top: ${props => props.margin_top};
    overflow: ${props => props.overflow};
    margin-bottom: ${props => props.margin_bottom};
`;

const ChatTextDiv = styled.div`
    align-self: ${props => props.align_self};
    font-weight: ${props => props.font_weight};
    max-width: ${props => props.max_width};
    padding: ${props => props.padding};
    margin-bottom: ${props => props.margin_bottom};
    margin-top: ${props => props.margin_top};
    filter:${props => props.shadow_drop} ;
    font-size: ${props =>  props.font_size };  
    line-height: ${props =>  props.line_height };   
    @media (min-width: 768px) { 
        max-width: ${props => props.lg_max_width};
    }
    border-radius:  ${props => props.border_radius};
    background-color:${props =>  props.p_case === 'user' ? 'rgb(14 165 233)' : ''};
    color: ${props =>  props.p_case === 'user' ? 'rgb(255 255 255)' : ''};
    background-color:${props =>  props.p_case === 'bot' ? '#FFFFFF' : ''};
    color: ${props =>  props.p_case === 'bot' ? 'rgb(71 85 105)' : ''};
    background-color:${props =>  props.p_case === 'loading' ? 'rgb(241 245 249)' : ''};
    font-size: ${props =>  props.p_case === 'loading' ? '1.25rem' : ''} ;  
    line-height: ${props =>  props.p_case === 'loading' ? '1.75rem' : ''} ;      
    background-color:${props =>  props.p_case === 'error' ? '#FFFFFF' : ''};
    color: ${props =>  props.p_case === 'error' ? 'rgb(71 85 105)' : ''};
`;

const ChatBotBubbleDiv = styled.div`
    height: ${props => props.height};
    @media (min-width: 768px) { 
        height: ${props => props.md_height};
    }
`;

const ChatBotBubbleImg = styled.img`
    height: ${props => props.height};
    src: ${props => props.src};
    alt: ${props => props.alt};
`;

const ChatProcessDiv = styled.div`
    width: ${props => props.width};
    padding: ${props => props.padding};
    border-radius: ${props => props.border_radius};
    margin: ${props => props.margin};
    background-color:${props =>  props.background_color};
    flex-grow: ${props => props.grow};
`;

const ChatProcessImg = styled.img`
    height: ${props => props.height};
    src: ${props => props.src};
    alt: ${props => props.alt};
`;
const ChatProcessButton = styled.button`
    height: ${props => props.height};
    src: ${props => props.src};
    alt: ${props => props.alt};
    padding-right: ${props => props.padding_right};
    padding-left: ${props => props.padding_left};
    border: 0;
    background-color:white;
`;
const ChatProcessInput = styled.input`
    width: ${props => props.width};
    padding: ${props => props.padding_y} ${props => props.padding_x};
    background-color:${props =>  props.background_color};
    border-radius: ${props => props.border_radius};
    border: 0;
    width: ${props => props.width};
`;

const PaddingChatCardWrapperDiv = styled.div`
    padding: ${props => props.padding};
    @media screen and (min-width: 1024px) {
        padding: ${props => props.lg_padding};
    }
`;
export { PaddingChatCardWrapperDiv,ChatProcessButton, ChatProcessInput, ChatProcessDiv,ChatProcessImg, ChatBotBubbleImg,ChatBotBubbleDiv,ChatDiv,ChatPanelDiv,ChatHeaderDiv,ChatDivIcon,ChatIconImg,ChatDivLoading,ChatCardDiv,ChatCardHeader,ChatCardBody,ChatCardContent,ChatBoxDiv,ChatBoxContainerDiv,ChatContainerDiv,ChatErrorDiv,ChatTextDiv };
