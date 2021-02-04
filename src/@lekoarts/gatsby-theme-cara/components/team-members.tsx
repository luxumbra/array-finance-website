/** @jsx jsx */
import React from 'react'
import { Flex, Box, Text, jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import CTA from "./cta"

export const teamMembers = [
  {
    name: `Gunnar Olsen`,
    role: `Founder`,
    bio: `Contributor at Harvest Finance. Dove into crypto in 2015 through data science, stayed on the blockchain ever since.`,
    linkedin: `https://linkedin.com/gunar`,
    imgPath: `/users/Gunar.png`
  },
  {
    name: `Gunnar Olsen`,
    role: `Founder`,
    bio: `Contributor at Harvest Finance. Dove into crypto in 2015 through data science, stayed on the blockchain ever since.`,
    linkedin: `https://linkedin.com/gunar`,
    imgPath: `/users/Gunar.png`
  },
  {
    name: `Gunnar Olsen`,
    role: `Founder`,
    bio: `Contributor at Harvest Finance. Dove into crypto in 2015 through data science, stayed on the blockchain ever since.`,
    linkedin: `https://linkedin.com/gunar`,
    imgPath: `/users/Gunar.png`
  },
  {
    name: `Gunnar Olsen`,
    role: `Founder`,
    bio: `Contributor at Harvest Finance. Dove into crypto in 2015 through data science, stayed on the blockchain ever since.`,
    linkedin: `https://linkedin.com/gunar`,
    imgPath: `/users/Gunar.png`
  },
  {
    name: `Gunnar Olsen`,
    role: `Founder`,
    bio: `Contributor at Harvest Finance. Dove into crypto in 2015 through data science, stayed on the blockchain ever since.`,
    linkedin: `https://linkedin.com/gunar`,
    imgPath: `/users/Gunar.png`
  },
  {
    name: `Gunnar Olsen`,
    role: `Founder`,
    bio: `Contributor at Harvest Finance. Dove into crypto in 2015 through data science, stayed on the blockchain ever since.`,
    linkedin: `https://linkedin.com/gunar`,
    imgPath: `/users/Gunar.png`
  },
]

export const advisors = [
  {
    name: `Esfandiar Benjamin Lagevardi`,
    role: `Advisor`,
    bio: `Contributor at Harvest Finance. Dove into crypto in 2015 through data science, stayed on the blockchain ever since.`,
    linkedin: `https://linkedin.com/gunar`,
    imgPath: `/users/Gunar.png`
  },
  {
    name: `Alan Stivelman`,
    role: `Advisor`,
    bio: `Contributor at Harvest Finance. Dove into crypto in 2015 through data science, stayed on the blockchain ever since.`,
    linkedin: `https://linkedin.com/gunar`,
    imgPath: `/users/Gunar.png`
  },

]
export const partners = [
  {
    name: `RaidGuild`,
    website: `https://raidguild.org`,
    imgPath: `/partners/raidguild.png`
  },
]

type TeamMembersProps = {
  teamMembers: any
  advisors: any
  partners: any
}

export const TeamMembers = ({ teamMembers, advisors, partners }: TeamMembersProps) => (
    <>
    <Box sx={{ fontSize: `16px`, textAlign: `center`}}>
      <ul sx={{ml: 0, pl: 0, listStyle: `none`,}}>
        {teamMembers && (
          teamMembers.map((m,i) => (
            <li key={`phase-${i}`} sx={{pl: 0, textAlign: `left`, mb: 6}}>
              <h3 sx={{
                display: `flex`,
                alignItems: `baseline`,
                justifyContent: `space-between`,

              }}><Text sx={{ fontSize: `display.md` }}>{m.name}</Text></h3>
              <p sx={{width: "70%"}}>{m.bio}</p>
            </li>
          ))
        )}
      </ul>
  </Box>
      <Box sx={{ fontSize: `16px`, textAlign: `center`}}>
      <ul sx={{ml: 0, pl: 0, listStyle: `none`,}}>
        {advisors && (
          advisors.map((m,i) => (
            <li key={`phase-${i}`} sx={{pl: 0, textAlign: `left`, mb: 6}}>
              <h3 sx={{
                display: `flex`,
                alignItems: `baseline`,
                justifyContent: `space-between`,

              }}><Text sx={{ fontSize: `display.md` }}>{m.name}</Text></h3>
              <p sx={{width: "70%"}}>{m.bio}</p>
            </li>
          ))
        )}
      </ul>
    </Box>
      <Box sx={{ fontSize: `16px`, textAlign: `center`}}>
      <ul sx={{ml: 0, pl: 0, listStyle: `none`,}}>
        {partners && (
          partners.map((m,i) => (
            <li key={`phase-${i}`} sx={{pl: 0, textAlign: `left`, mb: 6}}>
              <h3 sx={{
                display: `flex`,
                alignItems: `baseline`,
                justifyContent: `space-between`,

              }}><Text sx={{ fontSize: `display.md` }}>{m.name}</Text></h3>
              <p sx={{width: "70%"}}>{m.website}</p>
            </li>
          ))
        )}
      </ul>
    </Box>
  </>
)
