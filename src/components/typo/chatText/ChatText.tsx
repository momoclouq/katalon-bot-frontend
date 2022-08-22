import styled from 'styled-components'

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

const ChatText = (props) => {
    return (
        <ChatTextDiv shadow_drop="drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))" max_width="20rem" lg_max_width="32rem" font_weight="400" font_size="0.875rem" line-height="1.25rem" margin_bottom="0.5rem" margin_top="0.5rem" padding="0.75rem 1rem 0.75rem 1rem" border_radius="0.5rem"  align_self="flex-start" p_case={props.case}>
            {props.children}
        </ChatTextDiv>
    )
}

export default ChatText;