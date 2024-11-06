import { useEffect, useRef } from "react";
import useDataStore from "../store/store"



export default function Train({}){

    const scrollPercentage = useDataStore((state) => state.scrollPercentage);
    const trainRef = useRef(null);
    useEffect(() => {
        if(trainRef != null){
            const clampedPercentage = Math.min(1, scrollPercentage/0.2);
            trainRef.current.style.transform = `translate(${-100 + clampedPercentage*100}%)`
        }
    }, [scrollPercentage])

    return(
        <div className="min-w-[90vw] overflow-hidden h-[300px] flex flex-col justify-center">
            <img ref={trainRef} src="Human-Computer-Interaction/train.png" className="m-12 transition-all duration-1000 ease-in-out" style={{transform: "translate(-100%)"}}/>
        </div>
    )
}