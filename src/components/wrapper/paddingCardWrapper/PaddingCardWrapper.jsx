const PaddingCardWrapper = ({children, value}) => {
    return (
        <div className={`${value} basis-full sm:basis-1/2 lg:basis-1/4`}>
            {children}
        </div>
    )
}

export default PaddingCardWrapper;