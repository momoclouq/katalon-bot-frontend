const ChatBoxContainer = ({ children }) => {
  return (
    <div className="grow overflow-auto flex flex-col bg-blue-100 p-2">
      {children}
    </div>
  )
};

export default ChatBoxContainer;