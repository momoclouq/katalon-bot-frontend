import BasicCard from "../../components/card/basicCard/BasicCard";
import BasicTitle from "../../components/typo/basicTitle/BasicTitle";
import PaddingCardWrapper from "../../components/wrapper/paddingCardWrapper/PaddingCardWrapper";
import React from 'react';
import data from '../../static/data/CardData.json';
import BasicCarousel from "../../components/carousel/basicCarousel/BasicCarousel";

const PersonalContent = () => {
    return (
        <div className="p-1 md:mt-4">
            <BasicTitle text="Just for you" />
            <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                <BasicCarousel carousel_id="Personal_Carousel">
                    <PaddingCardWrapper>
                        {data.CardData.map((each_data, index) => {
                            return(
                                <BasicCard 
                                    key={each_data.index} 
                                    image_index={each_data.index} 
                                    link_address={each_data.address} 
                                    title={each_data.title} 
                                    description={each_data.description}
                                    carousel_state={index == 0 ? 'active' : ""}
                                />
                            )
                        })}
                    </PaddingCardWrapper>
                </BasicCarousel>
            </div>
        </div>
            </div>
    )
}

export default PersonalContent;