import BasicCard from "../../components/card/basicCard/BasicCard";
import BasicTitle from "../../components/typo/basicTitle/BasicTitle";
import PaddingCardWrapper from "../../components/wrapper/paddingCardWrapper/PaddingCardWrapper";
import React from 'react';
import CardData from '../../static/data/CardData.json';
import PersonalCarousel from "../../components/carousel/basicCarousel/PersonalCarousel";
import 'tw-elements';
const PersonalContent = () => {
    return (
        <div className="p-1 md:mt-4">
            <BasicTitle text="Just for you" />
            <div className="container mx-auto">
            <div className="flex items-center justify-center w-full h-full py-24 sm:py-8 px-4">
                {/* Carousel for desktop and large size devices */}
                <PersonalCarousel>
                    <PaddingCardWrapper>
                        <div className="carousel-item active relative float-left w-full">
                            <img
                              src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
                              className="block w-full"
                              alt="..."
                            />
                            <div className="carousel-caption md:block absolute text-center">
                              <h5 className="hover:text-gray-300 duration-200 text-xl"><a rel="noopener" href='https://katalon.com/' target="_blank">Katalon</a></h5>
                              <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        {CardData.CardData.map(each_data => {
                            return(
                            <BasicCard key={each_data.index} image_index={each_data.index} link_address={each_data.address} title={each_data.title} description={each_data.description}/>
                            )
                        })}
                    </PaddingCardWrapper>
                </PersonalCarousel>
            </div>
        </div>
            </div>
    )
}

export default PersonalContent;