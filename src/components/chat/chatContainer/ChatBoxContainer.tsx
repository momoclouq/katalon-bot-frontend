import React, {  useRef, useEffect, useState, RefObject } from 'react';

function useHover() {
  const [value, setValue] = useState(false);
  const ref = useRef<HTMLDivElement>(null) || null;
  let anchor;
  const resetScrolling = () => 
    { 
      setValue(false);
      clearTimeout(anchor);
      anchor = setTimeout(() => {setValue(true) }, 1000);
    }
  useEffect(
    () => {
      const node = ref.current;
      if (node != null) {
        node.addEventListener("scroll", resetScrolling);
        return () => {
        node.removeEventListener("scroll", resetScrolling);
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
    <div ref={ref as RefObject<HTMLDivElement>} className={`${isHovered ? `customized-scrollbar-hide`:`customized-scrollbar`} grow overflow-auto flex flex-col bg-blue-100 p-2`}>
      {children}
    </div>
  )
};

export default ChatBoxContainer;