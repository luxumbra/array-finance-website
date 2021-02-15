/** @jsx jsx */
import React from 'react'
import { Box, Heading, Text, AspectImage, Link, jsx } from "theme-ui"
import SVG from "./svg"

export const teamMembers = [
  {
    name: `Gunnar Olsen`,
    role: `Founder`,
    bio: `Contributor at Harvest Finance. Dove into crypto in 2015 through data science, stayed on the blockchain ever since.`,
    link: `https://www.linkedin.com/in/gunnarolsen/`,
    imgPath: `/users/portraits/Gunnar.png`
  },
  {
    name: `Joshua Lapidus`,
    role: `Operations`,
    bio: `DAO aficionado and DeFi ReGen. Former ConsenSys and Lyft.`,
    link: `https://www.linkedin.com/in/JoshuaLapidus`,
    imgPath: `/users/portraits/Joshua.png`
  },
  {
    name: `Zack Rowland`,
    role: `Senior Engineer`,
    bio: `Long time advocate for crypto.  Network security and optimization by day, foreign film enthusiast by night.  `,
    link: `https://www.linkedin.com/in/zackrowland/`,
    imgPath: `/users/portraits/Zack.png`
  },
  {
    name: `Josh Humphrey`,
    role: `Full Stack Developer`,
    bio: `Full-stack developer, contributor at Harvest.finance. Loves Magic Internet Money and dogs. Can exit VIM.
    `,
    link: `https://www.linkedin.com/in/joshahumphrey/`,
    imgPath: `/users/portraits/Jhump.png`
  },
  {
    name: `Bill Warren`,
    role: `Technical Advisor`,
    bio: `Product and smart contract development at Pool-Party and DAOhaus. Former startup and tech lawyer. `,
    link: `https://www.linkedin.com/in/bill-warren-31442021/`,
    imgPath: ``,//`/users/portraits/Bill.png`
  },
  {
    name: `Gavin Nicholson`,
    role: `Community Manager`,
    bio: `Previously a political and small business consultant. Accidently stumbled into ETH in 2019 and have been in love ever since.`,
    link: `https://www.linkedin.com/in/gavinnicholson97/`,
    imgPath: `/users/portraits/Gavin.png`
  },
]

