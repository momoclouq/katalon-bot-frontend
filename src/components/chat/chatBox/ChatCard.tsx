import { Recommendation } from "../../../typings/ChatBot";
import Icon from "../botIcon/Icon";
import styled from 'styled-components'
import { imageMap } from "../../../utils/imageMap";

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


const ChatCard = ({title, subtitle, url}: Recommendation) => {
    return (
        <a href={url}>
            <ChatCardDiv shadow_drop="drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))" border_radius="0.5rem" width="8rem" lg_width="13rem" min_height="100%" display="flex" flex_direction="column" background_color="white">
                <ChatCardHeader padding="0.75rem" display="flex" justify_content="center" align_items="center" >
                    <Icon url={imageMap.katalon_icon} />
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