import React from 'react'
import { Link } from 'gatsby';
import styled from '@emotion/styled'
import SVG from "../svg"

const AfLink = styled(Link)`
&.active {
  .line {
    width: 100% !important;
  }
}
`

const NavItem = ({ href = ``, label = ``, scrolled, logo = false }) => {
  return (
  <>
    {logo && (
      <Link to='/'
        sx={{
          variant: 'styles.navlink',
          alignSelf: `baseline`,
          width: [`40px`, `40px`, `50px`, `70px`],
          height: [`40px`, `40px`, `50px`, `70px`],
          p: 0,
          mr: [`50px`, `79px`],
          position: `relative`,
          flex: [`0 1 40px`, `0 1 40px`, `0 1 50px`, `0 1 70px`],
          transform: scrolled ? `scale(0.7) translateY(-5px)` : `scale(1) translateY(-10px)`,
          transition: `transform 0.2s ease-in-out`
        }}>
        <SVG icon="afLogo" width={[`40px`, `40px`, `50px`, `70px`]} left="0" bottom="0" top={[0]} />
      </Link>
    ) || (
        <AfLink to={href}
          activeStyle={{ color: `#2D71F4` }}
          sx={{
            variant: 'styles.navlink',
            p: 0,
            mr: [`30px`, `30px`, `30px`, `50px`, `79px`],
            position: `relative`,
            "&:hover, &[aria-current='page']": {
              ".line": {
                width: `100%`
              }
            },
            transform: scrolled ? `scale(0.8) translateY(5px)` : `scale(1)`,
            transition: `transform 0.2s ease-in-out`
          }}>
          <span sx={{
            display: `block`,
            paddingBottom: scrolled ? `25px` : `20px`,
            transform: `padding 0.2s ease-in-out`,
          }}>{label}</span>
          <span className="line" sx={{
            position: `absolute`,
            backgroundColor: `secondary`,
            height: `4px`,
            width: `0%`,
            bottom: 0,
            left: 0,
            transition: `width 0.3s ease-in-out`,
          }}></span>
        </AfLink>

      )}
    </>
  )
}

export default NavItem