export const advisors = [
  {
    name: `Esfandiar Benjamin Lagevardi`,
    role: `Advisor`,
    bio: `Long time advocate for crypto.  Network security and optimization by day, foreign film enthusiast by night.  `,
    link: ``,
    imgPath: ``, //`/users/Gunnar.png`
  },
  {
    name: `Alan Stivelman`,
    role: `Advisor`,
    bio: `Crypto fund manager, liquidity provider, market maker, and content creator with a focus in designing insured investment strategies across the DeFi ecosystem.`,
    link: `https://www.linkedin.com/in/alanstivelman/`,
    imgPath: ``, //`/users/Gunnar.png`
  },

]
export const partners = [
  {
    name: `RaidGuild`,
    link: `https://raidguild.org`,
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
    <Box sx={{ fontSize: `16px`, textAlign: `center` }}>
      <ul sx={{display: `flex`, flexFlow: `row wrap`, justifyContent: `space-between`, mb: [0, 0, 5], ml: 0, pl: 0, listStyle: `none`}}>
        {teamMembers && (
          teamMembers.map((m,i) => (
            <li key={`team-${i}`} sx={{ flex: [`0 0 100%`,`0 0 100%`, `0 0 49%`], width: [`100%`,`100%`,`49%`], pl: 0, textAlign: `left`, mb: 6 }}>
              <div sx={{ position: `relative`, width: `100%`, maxWidth: [`162px`, `162px`, `162px`, `162px`, `162px`, `231px`], height: [`200px`, `200px`, `200px`, `200px`, `200px`, `285px`] }}>
                {m.imgPath ? (
                  <div sx={{position: `relative`}}>
                  <AspectImage
                    key={`image-${i}`}
                    ratio={231/285}
                    src={m.imgPath}
                    sx={{background: `primary`, borderRadius: `32px`, width: `100%`, height: `100%`, objectFit: `cover`, mb: 3, zIndex: 100}}
                    />
                    <div sx={{position: `absolute`, top: 0, left: 0, width: `100%`, height: `100%`, backgroundColor: `rgb(15, 26, 74, 0.5)`, zIndex: 200}}></div>
                    </div>
                ) : (
                  <SVG icon="defaultAvatar" color="colors.background" right="0" top="0" width={[`162px`,`162px`,`162px`,`162px`,`162px`,`231px`]} preserveAspectRatio="xMidYMid meet" />
                    )}
              </div>
              <h3 sx={{
                fontSize: `display.md`, lineHeight: `md`, mb: 0
              }}><Text sx={{ fontSize: `display.md` }}>{m.name}</Text></h3>
              <p sx={{my: 0}}>{m.role}</p>
              <p sx={{ width: [`100%`, "70%"], mt: 3, lineHeight: `1.22`, fontSize: [`body.xs`, `body.sm`, `body.sm`, `body.sm`, `body.md`] }}>{m.bio}</p>
              {m.link && (
                <Link href={m.link} sx={{ position: `relative`, transition: `all 0.2s ease`, "&:hover": { opacity: 0.7 }}}><SVG icon="linkedinCircle" color="white" left="0" top="0" width="32px" preserveAspectRatio="xMidYMid meet" /></Link>
              )}
            </li>
          ))
        )}
      </ul>
  </Box>
    <Box sx={{
      textAlign: `center` }}>
      <Heading as="h2" sx={{textAlign: `left`, fontSize: [`body.xxl`, `display.lg`, `display.lg`, `display.lg`, `display.lg`, `display.xl`], lineHeight: 1.22, mb: [3,4,4]}}>Advisors</Heading>
      <ul sx={{display: `flex`, flexFlow: `row wrap`, justifyContent: `space-between`, mt: [0], mb: [0,0,5], ml: 0, pl: 0, listStyle: `none`}}>
        {advisors && (
          advisors.map((m,i) => (
            <li key={`adv-${i}`} sx={{ flex: [`0 0 100%`,`0 0 100%`, `0 0 49%`], width: [`100%`,`100%`,`49%`], pl: 0, textAlign: `left`, mb: [6,5, 3], pr: `50px` }}>
              <div sx={{ position: `relative`, width: `100%`, maxWidth: [`162px`,`162px`,`162px`,`162px`,`162px`,`231px`], height: [`200px`,`200px`,`200px`,`200px`,`200px`,`285px`], mb: [3] }}>
                {m.imgPath ? (
                  <div sx={{position: `relative`}}>
                  <AspectImage
                    key={`image-${i}`}
                    ratio={231 / 285}
                    src={m.imgPath}
                    sx={{ background: `primary`, borderRadius: `32px`, width: `100%`, height: `100%`, objectFit: `cover` }} />
                  <div sx={{position: `absolute`, top: 0, left: 0, width: `100%`, height: `100%`, backgroundColor: `rgb(15, 26, 74, 0.5)`, zIndex: 200}}></div>
                    </div>
                ) : (
                  <SVG icon="defaultAvatar" color="colors.background" right="0" top="0" width={[`162px`,`162px`,`162px`,`162px`,`162px`,`231px`]} preserveAspectRatio="xMidYMid meet" />
                )}
              </div>
              <h3 sx={{
                 lineHeight: `md`, mb: 0
              }}><Text sx={{ fontSize: [`body.lg`, `display.md`, `display.md`] }}>{m.name}</Text></h3>
              <p sx={{my: 0}}>{m.role}</p>
              <p sx={{ width: [`100%`, "70%"], lineHeight: `1.22`, fontSize: [`body.xs`, `body.sm`, `body.sm`,`body.sm`,`body.sm`, `body.md`]}}>{m.bio}</p>
              <Link href={m.link} sx={{ position: `relative`, transition: `all 0.2s ease`, "&:hover": { opacity: 0.7 }}}><SVG icon="linkedinCircle" color="red" left="0" top="0" width="32px" preserveAspectRatio="xMidYMid meet" /></Link>
            </li>
          ))
        )}
      </ul>
    </Box>
    <Box sx={{textAlign: `center` }}>
    <Heading as="h2" sx={{textAlign: `left`, fontSize: [`body.xxl`, `display.lg`, `display.lg`, `display.lg`, `display.lg`, `display.xl`], lineHeight: 1.22, mb: [4,5,5]}}>Partners</Heading>
      <ul sx={{ml: 0, pl: 0, listStyle: `none`,}}>
        {partners && (
          partners.map((m,i) => (
            <li key={`adv-${i}`} sx={{ flex: `0 0 49%`, width: `49%`, pl: 0, textAlign: `left`, mb: 3, pr: `50px` }}>
            <div sx={{ position: `relative`, width: `100%`, maxWidth: `274px`, maxHeight: `72px`, mb: 3 }}>
              <Link href={m.link} sx={{ position: `relative`, transition: `all 0.2s ease`, fontSize: [`body.xs`, `body.sm`, `body.sm`, `body.sm`, `body.md`] }}>
              {m.imgPath && (
                <AspectImage
                  key={`image-${i}`}
                  ratio={274/72}
                  src={m.imgPath}
                  sx={{ width: `100%`, height: `100%`, objectFit: `cover`, backgroundBlendMode: `luminosity`
                }}/>
              )}
              </Link>
            </div>
            </li>
          ))
        )}
      </ul>
    </Box>
  </>
)
