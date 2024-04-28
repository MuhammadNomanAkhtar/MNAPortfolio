
import React from 'react'

export default function GradientTitle({title}) {
  return (
    <h1 className=' my-10 text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary_blue to-primary_cyan'>{title}</h1>
  )
}
