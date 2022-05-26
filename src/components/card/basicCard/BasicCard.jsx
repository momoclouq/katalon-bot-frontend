const BasicCard = ({image_index, title, link_address}) => {
    return (
        <div className="shadow-2xl border rounded bg-gray-200 flex flex-shrink-0 lg:h-80 md:h-64 sm:h-40 relative w-auto sm:w-auto">
            <img src={`https://picsum.photos/200/300?random=${image_index}`} alt="black chair and white table" className="object-cover object-center w-full" />
            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                <div className="flex h-full items-end pb-6">
                    <h3 className="text-center hover:text-gray-300 text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"><a href={link_address} target="_blank">{title}</a></h3>
                </div>
            </div>
        </div>
    )
}

export default BasicCard;