/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons.cjs"

type DividerProps = {
  speed: number
  offset: number
  children?: React.ReactNode
  bg?: string
  fill?: string
  clipPath?: string
  className?: string
  factor?: number
}

const Divider = ({
  speed,
  offset,
  factor = 1,
  bg = ``,
  fill = ``,
  clipPath = ``,
  children = null,
  className = ``,
}: DividerProps) => (
  <Parallax pages={0} sx={{overflow: `visible`}}>
    <ParallaxLayer
      sx={{
        position: `absolute`,
        width: `full`,
        height: `full`,
        background: bg,
        backgroundColor: bg,
        "#contact-wave": {
          color: fill,
          fill: `currentColor`,
        },
        clipPath,
      }}
      speed={speed}
      offset={offset}
      factor={factor}
      className={className}
    >
      {children}
    </ParallaxLayer>
  </Parallax>
)

export default Divider
