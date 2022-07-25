import { PaddingChatCardWrapperDiv } from "../../../Styling";
const PaddingChatCardWrapper = ({children, value_1, value_2}) => {
    return (
        <PaddingChatCardWrapperDiv padding={value_1} lg_padding={value_2}>
            {children}
        </PaddingChatCardWrapperDiv>
    )
}

export default PaddingChatCardWrapper;