import React from 'react'
import { Box, jsx } from "theme-ui"
import SVG from "../svg"

const CloseButton = ({ modalIsOpen, setIsOpen }) => {
  return (
    <Box as="button"
      onClick={() => setIsOpen(!modalIsOpen)}
      sx={{
        display: [`flex`, `flex`, `flex`],
        alignSelf: `center`,
        justifySelf: `right`,
        position: `absolute`,
        top: `30px`,
        right: `30px`,
        flexDirection: `column`,
        justifyContent: `space-around`,
        width: [`1.5rem`,`1.5rem`,`2rem`],
        height: [`1.5rem`,`1.5rem`,`2rem`],
        border: `none`,
        backgroundColor: `transparent`,
        cursor: `pointer`,
        padding: 0,
        zIndex: 5000,
        overflow: `hidden`,
        "&:focus": {
          outline: `none`
        },
        "&:hover": {
          "div": {
            "path, circle": {
              fill: `white`,
              stroke: `brand.secondary.light`
            },
          }
        },
        "div": {
          width: [`1.5rem`,`1.5rem`,`2rem`],
          height: [`0.08rem`, `0.1rem`, `0.2rem`],
          backgroundColor: modalIsOpen ? `transparent` : `transparent`,
          borderRadius: [`5px`, `5px`, `10px`],
          position: `relative`,
          transformOrigin: `1px`,
          opacity: !modalIsOpen ? 1 : 0.6,
          transition: `all 0.2s 0.2s linear`,
          "&:first-of-type": {
            transform: modalIsOpen ? 'rotate(45deg) translate3d(2px, 0px, 0)' : 'rotate(0)'
          },
          "&:nth-of-type(2)": {
            opacity: modalIsOpen ? '0' : '0.6',
            transform: modalIsOpen ? 'translate3d(-20px, 0, 0)' : 'translate3d(0, 0, 0)'
          },
          "&:nth-of-type(3)": {
            transform: modalIsOpen ? 'rotate(-45deg) translate3d(-1px, -1px, 0)' : 'rotate(0)'
          }
        },
        "path, circle": {
          fill: modalIsOpen ? `brand.secondary.light` : `white`,
          transition: `all 0.2s ease-in-out`
        },
    }}>
      <div><SVG icon="navToggle" width={[`1.5rem`,`1.5rem`,`2rem`]} left="0" bottom="0" top={[0]} transform={`rotate(90deg)`} preserveAspectRatio="xMidYMid meet" /></div>
      <div><SVG icon="navToggle" width={[`1.5rem`,`1.5rem`,`2rem`]} left="0" bottom="0" top={[0]} transform={`rotate(90deg)`} preserveAspectRatio="xMidYMid meet" /></div>
      <div><SVG icon="navToggle" width={[`1.5rem`,`1.5rem`,`2rem`]} left="0" bottom="0" top={[0]} transform={`rotate(90deg)`} preserveAspectRatio="xMidYMid meet" /></div>
    </Box>
  )
}

export default CloseButton
