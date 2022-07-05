const PaddingChatCardWrapper = ({children, value}) => {
    return (
        <div className={`${value} basis-1/2 md:basis-1/3 lg:basis-1/5`}>
            {children}
        </div>
    )
}

export default PaddingChatCardWrapper;