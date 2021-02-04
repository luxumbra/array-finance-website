/** @jsx jsx */
import { Box, jsx } from "theme-ui"
import Divider from "../elements/divider"
import Inner from "../elements/inner"
import Content from "../elements/content"
import SVG from "./svg"
import { UpDown, UpDownWide } from "../styles/animations"
// @ts-ignore

type PageSectionProps = {
  children: React.ReactNode
  styles?: object
}


const PageSection = ({ children, styles }:PageSectionProps) => {
  // console.log(styles);
  
  return (
    <div css={{position: `relative`, width: `full`}}>
      <Inner>
        {children}
      </Inner>
    </div>
  )
}

export default PageSection
