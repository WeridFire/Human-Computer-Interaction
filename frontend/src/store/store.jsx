import {create} from "zustand";

const useDataStore = create((set) => ({
    scrollPercentage: 0,
    setScrollPercentage: (percentage) => set((state) => ({ scrollPercentage: percentage})), 
}))


export default useDataStore;