import React from 'react'
import { Box, jsx } from "theme-ui"
import { Spring, useSpring, animated, useTransition, interpolate, config } from 'react-spring'

const NavToggle = ({ toggle, setToggle }) => {
  return (
    <Box as="button"
      onClick={() => setToggle(!toggle)}
      sx={{
        display: [`flex`, `flex`, `flex`, `none`, `none`],
        alignSelf: `center`,
        justifySelf: `right`,
        position: `relative`,
        flexDirection: `column`,
        justifyContent: `space-around`,
        width: [`1.5rem`,`1.5rem`,`2rem`],
        height: [`1.5rem`,`1.5rem`,`2rem`],
        background: `transparent`,
        border: `none`,
        cursor: `pointer`,
        padding: 0,
        marginRight: `5%`,
        zIndex: 10,
        overflow: `hidden`,
        "&:focus": {
          outline: `none`
        },
        "div": {
          width: [`1.5rem`,`1.5rem`,`2rem`],
          height: [`0.1rem`, `0.1rem`, `0.2rem`],
          backgroundColor: toggle ? `#2D71F4` : `white`,
          borderRadius: [`5px`, `5px`, `10px`],
          transition: `all 0.3s linear`,
          position: `relative`,
          transformOrigin: `1px`,
          opacity: toggle ? 1 : 0.6,
          transition: `all 0.2s 0.2s linear`,
          "&:first-child": {
            transform: toggle ? 'rotate(45deg)' : 'rotate(0)'
          },
          "&:nth-child(2)": {
            opacity: toggle ? '0' : '0.6',
            transform: toggle ? 'translateX(20px)' : 'translateX(0)'
          },
          "&:nth-child(3)": {
            transform: toggle ? 'rotate(-45deg)' : 'rotate(0)'
          }
      }
    }}>
      <div></div>
      <div></div>
      <div></div>
    </Box>
  )
}

export default NavToggle
