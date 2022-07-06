import { useRef } from "react"

const useScrollToElement = () => {
    const ref = useRef(null);

    const scrollToView = () => {
        ref.current.scrollIntoView();
    }

    return {
        createAnchorHere: () => (<div ref={ref}></div>),
        scrollToView: scrollToView
    }
}

export default useScrollToElement;