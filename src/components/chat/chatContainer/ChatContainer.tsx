import styled from 'styled-components'

const ChatContainerDiv = styled.div`
    overflow: ${props => props.overflow};
    flex-direction: ${props => props.flex_direction};
    display: ${props => props.display};
    background-color:${props => props.background_color};
    padding: ${props => props.padding};
    flex-grow: ${props => props.grow};
`;

const ChatContainer = ({children}) => {
    return (
        <ChatContainerDiv  display="flex" flex_direction="column" grow="1" padding="0.25rem">
            {children}
        </ChatContainerDiv>
    )
}

export default ChatContainer;