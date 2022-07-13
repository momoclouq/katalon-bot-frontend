const Icon = ({url, onClickFn, size}: { url: string; onClickFn?: any; size?: string }) => {
    return (
        <div onClick={onClickFn} className={size || "h-8 md:h-10"}>
            <img className="h-full" src={url} alt="icon" />
        </div>
    )
}

export default Icon;