import styled from 'styled-components';

const ChatInputImg = styled.img`
    height: ${props => props.height};
    src: ${props => props.src};
    alt: ${props => props.alt};
`;

export default ChatInputImg;