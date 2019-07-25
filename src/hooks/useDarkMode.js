import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage"

const useDarkMode = () => {

    // returns an array with a value and a setter and a key of darkMode 
    const [storageArray, setStorageArray] = useLocalStorage("dark-mode");

    useEffect(() => {

        if (storageArray) {
            document.querySelector("body").classList.add("dark-mode")
        } else {
            document.querySelector("body").classList.remove("dark-mode")
        }

    }, [storageArray])

    return [storageArray, setStorageArray]
}

export default useDarkMode; 