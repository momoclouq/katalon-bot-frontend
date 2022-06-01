import 'tw-elements';
import React from 'react';
import data from '../../../static/data/CardData.json';
const BasicCarousel = ({children, carousel_id}) => {
    return (
        <>
            {/* Carousel for desktop and large size devices */}
            <div id={`${carousel_id}`} className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                            <button
                              type="button"
                              data-bs-target={`#${carousel_id}`}
                              data-bs-slide-to={`0`}
                              className="active"
                              aria-current="true"
                              aria-label={`Slide 1`}
                            ></button>
                   {data.CardData.map(each_data => {
                            return(
                              <button
                              type="button"
                              data-bs-target={`#${carousel_id}`}
                              data-bs-slide-to={`${each_data.button_index}`}
                              className="active"
                              aria-current="true"
                              aria-label={`Slide ${each_data.button_index + 1}`}
                            ></button>
                            )
                        })}
                </div>
                    {children}
                <button
                  className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                  type="button"
                  data-bs-target={`#${carousel_id}`}
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                  type="button"
                  data-bs-target={`#${carousel_id}`}
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}

export default BasicCarousel;