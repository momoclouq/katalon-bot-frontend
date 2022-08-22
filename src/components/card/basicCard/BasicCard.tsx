import React, { useRef, useEffect, useState, RefObject } from 'react';

function useHover() {
  const [value, setValue] = useState(false);
  const ref = useRef<HTMLDivElement>(null) || null;
  const handleMouseOver = () => setValue(true);
  const handleMouseOut = () => setValue(false);
  useEffect(
    () => {
      const node = ref.current;
      if (node != null) {
        node.addEventListener("mouseover", handleMouseOver);
        node.addEventListener("mouseout", handleMouseOut);
        return () => {
          node.removeEventListener("mouseover", handleMouseOver);
          node.removeEventListener("mouseout", handleMouseOut);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );
  return [ref, value];
}

const BasicCard = ({image_index, title, link_address ,description, carousel_state}: any) => {
  const [ref, isHovered] = useHover();

  return (
      <div ref={ref as RefObject<HTMLDivElement>} className={` carousel-item ${carousel_state} relative float-left w-full`}>
          <img
            src={`https://mdbootstrap.com/img/Photos/Slides/img%20(${image_index}).jpg`}
            className={ `${isHovered ? "blur-xs brightness-75" : ""} duration-500 block w-full`}
            alt="..."
          />
          <div className="carousel-caption md:block absolute text-center">
            <h5 className="font-medium md:text-xl sm:text-base mb-2"><a rel="noopener" href={link_address} target="_blank">{title}</a></h5>
            <p className="md:text-base sm:text-xs mb-3">{description}</p>
          </div>
      </div>
  )
}

export default BasicCard;