const ChatText = (props) => {
    let extra = "";

    if (props.case === "user") extra += "bg-sky-500 text-white"; 
    if (props.case === "bot") extra += "bg-slate-100 text-slate-600";
    if (props.case === "loading") extra += "bg-slate-100 text-xl";
    if (props.case === "error") extra += "bg-red-800 text-white";

    return (
        <div className={`drop-shadow-md max-w-xs md:max-w-lg font-normal text-base md:text-xl mb-2 mt-2 py-3 px-4 rounded-lg self-start ${extra}`}>
            {props.children}
        </div>
    )
}

export default ChatText;