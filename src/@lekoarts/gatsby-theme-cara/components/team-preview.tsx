/** @jsx jsx */
import React, {useRef, useState} from 'react'
import { Flex, Box, Image, jsx } from "theme-ui"
import {useSpring, useSprings, useTrail, animated, interpolate } from 'react-spring'
import SVG from "./svg"
import CTA from "./cta"


export const teamImages = [
  {
    name: `Zack`,
    imgPath: `/users/Zack.png`
  },
  {
    name: `Joshua`,
    imgPath: `/users/Joshua.png`
  },
  {
    name: `Gunnar`,
    imgPath: `/users/Gunnar.png`
  },
  {
    name: `JHump`,
    imgPath: `/users/Jhump.png`
  },
  {
    name: `Gavin`,
    imgPath: `/users/Gavin.png`
  }
]

export const TeamPreview = ({ images }) => {
  const [inHover, setHover] = useState(false);
  const springs = useSprings(
    images.length,
    images.map((i) => ({ x: 0, transform: `translateX(0)` }))
  )
  console.log(springs);
  // debugger
 
  return (
    <Box sx={{textAlign: `center`}}>
      <Flex sx={{mx: `auto`, pl: `${(images.length * 50) / 2}px`, maxWidth: `5xl`, justifyContent: `center`}}>
        {springs && (
          springs.map(( { x, transform } , i) => (
            <animated.div
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              sx={{ transform: inHover ? x.interpolate(v => `translateX(${v}px)`) : `translateX(${i * -50}px)` }}
            >
              <Image
                key={`image-${i}`}
                src={images[i].imgPath}
                variant="avatar"
                sx={{border: `10px solid #17043A`, borderRadius: `50%`, width: `160px`, height: `160px`}}
              />
            </animated.div>
          ))
        )}
      </Flex>
      <Box>
        <p sx={{fontSize: `display.lg`, fontWeight: `300`}}>Made for the decentralized community, built by a public team with experience at Consensys and Fortune 500 companies.</p>
        <CTA text="our team" link="/team" type="link" sx={{ variant: `links.primary` }} />
      </Box>
    </Box>
  )
}
