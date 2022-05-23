import BasicCard from "../../components/card/basicCard/BasicCard";
import BasicTitle from "../../components/typo/basicTitle/BasicTitle";
import PaddingCardWrapper from "../../components/wrapper/paddingCardWrapper/PaddingCardWrapper";
import BasicCarousel from "../../components/carousel/basicCarousel/BasicCarousel";
import React, { useState } from 'react';
const PersonalContent = () => {
    return (
        <div className="p-1 md:mt-4">
            <BasicTitle text="Just for you" />
            <div className="flex flex-wrap">
            <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <BasicCarousel>
                <PaddingCardWrapper index_value={0} value="p-3">
                    <BasicCard image_index={0} link_address="https://docs.katalon.com/katalon-studio/docs/index.html" title="Katalon"/>
                </PaddingCardWrapper>
                <PaddingCardWrapper index_value={1} value="p-3">
                    <BasicCard  image_index={1} link_address="https://docs.katalon.com/katalon-studio/docs/overview.html" title="Katalon Studio"/>
                </PaddingCardWrapper>
                <PaddingCardWrapper index_value={2} value="p-3">
                    <BasicCard  image_index={2} link_address="https://docs.katalon.com/katalon-studio/docs/intro-RE.html" title="Katalon Runtime Engine"/>
                </PaddingCardWrapper>
                <PaddingCardWrapper index_value={3} value="p-3">
                    <BasicCard  image_index={3} link_address="https://docs.katalon.com/katalon-analytics/docs/overview.html" title="Katalon TestOps"/>
                </PaddingCardWrapper>
                <PaddingCardWrapper index_value={4} value="p-3">
                    <BasicCard  image_index={4} link_address="https://docs.katalon.com/katalon-recorder/docs/overview.html" title="Katalon Recorder"/>
                </PaddingCardWrapper>
                <PaddingCardWrapper index_value={5} value="p-3">
                    <BasicCard  image_index={5} link_address="https://docs.katalon.com/katalium-framework/docs/katalium-framework-overview.html" title="Katalon Katalium Framework"/>
                </PaddingCardWrapper>
                <PaddingCardWrapper index_value={6} value="p-3">
                    <BasicCard  image_index={6} link_address="https://docs.katalon.com/katalon-testcloud/docs/testcloud-overview.html" title="Katalon TestCloud"/>
                </PaddingCardWrapper>
                <PaddingCardWrapper index_value={7} value="p-3">
                    <BasicCard image_index={7} link_address="https://docs.katalon.com/katalon-studio/docs/index.html" title="Katalon"/>
                </PaddingCardWrapper>
                <PaddingCardWrapper index_value={8} value="p-3">
                    <BasicCard  image_index={8} link_address="https://docs.katalon.com/katalon-studio/docs/overview.html" title="Katalon Studio"/>
                </PaddingCardWrapper>
                <PaddingCardWrapper index_value={9} value="p-3">
                    <BasicCard  image_index={9} link_address="https://docs.katalon.com/katalon-studio/docs/intro-RE.html" title="Katalon Runtime Engine"/>
                </PaddingCardWrapper>
                <PaddingCardWrapper index_value={10} value="p-3">
                    <BasicCard  image_index={10} link_address="https://docs.katalon.com/katalon-analytics/docs/overview.html" title="Katalon TestOps"/>
                </PaddingCardWrapper>
                <PaddingCardWrapper index_value={11} value="p-3">
                    <BasicCard  image_index={11} link_address="https://docs.katalon.com/katalon-recorder/docs/overview.html" title="Katalon Recorder"/>
                </PaddingCardWrapper>
                <PaddingCardWrapper index_value={12} value="p-3">
                    <BasicCard  image_index={12} link_address="https://docs.katalon.com/katalium-framework/docs/katalium-framework-overview.html" title="Katalon Katalium Framework"/>
                </PaddingCardWrapper>
                </BasicCarousel>
            </div>
        </div>
            </div>
        </div>
    )
}

export default PersonalContent;