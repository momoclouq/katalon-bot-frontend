const ChatText = (props) => {
    let extra = "";

    if (props.case == "user") extra += "bg-sky-400 text-white"; 
    if (props.case == "loading") extra += "bg-slate-100 text-xl"
    if (props.case == "error") extra += "bg-red-800 text-white"

    return (
        <div className={`drop-shadow-md max-w-xs md:max-w-lg font-light text-base md:text-xl mb-2 mt-5 border border-2 py-3 px-4 rounded-lg self-end ${extra}`}>
            {props.children}
        </div>
    )
}

export default ChatText;