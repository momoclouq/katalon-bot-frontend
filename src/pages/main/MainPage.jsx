import ChatPanel from "./chatPanel/ChatPanel";
import PersonalContent from "./PersonalContent";
import PopularContent from "./PopularContent";

const MainPage = () => {
    return (
        <div>
            <PopularContent />
            <PersonalContent />
            <ChatPanel />
        </div>
    )
}

export default MainPage;