import React, {  useRef, useEffect, useState, RefObject } from 'react';

function useHover() {
  const [value, setValue] = useState(false);
  const ref = useRef<HTMLDivElement>(null) || null;
  const handleScrolling = () => setValue(true);
  const handleScrollingStop = () => setValue(false);
  useEffect(
    () => {
      console.log(ref)
      const node = ref.current;
      if (node != null) {
        node.addEventListener("mouseover", handleScrolling);
        node.addEventListener("mouseout", handleScrollingStop);
        return () => {
          node.addEventListener("mouseover", handleScrolling);
          node.removeEventListener("mouseout", handleScrollingStop);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );
  return [ref, value];
}
const ChatBoxContainer = ({ children }) => {
  const [ref, isHovered] = useHover();
  return (
    <div ref={ref as RefObject<HTMLDivElement>} className={`${isHovered ? "customized-scrollbar" : "customized-scrollbar-hide"} grow overflow-auto flex flex-col bg-blue-100 p-2`}>
      {children}
    </div>
  )
};

export default ChatBoxContainer;