import 'tw-elements';
const PaddingCardWrapper = ({children}) => {
    return (
        //<div className={`${value} basis-full sm:basis-1/2 lg:basis-2/4`}>
        <div className="carousel-inner rounded shadow sm:shadow-md md:shadow-lg lg:shadow-xl relative w-full overflow-hidden">
            {children}
        </div>
    )
}

export default PaddingCardWrapper;