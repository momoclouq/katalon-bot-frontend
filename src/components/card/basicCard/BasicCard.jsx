import 'tw-elements';
const BasicCard = ({image_index, title, link_address ,description}) => {
    return (
        <div className="carousel-item relative float-left w-full">
            <img
              src={`https://mdbootstrap.com/img/Photos/Slides/img%20(${image_index}).jpg`}
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption md:block absolute text-center">
              <h5 className="hover:text-gray-300 duration-200 md:text-xl sm:text-sm"><a rel="noopener" href={link_address} target="_blank">{title}</a></h5>
              <p className="md:text-base sm:text-xs">{description}</p>
            </div>
        </div>
    )
}

export default BasicCard;