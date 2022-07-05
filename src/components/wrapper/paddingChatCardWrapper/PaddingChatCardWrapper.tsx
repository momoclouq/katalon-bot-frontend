const PaddingChatCardWrapper = ({children, value}) => {
    return (
        <div className={`${value}`}>
            {children}
        </div>
    )
}

export default PaddingChatCardWrapper;