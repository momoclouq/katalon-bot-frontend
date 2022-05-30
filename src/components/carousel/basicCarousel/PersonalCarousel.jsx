import 'tw-elements';
const PersonalCarousel = ({children}) => {
    return (
        <div>
            {/* Carousel for desktop and large size devices */}
            <div id="carouselPersonal" className="carousel slide relative" data-bs-ride="carousel">
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                  <button
                    type="button"
                    data-bs-target="#carouselPersonal"
                    data-bs-slide-to="0"
                    className="active"
                    aria-current="true"
                    aria-label="Slide 1"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselPersonal"
                    data-bs-slide-to="1"
                    aria-label="Slide 2"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselPersonal"
                    data-bs-slide-to="2"
                    aria-label="Slide 3"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselPersonal"
                    data-bs-slide-to="3"
                    aria-label="Slide 4"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselPersonal"
                    data-bs-slide-to="4"
                    aria-label="Slide 5"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselPersonal"
                    data-bs-slide-to="5"
                    aria-label="Slide 6"
                  ></button>
                  <button
                    type="button"
                    data-bs-target="#carouselPersonal"
                    data-bs-slide-to="6"
                    aria-label="Slide 7"
                  ></button>
                   <button
                    type="button"
                    data-bs-target="#carouselPersonal"
                    data-bs-slide-to="7"
                    aria-label="Slide 8"
                  ></button>
                </div>
                    {children}
                <button
                  className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                  type="button"
                  data-bs-target="#carouselPersonal"
                  data-bs-slide="prev"
                >
                  <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                  type="button"
                  data-bs-target="#carouselPersonal"
                  data-bs-slide="next"
                >
                  <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}

export default PersonalCarousel;