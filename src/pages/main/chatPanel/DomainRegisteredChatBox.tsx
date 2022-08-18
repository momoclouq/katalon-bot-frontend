import ChatBox from "../../../components/chat/chatBox/ChatBox";

const DomainRegisteredChatBox = () => {
  return (
    <ChatBox
      chatData={{
        isBot: true,
        sentence: "You are using a registered email",
        topics: []
      }}
    />
  );
}

export default DomainRegisteredChatBox;