/** @jsx jsx */
import React from 'react'
import { Flex, Box, Heading, Text, AspectImage, Link, jsx } from "theme-ui"
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
    link: `https://linkedin.com/Gunnar`,
    imgPath: `/users/portraits/Gunnar.png`
  },
  {
    name: `Joshua Lapidus`,
    role: `Operations`,
    bio: `DAO aficionado and DeFi ReGen. Former ConsenSys and Lyft.`,
    link: `https://linkedin.com/Gunnar`,
    imgPath: `/users/portraits/Joshua.png`
  },
  {
    name: `Zack Rowland`,
    role: `Founder`,
    bio: `Contributor at Harvest Finance. Dove into crypto in 2015 through data science, stayed on the blockchain ever since.`,
    link: `https://linkedin.com/Gunnar`,
    imgPath: `/users/portraits/Zack.png`
  },
  {
    name: `Josh Humphrey`,
    role: `Full Stack Developer`,
    bio: `Full-stack developer, contributor at Harvest.finance. Loves Magic Internet Money and dogs. Can exit VIM.
    `,
    link: `https://linkedin.com/Gunnar`,
    imgPath: `/users/portraits/Jhump.png`
  },
  {
    name: `Bill Warren`,
    role: `Technical Advisor`,
    bio: `Product and smart contract development at Pool-Party and DAOhaus. Former startup and tech lawyer. `,
    link: `https://linkedin.com/Gunnar`,
    imgPath: ``,//`/users/portraits/Bill.png`
  },
  {
    name: `Gavin Nicholson`,
    role: `Community Manager`,
    bio: `Previously a political and small business consultant. Accidently stumbled into ETH in 2019 and have been in love ever since.`,
    link: `https://linkedin.com/Gunnar`,
    imgPath: `/users/portraits/Gavin.png`
  },
]

export const advisors = [
  {
    name: `Esfandiar Benjamin Lagevardi`,
    role: `Advisor`,
    bio: `Contributor at Harvest Finance. Dove into crypto in 2015 through data science, stayed on the blockchain ever since.`,
    link: `https://linkedin.com/Gunnar`,
    imgPath: ``, //`/users/Gunnar.png`
  },
  {
    name: `Alan Stivelman`,
    role: `Advisor`,
    bio: `Contributor at Harvest Finance. Dove into crypto in 2015 through data science, stayed on the blockchain ever since.`,
    link: `https://linkedin.com/Gunnar`,
    imgPath: ``, //`/users/Gunnar.png`
  },

]
export const partners = [
  {
    name: `RaidGuild`,
    link: `https://raidguild.org`,
    imgPath: `/partners/raidguild.svg`
  },
]

type TeamMembersProps = {
  teamMembers: any
  advisors: any
  partners: any
}

export const TeamMembers = ({ teamMembers, advisors, partners }: TeamMembersProps) => (
    <>
    <Box sx={{ fontSize: `16px`, textAlign: `center` }}>
      <ul sx={{display: `flex`, flexFlow: `row wrap`, justifyContent: `space-between`, mb: 5, ml: 0, pl: 0, listStyle: `none`}}>
        {teamMembers && (
          teamMembers.map((m,i) => (
            <li key={`teamm-${i}`} sx={{ flex: `0 0 49%`, width: `49%`, pl: 0, textAlign: `left`, mb: 6 }}>
              <div sx={{ position: `relative`, width: `100%`, maxWidth: `231px`, height: `285px` }}>
                {m.imgPath ? (
                  <AspectImage
                    key={`image-${i}`}
                    ratio={231/285}
                    src={m.imgPath}
                    sx={{background: `primary`, borderRadius: `32px`, width: `100%`, height: `100%`, objectFit: `cover`, mb: 3}}
                    />                  
                ) : (
                  <SVG icon="defaultAvatar" color="colors.background" right="0" top="0" width="231px" preserveAspectRatio="xMidYMid meet" />
                )}
              </div>
              <h3 sx={{
                fontSize: `display.md`, lineHeight: `md`, mb: 0
              }}><Text sx={{ fontSize: `display.md` }}>{m.name}</Text></h3>
              <p sx={{my: 0}}>{m.role}</p>
              <p sx={{ width: "70%", mt: 3 }}>{m.bio}</p>
              <Link href={m.link} sx={{ position: `relative`, transition: `all 0.2s ease`, "&:hover": { opacity: 0.7 }}}><SVG icon="linkedinCircle" color="red" left="0" top="0" width="32px" preserveAspectRatio="xMidYMid meet" /></Link>
            </li>
          ))
        )}
      </ul>
  </Box>
    <Box sx={{ fontSize: `16px`, textAlign: `center` }}>
      <Heading as="h2" sx={{textAlign: `left`, fontSize: `display.xl`, mb: 4}}>Advisors</Heading>
      <ul sx={{display: `flex`, flexFlow: `row wrap`, justifyContent: `space-between`, mb: 5, ml: 0, pl: 0, listStyle: `none`}}>
        {advisors && (
          advisors.map((m,i) => (
            <li key={`adv-${i}`} sx={{ flex: `0 0 49%`, width: `49%`, pl: 0, textAlign: `left`, mb: 3, pr: `50px` }}>
              <div sx={{ position: `relative`, width: `100%`, maxWidth: `231px`, height: `285px`, mb: 3 }}>
                {m.imgPath ? (
                  <AspectImage
                    key={`image-${i}`}
                    ratio={231 / 285}
                    src={m.imgPath}
                    sx={{ background: `primary`, borderRadius: `32px`, width: `100%`, height: `100%`, objectFit: `cover` }}/>                  
                ) : (
                  <SVG icon="defaultAvatar" color="colors.background" right="0" top="0" width="231px" preserveAspectRatio="xMidYMid meet" />
                )}
              </div>
              <h3 sx={{
                fontSize: `display.md`, lineHeight: `md`, mb: 0
              }}><Text sx={{ fontSize: `display.md` }}>{m.name}</Text></h3>
              <p sx={{my: 0}}>{m.role}</p>
              <p sx={{ width: "70%" }}>{m.bio}</p>
              <Link href={m.link} sx={{ position: `relative`, transition: `all 0.2s ease`, "&:hover": { opacity: 0.7 }}}><SVG icon="linkedinCircle" color="red" left="0" top="0" width="32px" preserveAspectRatio="xMidYMid meet" /></Link>
            </li>
          ))
        )}
      </ul>
    </Box>
    <Box sx={{ fontSize: `16px`, textAlign: `center` }}>
    <Heading as="h2" sx={{textAlign: `left`, fontSize: `display.xl`, mb: 4}}>Partners</Heading>
      <ul sx={{ml: 0, pl: 0, listStyle: `none`,}}>
        {partners && (
          partners.map((m,i) => (
            <li key={`adv-${i}`} sx={{ flex: `0 0 49%`, width: `49%`, pl: 0, textAlign: `left`, mb: 3, pr: `50px` }}>
            <div sx={{ position: `relative`, width: `100%`, maxWidth: `274px`, height: `72px`, mb: 3 }}>
              {m.imgPath && (
                <AspectImage
                  key={`image-${i}`}
                  ratio={274/72}
                  src={m.imgPath}
                  sx={{ width: `100%`, height: `100%`, objectFit: `cover`, mixBlendMode: `luminosity`
                }}/>                  
              )}
            </div>
              <Link href={m.link} sx={{position: `relative`, transition: `all 0.2s ease` }}>{ m.link }</Link>
            </li>
          ))
        )}
      </ul>
    </Box>
  </>
)
