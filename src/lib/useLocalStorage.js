import { useState, useEffect } from "react";

const getStorageValue = (key, defaultValue) => {
    // getting stored value
    const saved = localStorage.getItem(key);
    const initial = JSON.parse(saved);
    return initial || defaultValue;
}

export const useLocalStorage = (key, defaultValue) => {
    const [value, setValue] = useState(() => {
        const value = getStorageValue(key, defaultValue);
        console.log('useState', key, value);
        return value;
    });

    useEffect(() => {
        // storing input name
        console.log('useEffect', key, value);
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};