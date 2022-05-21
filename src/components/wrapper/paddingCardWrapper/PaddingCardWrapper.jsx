import {  Slide} from "pure-react-carousel";
const PaddingCardWrapper = ({children, value, index_value}) => {
    return (
        //<div className={`${value} basis-full sm:basis-1/2 lg:basis-2/4`}>
        <Slide index={index_value}>
            {children}
        </Slide>
    )
}

export default PaddingCardWrapper;