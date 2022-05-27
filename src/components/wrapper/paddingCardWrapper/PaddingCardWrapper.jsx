import {  Slide} from "pure-react-carousel";
const PaddingCardWrapper = ({children, index_value}) => {
    return (
        //<div className={`${value} basis-full sm:basis-1/2 lg:basis-2/4`}>
        <Slide className="duration-200 hover:opacity-90 hover:shadow-inner hover:shadow-2xl hover:border-black-300 " index={index_value}>
            {children}
        </Slide>
    )
}

export default PaddingCardWrapper;