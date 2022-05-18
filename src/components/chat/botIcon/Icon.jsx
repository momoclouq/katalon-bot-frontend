const Icon = ({url}) => {
    return (
        <div className="h-10 md:h-16 self-start">
            <img className="h-full" src={url} alt="icon" />
        </div>
    )
}

export default Icon;