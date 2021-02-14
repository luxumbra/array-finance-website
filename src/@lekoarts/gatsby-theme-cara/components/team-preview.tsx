/** @jsx jsx */
import React, {useRef, useState} from 'react'
import { Flex, Box, Image, jsx } from "theme-ui"
import {useSpring, useSprings, useTrail, animated, interpolate } from 'react-spring'
import SVG from "./svg"
import CTA from "./cta"


export const teamImages = [
  {
    name: `Gunnar`,
    imgPath: `/users/Gunnar.png`
  },
  {
    name: `Joshua`,
    imgPath: `/users/Joshua.png`
  },
  {
    name: `Zack`,
    imgPath: `/users/Zack.png`
  },
  {
    name: `Gavin`,
    imgPath: `/users/Gavin.png`
  },
  {
    name: `JHump`,
    imgPath: `/users/Jhump.png`
  },
]

export const TeamPreview = ({ images }) => {
  const [inHover, setHover] = useState(false);
  const springs = useSprings(
    images.length,
    images.map((i) => ({ x: 0, transform: `translateX(0)` }))
  )

  return (
    <Box sx={{textAlign: `center`, mt: [25, 25, 50, 50, 50, 50, 100]}}>
      <Flex sx={{mx: `auto`, pl: [`${(images.length * 30) / 2}px`,`${(images.length * 30) / 2}px`, `${(images.length * 30) / 2}px`, `${(images.length * 50) / 2}px`], justifyContent: `center`}}>
        {springs && (
          springs.map(( { x, transform } , i) => (
            <animated.div
              sx={{ transform: [`translateX(${i * -20}px)`,`translateX(${i * -20}px)`,`translateX(${i * -20}px)`, `translateX(${i * -50}px)`] }}
            >
              <Image
                key={`image-${i}`}
                src={images[i].imgPath}
                variant="avatar"
                sx={{backgroundColor: ` #17043A`,  border: [`5px solid #17043A`,`5px solid #17043A`,`5px solid #17043A`,`10px solid #17043A`], borderRadius: [`50%`], width:[`75px`,`75px`,`75px`, `160px`], minWidth: [`75px`,`75px`,`75px`, `160px`], height: [`75px`,`75px`,`75px`,`160px`]}}
              />
            </animated.div>
          ))
        )}
      </Flex>
      <Box>
        <p sx={{fontSize: [`body.xs`,`display.sm`,`display.md`,`display.md`,`body.xxl`,`display.lg`], fontWeight: `300`, mb: [5]}}>Made for the decentralized community, built by a public team with experience at Consensys and Fortune 500 companies.</p>
        <CTA text="our team" link="/team" type="link" sx={{ variant: `links.primary` }} />
      </Box>
    </Box>
  )
}
