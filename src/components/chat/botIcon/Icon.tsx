const Icon = ({url}) => {
    return (
        <div className="h-8 md:h-10">
            <img className="h-full" src={url} alt="icon" />
        </div>
    )
}

export default Icon;