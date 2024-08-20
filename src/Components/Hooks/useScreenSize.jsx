'use client'

import React, { useEffect, useState } from 'react'

export const useScreenSize = () => {

    const [screenSize, setScreenSize] =useState()
    

    useEffect(()=>{
        function getScreenSize() {
            return window.innerWidth
        }

        function handleResize() {
            setScreenSize(getScreenSize())
        }
        handleResize()

        window.addEventListener("resize", handleResize)

        return ()=> window.removeEventListener("resize", handleResize)

    },[])
  return screenSize
}
