import React from 'react'
import { Box, jsx } from "theme-ui"
import SVG from "../svg"

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
          height: [`0.08rem`, `0.1rem`, `0.2rem`],
          backgroundColor: toggle ? `transparent` : `transparent`,
          borderRadius: [`5px`, `5px`, `10px`],
          transition: `all 0.3s linear`,
          position: `relative`,
          transformOrigin: `1px`,
          opacity: toggle ? 1 : 0.6,
          transition: `all 0.2s 0.2s linear`,
          "&:first-of-type": {
            transform: toggle ? 'rotate(45deg) translate3d(2px, -1px, 0)' : 'rotate(0)'
          },
          "&:nth-of-type(2)": {
            opacity: toggle ? '0' : '0.6',
            transform: toggle ? 'translate3d(-20px, 0, 0)' : 'translate3d(0, 0, 0)'
          },
          "&:nth-of-type(3)": {
            transform: toggle ? 'rotate(-45deg) translate3d(-1px, -1px, 0)' : 'rotate(0)'
          }
        },
        "path, circle": {
          fill: toggle ? `brand.secondary.light` : `white`,
          transition: `all 0.2s 0.2s ease`
        },
    }}>
      <div><SVG icon="navToggle" width={[`1.5rem`,`1.5rem`,`2rem`]} left="0" bottom="0" top={[0]} transform={`rotate(90deg)`} preserveAspectRatio="xMidYMid meet" /></div>
      <div><SVG icon="navToggle" width={[`1.5rem`,`1.5rem`,`2rem`]} left="0" bottom="0" top={[0]} transform={`rotate(90deg)`} preserveAspectRatio="xMidYMid meet" /></div>
      <div><SVG icon="navToggle" width={[`1.5rem`,`1.5rem`,`2rem`]} left="0" bottom="0" top={[0]} transform={`rotate(90deg)`} preserveAspectRatio="xMidYMid meet" /></div>
    </Box>
  )
}

export default NavToggle
