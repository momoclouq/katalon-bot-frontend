const ChatContainer = ({children}) => {
    return (
        <div className="p-1 flex flex-col grow">
            {children}
        </div>
    )
}

export default ChatContainer;