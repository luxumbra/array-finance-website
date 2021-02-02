/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"

type InnerProps = {
  className?: string
  children: React.ReactNode
}

const Inner = ({ className = ``, children }: InnerProps) => (
  <div sx={{ width: [`full`, `full`, `full`, `full`, `full`, `1170px`], textAlign: `left`, mx: `auto`, py: `100px` }} className={className}>
    {children}
  </div>
)

export default Inner
