/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { ParallaxLayer } from "react-spring/renderprops-addons.cjs"

type ContentProps = {
  align?: string
  justify?: string
  speed: number
  offset: number
  children: React.ReactNode
  className?: string
  factor?: number
}

const Content = ({ align = `center`, justify = `center`, speed, offset, children, className = ``, factor = 1 }: ContentProps) => (
  <ParallaxLayer
    sx={{
      padding: [3, 4, 4, 5],
      display: `flex`,
      flexDirection: `column`,
      alignItems: align,
      justifyContent: justify,
      zIndex: 50,
    }}
    speed={speed}
    offset={offset}
    factor={factor}
    className={className}
  >
    {children}
  </ParallaxLayer>
)

export default Content
