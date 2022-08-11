import ChatBox from "../../../components/chat/chatBox/ChatBox";

const DomainRequestChatBox = () => {
  return (
    <ChatBox
      chatData={{
        isBot:true,
        sentence: "Please enter your registered email for a personalized experience, leave empty to start fresh",
        topics: []
      }}
    />
  )
}

export default DomainRequestChatBox;