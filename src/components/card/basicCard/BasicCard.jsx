const BasicCard = ({image_index, title, link_address}) => {
    return (
        <div className="border rounded bg-gray-200 drop-shadow flex flex-shrink-0 h-64 relative w-full sm:w-auto">
            <img src={`https://picsum.photos/200/300?random=${image_index}`} alt="black chair and white table" className="object-cover object-center w-full" />
            <div className="bg-gray-800 bg-opacity-30 absolute w-full h-full p-6">
                <h2 className="lg:text-xl leading-4 text-base lg:leading-5 text-white"></h2>
                <div className="flex h-full items-end pb-6">
                    <h3 className=" hover:text-sky-500 text-xl lg:text-2xl font-semibold leading-5 lg:leading-6 text-white"><a href={link_address} target="_blank">{title}</a></h3>
                </div>
            </div>
        </div>
    )
}

export default BasicCard;