import styled from 'styled-components'

const PaddingChatCardWrapperDiv = styled.div`
    padding: ${props => props.padding};
    @media screen and (min-width: 1024px) {
        padding: ${props => props.lg_padding};
    }
`;

const PaddingChatCardWrapper = ({children, value_1, value_2}) => {
    return (
        <PaddingChatCardWrapperDiv padding={value_1} lg_padding={value_2}>
            {children}
        </PaddingChatCardWrapperDiv>
    )
}

export default PaddingChatCardWrapper;