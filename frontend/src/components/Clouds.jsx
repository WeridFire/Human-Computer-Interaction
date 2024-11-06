import { useState, useEffect, useRef } from "react";
import { Icon } from '@iconify/react';
import useDataStore from "../store/store";

export default function Clouds({}){

    const scrollPercentage = useDataStore((state) => state.scrollPercentage);
    const setScrollPercentage = useDataStore((state) => state.setScrollPercentage);

    const cloudsBox = useRef(null);
    const cloudsVerticalBox = useRef(null);


    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;
        const currentPosition = window.scrollY;
    
        const scrollPercentage = (currentPosition / (fullHeight - windowHeight));
    
        setScrollPercentage(scrollPercentage);
        if(cloudsBox != null){
            
            const offsetPercentage = (scrollPercentage)/0.2
            cloudsBox.current.style.minWidth = (350 + 1000*(1 - Math.min(offsetPercentage, 1))) + "px";
            if(offsetPercentage >= 2 && cloudsVerticalBox != null){
              cloudsVerticalBox.current.style.transform = `translate(0%, -${(offsetPercentage-2)*50}px)`
            }
        }
      };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        <div ref={cloudsVerticalBox} className="max-w-[100vw] flex flex-row justify-center overflow-x-hidden overflow-y-hidden">
          <div ref={cloudsBox} className="relative justify-between transition-all ease-out duration-1000 h-24" style={{minWidth: "1000px"}}>
              <span className="absolute left-0 text-white opacity-80"><Icon icon="material-symbols:cloud" width="100px"/></span>
              <span className="absolute left-[20%] text-white opacity-60"><Icon icon="material-symbols:cloud" width="100px"/></span>
              <span className="absolute right-[30%] text-white opacity-90"><Icon icon="material-symbols:cloud" width="100px"/></span>
              <span className="absolute right-[20%] text-white opacity-70"><Icon icon="material-symbols:cloud" width="100px"/></span>
              <span className="absolute right-0 text-white opacity-70"><Icon icon="material-symbols:cloud" width="100px"/></span>
          </div>
        </div>
        )
}