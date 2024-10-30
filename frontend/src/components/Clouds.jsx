import { useState, useEffect, useRef } from "react";
import { Icon } from '@iconify/react';

export default function Clouds({}){
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const cloudsBox = useRef(null);


    const handleScroll = () => {
        const windowHeight = window.innerHeight;
        const fullHeight = document.documentElement.scrollHeight;
        const currentPosition = window.scrollY;
    
        const scrollPercentage = (currentPosition / (fullHeight - windowHeight));
    
        setScrollPercentage(scrollPercentage);
        if(cloudsBox != null){
            cloudsBox.current.style.minWidth = (250 + 1000*(1 - scrollPercentage)) + "px";
            console.log(cloudsBox.current.style.minWidth);
            
        }
      };
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return(
        <div ref={cloudsBox} className="relative justify-between transition-all ease-out duration-1000" style={{minWidth: "1000px"}}>
            <span className="absolute left-0 text-white opacity-80"><Icon icon="material-symbols:cloud" width="100px"/></span>
            <span className="absolute left-[20%] text-white opacity-80"><Icon icon="material-symbols:cloud" width="100px"/></span>
            <span className="absolute right-[30%] text-white opacity-80"><Icon icon="material-symbols:cloud" width="100px"/></span>
            <span className="absolute right-0 text-white opacity-70"><Icon icon="material-symbols:cloud" width="100px"/></span>
        </div>)
}