import styled from 'styled-components'

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

const ChatDivIcon= styled.div`
    height: ${props => props.height || `2rem`};
    @media (min-width: 1024px) {
        height: 2.5rem;
    }
    @media (max-width: 1024px) {
        height: 2rem;
    }
`;

const Icon = ({url, onClickFn, size}: { url: string; onClickFn?: any; size?: string }) => {
    return (
        <ChatDivIcon onClick={onClickFn} height={size} >
            <ChatIconImg height="100%" src={url} alt="icon" />
        </ChatDivIcon>
    )
}

export default Icon;