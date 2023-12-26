import React from 'react';
import { useState, useEffect } from 'react';




const useLocalStorage = (key, value) => {
    // let key
    // let value


    if (!key) {
        localStorage.setItem(key, value)
    }else{
        localStorage.getItem(key)
    }



    return ( 
        <>
        </>
     );
}
 
export default useLocalStorage;