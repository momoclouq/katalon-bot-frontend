const Icon = ({url, onClickFn}: { url: string; onClickFn?: any }) => {
    return (
        <div onClick={onClickFn} className="h-8 md:h-10">
            <img className="h-full" src={url} alt="icon" />
        </div>
    )
}

export default Icon;