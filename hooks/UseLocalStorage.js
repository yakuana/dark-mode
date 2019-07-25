import React, { useState } from "react";

import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(() => {

        // retrieve an item from local storage 
        const item = window.localStorage.getItem(key);

        // JSON.parse converts the item to a javascript object 
        
        // parse and return stored json or return initialValue
        return item ? JSON.parse(item) : initialValue;
    });

    // return the "storedValue" recieved from the useState 
    return [storedValue]
}
