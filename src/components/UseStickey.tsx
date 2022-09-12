import React, { useState, useRef, useEffect } from "react"
import { useViewportScroll, useTransform  } from "framer-motion";
function useSticky() {
  const [isSticky, setSticky] = useState(false)
  const element = useRef(null)

  const handleScroll = () => {
    if(!element.current) return 
   if( window.scrollY > element.current.getBoundingClientRect().bottom ){
    setSticky(true)
   }else {
   setSticky(false)
   }
  }



  const debounce = (func, wait = 100, immediate = true) => {
    let timeOut
    return () => {
      let context = this,
        args = arguments
      const later = () => {
        timeOut = null
        if (!immediate) func.apply(context, args)
      }
      const callNow = immediate && !timeOut
      clearTimeout(timeOut)
      timeOut = setTimeout(later, wait)
      if (callNow) func.apply(context, args)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll))
    return () => {
      window.removeEventListener("scroll", () => handleScroll)
     
    }
  }, [debounce, handleScroll])

  return { isSticky, element }
}

export default useSticky