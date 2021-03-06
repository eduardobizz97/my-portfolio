import React, {useState,useEffect} from "react";

export const useWindowSize = ()=> {

  // if (typeof window !== "undefined") {
  //   return { width: 1200, height: 800 };
  // }

  const isSSR = typeof window !== "undefined";

  const [windowSize, setWindowSize] = useState({
    width: isSSR ? window.innerWidth : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight
  });

  const changeWindowSize = ()=>{
    setWindowSize({width: window.innerWidth, height: window.innerHeight});
  }

  useEffect(() => {
    window.addEventListener('resize',changeWindowSize);
    return ()=>{
      window.removeEventListener('resize',changeWindowSize)
    };
  }, []);

  return windowSize;
}
