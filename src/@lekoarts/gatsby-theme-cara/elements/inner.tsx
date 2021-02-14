/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

type InnerProps = {
  className?: string
  children: React.ReactNode
}

const Inner = ({ className = ``, children }: InnerProps) => (
  <div sx={{ width: [`90%`, `90%`, `90%`, `90%`, `1080px`,`1080px`, `1170px`], textAlign: `left`, mx: `auto`, py: [`50px`, `50px`, `50px`, `70px`,`50px`, `70px`] }} className={className}>
    {children}
  </div>
)

export default Inner
