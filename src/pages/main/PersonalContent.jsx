import BasicCard from "../../components/card/basicCard/BasicCard";
import BasicTitle from "../../components/typo/basicTitle/BasicTitle";
import PaddingCardWrapper from "../../components/wrapper/paddingCardWrapper/PaddingCardWrapper";
import BasicCarousel from "../../components/carousel/basicCarousel/BasicCarousel";
import React, { useState } from 'react';
import CardData from '../../static/data/CardData.json';
const PersonalContent = () => {
    return (
        <div className="p-1 md:mt-4">
            <BasicTitle text="Just for you" />
            <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <BasicCarousel resize_value="lg:block hidden" visible_slides={5}>
                {CardData.CardData.map(each_data => {
                    return(
                    <PaddingCardWrapper index_value={each_data.index} value="p-3">
                    <BasicCard image_index={each_data.index} link_address={each_data.address} title={each_data.title}/>
                    </PaddingCardWrapper>
                    )
                })}
                </BasicCarousel>
                <BasicCarousel resize_value="lg:hidden md:block hidden"  visible_slides={4}>
                {CardData.CardData.map(each_data => {
                    return(
                    <PaddingCardWrapper index_value={each_data.index} value="p-3">
                    <BasicCard image_index={each_data.index} link_address={each_data.address} title={each_data.title}/>
                    </PaddingCardWrapper>
                    )
                })}
                </BasicCarousel>
                <BasicCarousel resize_value="block md:hidden"  visible_slides={2}>
                {CardData.CardData.map(each_data => {
                    return(
                    <PaddingCardWrapper index_value={each_data.index} value="p-3">
                    <BasicCard image_index={each_data.index} link_address={each_data.address} title={each_data.title}/>
                    </PaddingCardWrapper>
                    )
                })}
                </BasicCarousel>
            </div>
        </div>
            </div>
    )
}

export default PersonalContent;