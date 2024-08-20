'use client'
import React from 'react'
import { useScreenSize } from './Hooks/useScreenSize'

export const ResponsiveComponents = ({children}) => {
    const size= useScreenSize()
  return (
    <>
    {children({size})}
    </>
  )
}
