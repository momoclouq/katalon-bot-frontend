import ChatPanel from "./chatPanel/ChatPanel";

const fixedPositionStyle = (shouldDisplay) => ({
  position: "fixed",
  bottom: "0",
  right: "0",
  display: shouldDisplay ? "block" : "none"
})

const relativePositionStyle = {
  position: "relative",
  bottom: "0.5em",
  right: "0.5em"
}

const MainPage = ({ shouldDisplay, toogleChatbot }: any) => {
    return (
      <div style={fixedPositionStyle(shouldDisplay) as any} className="h-screen w-screen max-h-128 max-w-lg	">
        <div style={relativePositionStyle as any} className="h-full w-full text-sm lg:text-md">
          <ChatPanel toogleChatbot={toogleChatbot} />
        </div>
      </div>
    )
}

export default MainPage;