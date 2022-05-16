const ChatText = (props) => {
    let extra = "";

    if (props.case == "user") extra += "bg-sky-400 text-white"; 

    return (
        <div className={`drop-shadow-md max-w-xs md:max-w-lg font-light text-base md:text-xl mb-2 mt-5 border py-3 px-4 rounded-full self-end ${extra}`}>
            {props.children}
        </div>
    )
}

export default ChatText;