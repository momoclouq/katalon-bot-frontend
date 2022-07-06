import './App.css';
import 'tw-elements';
import { useState } from 'react';
import MainPage from './pages/main/MainPage';
import ChatbotBubble from './pages/chatbotBubble/ChatbotBubblePage';

const positionStyle = {
  position: "fixed",
  bottom: "1em",
  right: "1em"
}

function App() {
  const [showChatbot, setShowChatbot] = useState(false);

  const closeChatbot = () => {
    setShowChatbot(false);
  }

  const openChatbot = () => {
    setShowChatbot(true);
  }

  return (
    <>
      <MainPage shouldDisplay={showChatbot} toogleChatbot={closeChatbot} />
      <ChatbotBubble shouldDisplay={!showChatbot} toogleChatbot={openChatbot} />
    </>
  ) 
}

export default App;
