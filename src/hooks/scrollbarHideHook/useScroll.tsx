import { useEffect, useRef, useState } from "react";

function useScroll() {
  const [value, setValue] = useState(true);
  const ref = useRef<HTMLDivElement>(null) || null;
  let anchor;
  let anchor_loose;
  const resetScrolling = () => 
    { 
      setValue(false);
      clearTimeout(anchor);
      anchor = setTimeout(() => {setValue(true) }, 1000);
    }
  const displayScroll = () =>{
      setValue(false);
      clearTimeout(anchor_loose);
      anchor_loose = setTimeout(() => {setValue(true) }, 1000);
    }
  useEffect(
    () => {
      const node = ref.current;
      if (node != null) {
        node.addEventListener("scroll", resetScrolling);
        node.addEventListener("click", displayScroll);
        return () => {
        node.removeEventListener("scroll", resetScrolling);
        node.addEventListener("click", displayScroll);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );
  return [ref, value];
}

export default useScroll;