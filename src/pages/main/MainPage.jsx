import ChatPanel from "./chatPanel/ChatPanel";
import PersonalContent from "./PersonalContent";
import PopularContent from "./PopularContent";

const MainPage = () => {
    return (
        <div className="w-2/3 mx-auto">
            <PopularContent />
            <PersonalContent />
            <ChatPanel />
        </div>
    )
}

export default MainPage;