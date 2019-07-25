import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(() => {

        // retrieve an item from window's local storage 
        const item = window.localStorage.getItem(key);

        // JSON.parse converts the "item" to a javascript object 
        
        // parse and return stored json or return initialValue
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        
        // save the current state
        setStoredValue(value);
        
        // add the current state to the window's local storage as a JS object 
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    // return the "storedValue" recieved from the useState and the "setValue" setter function 
    return [storedValue, setValue]
}

